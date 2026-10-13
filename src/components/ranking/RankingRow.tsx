import type { RankingUser } from '../../data/ranking'
import { rankingStyles as styles } from '../../pages/ranking/Ranking.styles'

export default function RankingRow({ user }: { user: RankingUser }) {
  return <div css={styles.row} role="row" data-me={user.isMe} aria-label={`${user.rank}위 ${user.name}, ${user.xp.toLocaleString('ko-KR')} XP`}>
    <div role="cell"><span css={styles.position} data-top={user.rank <= 3} data-highlight={user.rank <= 3 || user.isMe}>{user.rank}</span></div>
    <div role="cell"><span css={[styles.avatar, { color: user.avatarColor, backgroundColor: user.avatarBackground }]} aria-hidden="true">{user.initial}</span></div>
    <div css={styles.user} role="cell"><p css={styles.name}>{user.name}{user.isMe && <span css={styles.me}>나</span>}</p><p css={styles.solved}>해결 {user.solved}문제</p></div>
    <div css={styles.xp} role="cell" data-me={user.isMe}>{user.xp.toLocaleString('ko-KR')} XP</div>
  </div>
}
