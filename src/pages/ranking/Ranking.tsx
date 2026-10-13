import { useState } from 'react'
import PageHeading from '../../components/layout/PageHeading'
import RankingTabs from '../../components/ranking/RankingTabs'
import RankingRow from '../../components/ranking/RankingRow'
import { rankingUsers, rankingScopes, type RankingScope } from '../../data/ranking'
import { rankingStyles as styles } from './Ranking.styles'

export default function Ranking() {
  const [scope, setScope] = useState<RankingScope>('all')
  const currentScope = rankingScopes.find(item => item.id === scope)!
  const users = scope === 'all' ? rankingUsers : []
  return <>
    <PageHeading prefix="ranking" id="ranking-title" eyebrow={<><img src="/images/ranking/ranking.svg" alt="" />랭킹</>} title="현재 순위를 확인하세요." description="전체 사용자, 내 그룹, 나와 친구의 순위를 비교할 수 있습니다." />
    <section css={styles.content} aria-label="사용자 랭킹">
      <RankingTabs scope={scope} onChange={setScope} />
      <p css={styles.description}>{currentScope.description}</p>
      <div css={styles.panel} role="tabpanel" id="ranking-panel" aria-labelledby={`ranking-tab-${scope}`} tabIndex={0}>
        <div css={styles.table} role="table" aria-label={currentScope.description}>
          <div role="rowgroup"><div css={styles.header} role="row"><span role="columnheader">순위</span><span role="columnheader" aria-colspan={2}>사용자</span><span role="columnheader">XP</span></div></div>
          <div role="rowgroup">{users.map(user => <RankingRow key={user.id} user={user} />)}</div>
        </div>
        {users.length === 0 && <p css={styles.empty} role="status">{scope === 'group' ? '표시할 그룹 순위가 없습니다.' : '표시할 친구 순위가 없습니다.'}</p>}
      </div>
    </section>
  </>
}
