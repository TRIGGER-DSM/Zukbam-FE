import { useSyncExternalStore } from 'react'
import { getSession, subscribeSession } from './session'

export function useAuthSession() {
  return useSyncExternalStore(subscribeSession, getSession)
}
