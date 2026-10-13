export const records = [
  { id: 1, problemId: 1287, title: '계단 오르기', date: '8. 30. 오후 10:05', submittedAt: '2026년 8월 30일 22:05', daysAgo: 0, language: 'Python 3', result: '정답' },
  { id: 2, problemId: 1287, title: '계단 오르기', date: '8월 27일 18:42', submittedAt: '2026년 8월 27일 18:42', daysAgo: 3, language: 'Python 3', result: '정답' },
  { id: 3, problemId: 1912, title: '연속합', date: '8월 26일 21:14', submittedAt: '2026년 8월 26일 21:14', daysAgo: 4, language: 'C++17', result: '오답' },
  { id: 4, problemId: 9251, title: 'LCS', date: '8월 24일 16:02', submittedAt: '2026년 8월 24일 16:02', daysAgo: 6, language: 'Java 17', result: '정답' },
]

// Code and metrics supplied by the Figma solution-detail sample.
export const sampleSolution = {
  recordId: 2,
  runtime: '36ms',
  memory: '31.4MB',
  code: 'n = int(input())\nscore = [0] + [int(input()) for _ in range(n)]\n\ndp = [0] * (n + 1)\ndp[1] = score[1]\nprint(dp[n])',
}
