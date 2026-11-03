import { ApiError, createApiClient } from './client'
import { getSession } from '../auth/session'

const request = createApiClient(import.meta.env?.VITE_API_BASE_URL ?? '')
export type ProblemSummary = { problemId: number; title: string; rank: string }
export type ProblemDetail = ProblemSummary & {
  content: string
  memoryLimit: number
  timeLimit: number
  testCases: { testcaseId: number; input: string | null; output: string; isSample: boolean }[]
}
export type ProblemList = { problems: ProblemSummary[]; page: number; size: number; totalElements: number; totalPages: number }
export type Profile = {
  userId: number; email: string; name: string; role: 'STUDENT' | 'TEACHER'
  score: number; rank: string; solvedCount: number
  student: { grade: number; class: number; number: number } | null
}
export type Streak = { currentStreak: number; maxStreak: number; lastSolvedDate: string | null }
export type Grass = { from: string; to: string; days: { date: string; solvedCount: number }[] }
export type GroupSummary = { groupId: number; title: string; introduce: string | null; myRole: 'OWNER' | 'MEMBER' }
export type GroupDetail = {
  groupId: number; title: string; introduce: string | null; createdAt: string
  members: { userId: number; name: string; role: 'OWNER' | 'MEMBER'; joinedAt: string }[]
}

export async function apiRequest<T>(path: string, method = 'GET', body?: unknown, signal?: AbortSignal, authenticated = true): Promise<T> {
  const token = getSession()?.accessToken
  if (authenticated && !token) throw new ApiError('로그인 후 이용해 주세요.', 401)
  return await request(path, body, '요청을 처리하지 못했습니다. 다시 시도해 주세요.', {
    method, token, signal,
  }) as T
}

export const service = {
  problems: (page: number, signal?: AbortSignal) => apiRequest<ProblemList>(`/problems?page=${page}&size=20`, 'GET', undefined, signal, false),
  problem: (id: number, signal?: AbortSignal) => apiRequest<ProblemDetail>(`/problems/${id}`, 'GET', undefined, signal, false),
  deleteProblem: (id: number) => apiRequest<void>(`/problems/${id}`, 'DELETE'),
  profile: (id: string = 'me', signal?: AbortSignal) => apiRequest<Profile>(`/users/${id}`, 'GET', undefined, signal),
  streak: (id = 'me', signal?: AbortSignal) => apiRequest<Streak>(`/streaks/${id}`, 'GET', undefined, signal),
  grass: (id: string, from: string, to: string, signal?: AbortSignal) => apiRequest<Grass>(`/streaks/${id}/grass?${new URLSearchParams({ from, to })}`, 'GET', undefined, signal),
  groups: (signal?: AbortSignal) => apiRequest<{ groups: GroupSummary[] }>('/groups/me', 'GET', undefined, signal),
  group: (id: number, signal?: AbortSignal) => apiRequest<GroupDetail>(`/groups/${id}`, 'GET', undefined, signal),
  createGroup: (title: string, introduce: string) => apiRequest<void>('/groups', 'POST', { title, introduce }),
  updateGroup: (id: number, title: string, introduce: string) => apiRequest<void>(`/groups/${id}`, 'PUT', { title, introduce }),
  deleteGroup: (id: number) => apiRequest<void>(`/groups/${id}`, 'DELETE'),
}
