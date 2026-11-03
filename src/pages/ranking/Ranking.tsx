import { useState, useRef, type KeyboardEvent } from 'react'
import {
  rankingUsers,
  rankingScopes,
  type RankingScope,
} from '../../data/ranking'
import {
  RankingContent,
  ScopeDescription,
  RankingPanel,
  RankingTable,
  RankingHeader,
  EmptyRankingNotice,
  RankingHeading,
  RankingEyebrow,
  RankingHeadingDescription,
  RankingScopeTabs,
  RankingScopeTab,
  RankingRecord,
  RankPosition,
  UserAvatar,
  UserDetails,
  UserName,
  CurrentUserBadge,
  SolvedCount,
  ExperienceCell,
} from './Ranking.styles'

export default function Ranking() {
  const [scope, setScope] = useState<RankingScope>('all')
  const currentScope = rankingScopes.find((item) => item.id === scope)!
  const users = scope === 'all' ? rankingUsers : []
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    if (event.key === 'ArrowRight') next = (index + 1) % rankingScopes.length
    else if (event.key === 'ArrowLeft')
      next = (index + rankingScopes.length - 1) % rankingScopes.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = rankingScopes.length - 1
    else return
    event.preventDefault()
    setScope(rankingScopes[next].id)
    tabs.current[next]?.focus()
  }
  return (
    <>
      <RankingHeading aria-labelledby="ranking-title">
        <div>
          <RankingEyebrow>
            {
              <>
                <img src="/images/ranking/ranking.svg" alt="" />
                랭킹
              </>
            }
          </RankingEyebrow>
          <h1 id="ranking-title">{'현재 순위를 확인하세요.'}</h1>
          <RankingHeadingDescription>
            {'전체 사용자, 내 그룹, 나와 친구의 순위를 비교할 수 있습니다.'}
          </RankingHeadingDescription>
        </div>
      </RankingHeading>
      <RankingContent aria-label="사용자 랭킹">
        <RankingScopeTabs role="tablist" aria-label="랭킹 범위">
          {rankingScopes.map((item, index) => (
            <RankingScopeTab
              key={item.id}
              ref={(element) => {
                tabs.current[index] = element
              }}
              type="button"
              role="tab"
              id={`ranking-tab-${item.id}`}
              aria-selected={scope === item.id}
              aria-controls="ranking-panel"
              tabIndex={scope === item.id ? 0 : -1}
              onClick={() => setScope(item.id)}
              onKeyDown={(event) => handleKey(event, index)}
            >
              {item.label}
            </RankingScopeTab>
          ))}
        </RankingScopeTabs>
        <ScopeDescription>{currentScope.description}</ScopeDescription>
        <RankingPanel
          role="tabpanel"
          id="ranking-panel"
          aria-labelledby={`ranking-tab-${scope}`}
          tabIndex={0}
        >
          <RankingTable role="table" aria-label={currentScope.description}>
            <div role="rowgroup">
              <RankingHeader role="row">
                <span role="columnheader">순위</span>
                <span role="columnheader" aria-colspan={2}>
                  사용자
                </span>
                <span role="columnheader">XP</span>
              </RankingHeader>
            </div>
            <div role="rowgroup">
              {users.map((user) => (
                <RankingRecord
                  key={user.id}
                  role="row"
                  data-me={user.isMe}
                  aria-label={`${user.rank}위 ${user.name}, ${user.xp.toLocaleString('ko-KR')} XP`}
                >
                  <div role="cell">
                    <RankPosition
                      data-top={user.rank <= 3}
                      data-highlight={user.rank <= 3 || user.isMe}
                    >
                      {user.rank}
                    </RankPosition>
                  </div>
                  <div role="cell">
                    <UserAvatar
                      aria-hidden="true"
                      $avatarColor={user.avatarColor}
                      $avatarBackground={user.avatarBackground}
                    >
                      {user.initial}
                    </UserAvatar>
                  </div>
                  <UserDetails role="cell">
                    <UserName>
                      {user.name}
                      {user.isMe && <CurrentUserBadge>나</CurrentUserBadge>}
                    </UserName>
                    <SolvedCount>해결 {user.solved}문제</SolvedCount>
                  </UserDetails>
                  <ExperienceCell role="cell" data-me={user.isMe}>
                    {user.xp.toLocaleString('ko-KR')} XP
                  </ExperienceCell>
                </RankingRecord>
              ))}
            </div>
          </RankingTable>
          {users.length === 0 && (
            <EmptyRankingNotice role="status">
              {scope === 'group'
                ? '표시할 그룹 순위가 없습니다.'
                : '표시할 친구 순위가 없습니다.'}
            </EmptyRankingNotice>
          )}
        </RankingPanel>
      </RankingContent>
    </>
  )
}
