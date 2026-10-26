import { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export type AdminStudent = { id: string; name: string; email: string; group: string; submitted: number; correct: number; rate: string; recent: string; daysAgo: number }
export const adminStudents: AdminStudent[] = [
  { id: '20240921', name: '박지훈', email: 'jihoon@school.ac.kr', group: '1학년 3반', submitted: 86, correct: 71, rate: '82.6%', recent: '오늘 14:02', daysAgo: 0 },
  { id: '20240572', name: '최유진', email: 'yujin@school.ac.kr', group: '1학년 3반', submitted: 74, correct: 58, rate: '78.4%', recent: '오늘 09:41', daysAgo: 0 },
  { id: '20241234', name: '김민서', email: 'minseo@school.ac.kr', group: '1학년 3반', submitted: 61, correct: 42, rate: '68.9%', recent: '어제 21:14', daysAgo: 1 },
  { id: '20240173', name: '이서연', email: 'seoyeon@school.ac.kr', group: '1학년 4반', submitted: 48, correct: 30, rate: '62.5%', recent: '3일 전', daysAgo: 3 },
  { id: '20241882', name: '정도윤', email: 'doyun@school.ac.kr', group: '알고리즘 스터디', submitted: 39, correct: 21, rate: '53.8%', recent: '5일 전', daysAgo: 5 },
  { id: '20241628', name: '윤서준', email: 'seojun@school.ac.kr', group: '1학년 4반', submitted: 12, correct: 5, rate: '41.7%', recent: '12일 전', daysAgo: 12 },
  { id: '20241011', name: '한준호', email: 'junho@school.ac.kr', group: '1학년 3반', submitted: 55, correct: 39, rate: '71.2%', recent: '어제', daysAgo: 1 },
  { id: '20241012', name: '배지민', email: 'jimin@school.ac.kr', group: '1학년 3반', submitted: 33, correct: 20, rate: '60.1%', recent: '3일 전', daysAgo: 3 },
  { id: '20241013', name: '윤도현', email: 'dohyun@school.ac.kr', group: '1학년 3반', submitted: 21, correct: 11, rate: '52.4%', recent: '5일 전', daysAgo: 5 },
  ...[['20241311', '김도현', 'dohyun.k'], ['20241402', '김서아', 'seoa'], ['20241519', '김하준', 'hajun']].map(([id, name, email]) => ({ id, name, email: `${email}@school.ac.kr`, group: '', submitted: 0, correct: 0, rate: '0%', recent: '-', daysAgo: 99 })),
]
export type AdminProblem = { id: number; title: string; level: string; category: string; date: string; submissions: number; rate: string; description: string; input: string; output: string; time: string; memory: string }
const stairDescription = '계단 아래의 시작점에서 꼭대기까지 올라가며 점수의 합을 최대로 만들어야 합니다. 한 번에 한 계단 또는 두 계단을 오를 수 있고, 연속된 세 계단을 모두 밟을 수 없습니다.'
export const initialProblems: AdminProblem[] = [
  [1287, '계단 오르기', 'Silver 3', '동적 계획법', '2026.08.01', 312, '43.7%'],
  [1912, '연속합', 'Silver 2', '동적 계획법', '2026.08.01', 268, '36.9%'],
  [2206, '벽 부수고 이동하기', 'Gold 3', '그래프', '2026.08.05', 154, '24.6%'],
  [9251, 'LCS', 'Gold 5', '문자열', '2026.08.09', 201, '40.2%'],
  [1003, '피보나치 함수', 'Silver 3', '동적 계획법', '2026.08.12', 0, '-'],
  [11724, '연결 요소의 개수', 'Silver 2', '그래프', '2026.08.15', 87, '51.3%'],
].map(([id, title, level, category, date, submissions, rate]) => ({ id: Number(id), title: String(title), level: String(level), category: String(category), date: String(date), submissions: Number(submissions), rate: String(rate), description: id === 1287 ? stairDescription : '', input: id === 1287 ? '6\n10\n20\n15\n25\n10\n20' : '', output: id === 1287 ? '75' : '', time: '1', memory: '128' }))
export type AdminGroup = { id: number; name: string; description: string; kind: string; count: number; members: string[] }
export const initialGroups: AdminGroup[] = [
  { id: 1, name: '1학년 3반', description: '1학년 3반 정규 코딩 스터디 그룹', kind: '반', count: 28, members: adminStudents.filter(s => s.group === '1학년 3반').map(s => s.id) },
  { id: 2, name: '1학년 4반', description: '1학년 4반 코딩 그룹', kind: '반', count: 27, members: ['20240173', '20241628'] },
  { id: 3, name: '알고리즘 스터디', description: '함께 성장하는 알고리즘 스터디', kind: '스터디', count: 12, members: ['20241882'] },
  { id: 4, name: '1학년 전체', description: '1학년 전체 학생 그룹', kind: '학교', count: 112, members: adminStudents.slice(0, 9).map(s => s.id) },
]
type AdminStore = { problems: AdminProblem[]; setProblems: Dispatch<SetStateAction<AdminProblem[]>>; groups: AdminGroup[]; setGroups: Dispatch<SetStateAction<AdminGroup[]>>; message: string; setMessage: Dispatch<SetStateAction<string>> }
export const AdminContext = createContext<AdminStore | null>(null)
export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) throw new Error('AdminLayout is required')
  return context
}
