export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status = 0) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export function createApiClient(baseUrl: string) {
  const base = baseUrl.trim().replace(/\/+$/, '')

  return async function post(
    path: string,
    body: unknown,
    fallbackMessage: string,
    options: { method?: string; token?: string; signal?: AbortSignal } = {},
  ): Promise<unknown> {
    if (!base) {
      throw new ApiError(
        '현재 서버 연결 설정이 완료되지 않았습니다. 잠시 후 다시 시도해 주세요.',
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20_000)
    try {
      const response = await fetch(`${base}${path}`, {
        method: options.method ?? 'POST',
        headers: {
          ...(body === undefined ? {} : { 'Content-Type': 'application/json' }),
          ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
        },
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: options.signal
          ? AbortSignal.any([controller.signal, options.signal])
          : controller.signal,
      })
      const data: unknown = await response.json().catch(() => null)
      if (!response.ok) {
        let message = fallbackMessage
        if (response.status >= 500) {
          message = '서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        } else if (
          isRecord(data) &&
          typeof data.message === 'string' &&
          data.message.trim()
        ) {
          message = data.message
        } else if (
          isRecord(data) &&
          Array.isArray(data.message) &&
          data.message.every((item) => typeof item === 'string')
        ) {
          message = data.message.join(' ')
        }
        throw new ApiError(message, response.status)
      }
      return data
    } catch (error) {
      if (error instanceof ApiError) throw error
      if (options.signal?.aborted) throw error
      throw new ApiError(
        controller.signal.aborted
          ? '서버 응답 시간이 초과되었습니다. 다시 시도해 주세요.'
          : '서버에 연결할 수 없습니다. 네트워크 연결을 확인해 주세요.',
      )
    } finally {
      clearTimeout(timeout)
    }
  }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : '요청을 처리하지 못했습니다. 다시 시도해 주세요.'
}
