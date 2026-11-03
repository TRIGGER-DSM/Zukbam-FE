import { ApiError, createApiClient, isRecord } from './client'

export type AuthTokens = { accessToken: string; refreshToken: string }
export type LoginRequest = { email: string; password: string }
type SignupBase = LoginRequest & { name: string; emailVerifiedToken: string }
export type StudentSignupRequest = SignupBase & {
  grade: number
  class: number
  number: number
}
export type TeacherSignupRequest = SignupBase & { teacherCode: string }
export type EmailVerification = { verificationId: string; expiresIn: number }
export type VerifyEmailRequest = {
  email: string
  verificationId: string
  verificationCode: string
}

function readTokens(value: unknown): AuthTokens {
  if (
    !isRecord(value) ||
    typeof value.accessToken !== 'string' ||
    !value.accessToken ||
    typeof value.refreshToken !== 'string' ||
    !value.refreshToken
  ) {
    throw new ApiError('서버의 로그인 응답 형식이 올바르지 않습니다.')
  }
  return { accessToken: value.accessToken, refreshToken: value.refreshToken }
}

export function createAuthApi(baseUrl: string) {
  const post = createApiClient(baseUrl)
  return {
    async sendEmailCode(email: string): Promise<EmailVerification> {
      const data = await post(
        '/auth/email-verifications',
        { email },
        '인증 메일을 보내지 못했습니다. 이메일을 확인해 주세요.',
      )
      if (
        !isRecord(data) ||
        typeof data.verificationId !== 'string' ||
        !data.verificationId ||
        typeof data.expiresIn !== 'number' ||
        !Number.isInteger(data.expiresIn) ||
        data.expiresIn <= 0
      ) {
        throw new ApiError('서버의 이메일 인증 응답 형식이 올바르지 않습니다.')
      }
      return { verificationId: data.verificationId, expiresIn: data.expiresIn }
    },
    async verifyEmail(input: VerifyEmailRequest): Promise<string> {
      const data = await post(
        '/auth/email-verifications/verify',
        input,
        '인증 코드가 올바르지 않거나 만료되었습니다. 코드를 확인하거나 재전송해 주세요.',
      )
      if (
        !isRecord(data) ||
        typeof data.emailVerifiedToken !== 'string' ||
        !data.emailVerifiedToken
      ) {
        throw new ApiError(
          '서버의 이메일 인증 토큰 응답 형식이 올바르지 않습니다.',
        )
      }
      return data.emailVerifiedToken
    },
    async signupStudent(input: StudentSignupRequest): Promise<AuthTokens> {
      return readTokens(
        await post(
          '/auth/sign-up',
          input,
          '회원가입 정보를 확인해 주세요. 이미 가입한 이메일일 수도 있습니다.',
        ),
      )
    },
    async signupTeacher(input: TeacherSignupRequest): Promise<AuthTokens> {
      return readTokens(
        await post(
          '/auth/sign-up/admin',
          input,
          '회원가입 정보와 선생님 고유 코드를 확인해 주세요.',
        ),
      )
    },
    async login(input: LoginRequest): Promise<AuthTokens> {
      return readTokens(
        await post('/auth/sign-in', input, '이메일 또는 비밀번호를 확인해 주세요.'),
      )
    },
  }
}

export const authApi = createAuthApi(import.meta.env?.VITE_API_BASE_URL ?? '')
