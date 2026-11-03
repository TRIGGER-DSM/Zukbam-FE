import type { AuthTokens } from '../api/auth'

type AuthSession = AuthTokens & { email: string }
const storageKey = 'zubam.auth'
const listeners = new Set<() => void>()

function readSession(): AuthSession | null {
  try {
    const stored: unknown = JSON.parse(
      sessionStorage.getItem(storageKey) ?? 'null',
    )
    if (
      typeof stored === 'object' &&
      stored !== null &&
      'accessToken' in stored &&
      'refreshToken' in stored &&
      'email' in stored &&
      typeof stored.accessToken === 'string' &&
      typeof stored.refreshToken === 'string' &&
      typeof stored.email === 'string'
    ) {
      return {
        accessToken: stored.accessToken,
        refreshToken: stored.refreshToken,
        email: stored.email,
      }
    }
  } catch {
    /* Storage can be unavailable; keep the session in memory in that case. */
  }
  return null
}

let currentSession = readSession()
export function getSession() {
  return currentSession
}
export function subscribeSession(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
export function saveSession(tokens: AuthTokens, email: string) {
  currentSession = { ...tokens, email }
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(currentSession))
  } catch {
    /* Memory session still works. */
  }
  listeners.forEach((listener) => listener())
}
export function clearSession() {
  currentSession = null
  try {
    sessionStorage.removeItem(storageKey)
  } catch {
    /* Memory session is already cleared. */
  }
  listeners.forEach((listener) => listener())
}
