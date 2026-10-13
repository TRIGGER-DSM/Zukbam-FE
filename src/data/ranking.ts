export const rankingUsers = [
  { id: 'park', rank: 1, name: '박지훈', initial: 'P', solved: 593, xp: 8942, avatarColor: '#50D890', avatarBackground: '#193529', isMe: false },
  { id: 'choi', rank: 2, name: '최유진', initial: 'C', solved: 548, xp: 8317, avatarColor: '#FF7D7D', avatarBackground: '#432323', isMe: false },
  { id: 'han', rank: 3, name: '한준호', initial: 'H', solved: 517, xp: 7724, avatarColor: '#73A7FF', avatarBackground: '#1E3047', isMe: false },
  { id: 'minseo', rank: 4, name: '김민서', initial: 'M', solved: 426, xp: 4286, avatarColor: '#39FF14', avatarBackground: '#062900', isMe: true },
  { id: 'lee', rank: 5, name: '이서연', initial: 'L', solved: 401, xp: 4271, avatarColor: '#50D890', avatarBackground: '#193529', isMe: false },
  { id: 'jung', rank: 6, name: '정우진', initial: 'J', solved: 388, xp: 4102, avatarColor: '#73A7FF', avatarBackground: '#1E3047', isMe: false },
  { id: 'yoon', rank: 7, name: '윤도현', initial: 'Y', solved: 371, xp: 3988, avatarColor: '#FFC15C', avatarBackground: '#3A2D18', isMe: false },
  { id: 'bae', rank: 8, name: '배지민', initial: 'B', solved: 352, xp: 3794, avatarColor: '#FF7D7D', avatarBackground: '#432323', isMe: false },
]
export type RankingUser = typeof rankingUsers[number]
export const rankingScopes = [
  { id: 'all', label: '전체', description: '전체 사용자 순위' },
  { id: 'group', label: '그룹', description: '내 그룹 사용자 순위' },
  { id: 'friends', label: '친구', description: '나와 친구의 순위' },
] as const
export type RankingScope = typeof rankingScopes[number]['id']
