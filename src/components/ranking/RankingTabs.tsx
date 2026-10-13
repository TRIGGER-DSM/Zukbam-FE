import { useRef, type KeyboardEvent } from 'react'
import { rankingScopes, type RankingScope } from '../../data/ranking'
import { rankingStyles as styles } from '../../pages/ranking/Ranking.styles'

export default function RankingTabs({ scope, onChange }: { scope: RankingScope; onChange: (scope: RankingScope) => void }) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    if (event.key === 'ArrowRight') next = (index + 1) % rankingScopes.length
    else if (event.key === 'ArrowLeft') next = (index + rankingScopes.length - 1) % rankingScopes.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = rankingScopes.length - 1
    else return
    event.preventDefault()
    onChange(rankingScopes[next].id)
    tabs.current[next]?.focus()
  }
  return <div css={styles.tabs} role="tablist" aria-label="랭킹 범위">
    {rankingScopes.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element }} css={styles.tab} type="button" role="tab" id={`ranking-tab-${item.id}`} aria-selected={scope === item.id} aria-controls="ranking-panel" tabIndex={scope === item.id ? 0 : -1} onClick={() => onChange(item.id)} onKeyDown={event => handleKey(event, index)}>{item.label}</button>)}
  </div>
}
