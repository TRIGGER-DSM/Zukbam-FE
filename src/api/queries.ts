import { useQuery } from '@tanstack/react-query'
import { useAuthSession } from '../auth/useAuthSession'
import { service } from './service'

export function useProfile(id = 'me') {
  const session = useAuthSession()
  return useQuery({ queryKey: ['profile', session?.accessToken, id], queryFn: ({ signal }) => service.profile(id, signal), enabled: Boolean(session) })
}

export function useActivity(id = 'me', year?: number) {
  const session = useAuthSession()
  const today = new Date(new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Seoul' }).format(new Date()) + 'T00:00:00Z')
  const end = year ? new Date(Date.UTC(year, 11, 31)) : today
  const start = year ? new Date(Date.UTC(year, 0, 1)) : new Date(end.getTime() - 364 * 86400000)
  const from = start.toISOString().slice(0, 10)
  const to = end.toISOString().slice(0, 10)
  const streak = useQuery({ queryKey: ['streak', session?.accessToken, id], queryFn: ({ signal }) => service.streak(id, signal), enabled: Boolean(session) })
  const grass = useQuery({ queryKey: ['grass', session?.accessToken, id, from, to], queryFn: ({ signal }) => service.grass(id, from, to, signal), enabled: Boolean(session) })
  const counts = new Map(grass.data?.days.map(day => [day.date, day.solvedCount]))
  const days = Array.from({ length: Math.round((end.getTime() - start.getTime()) / 86400000) + 1 }, (_, index) => {
    const date = new Date(start.getTime() + index * 86400000).toISOString().slice(0, 10)
    return { date, count: counts.get(date) ?? 0 }
  })
  return { streak, grass, days, loggedIn: Boolean(session), activeDays: days.filter(day => day.count > 0).length, total: days.reduce((sum, day) => sum + day.count, 0) }
}
