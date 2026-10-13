import { getStyles } from '../../styles/classes'
import PageHeading from '../../components/layout/PageHeading'
import Pagination from '../../components/ui/Pagination'
import { Button, ButtonLink } from '../../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router'

import { problems } from '../../data/problems'
import RecentProblems from '../../components/problems/RecentProblems'

function Icon({ name }: { name: string }) {
  return <img src={`/images/problems/${name}.svg`} className="problems-icon" css={getStyles("problems-icon")} alt="" aria-hidden="true" />
}


export default function Problems() {
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [nearLevel, setNearLevel] = useState(false)
  const [minRate, setMinRate] = useState(false)
  const [sort, setSort] = useState('recommended')
  const hasFilters = Boolean(query.trim() || difficulty || category || status || nearLevel || minRate)
  // Figma sample problems have no authenticated user's submission history.
  const filtered = problems.filter(problem => (
    `${problem.id} ${problem.title}`.toLowerCase().includes(query.trim().toLowerCase())
    && (!difficulty || problem.level.startsWith(difficulty))
    && (!category || problem.category === category)
    && status !== 'solved'
    && (!nearLevel || Math.abs(problem.rank - 10) <= 2)
    && (!minRate || problem.rate >= 20)
  )).sort((a, b) => sort === 'number' ? a.id - b.id : sort === 'rate' ? b.rate - a.rate : 0)

  function resetFilters() {
    setQuery('')
    setDifficulty('')
    setCategory('')
    setStatus('')
    setNearLevel(false)
    setMinRate(false)
    setSort('recommended')
  }

  return (
    <>
      <PageHeading prefix="problems" id="problems-title" eyebrow={<><Icon name="problems" />문제</>} title={<>오늘 풀 문제를 고르세요.</>} description={<>새로 올라온 문제와 친구들의 풀이 흐름을 먼저 확인할 수 있습니다.</>} actions={<><ButtonLink variant="primary" to="/problems/recommendations">맞춤 추천</ButtonLink></>} />

      <RecentProblems />

      <section className="wide-container problems-list-section" css={getStyles("wide-container problems-list-section")} id="problem-list" aria-labelledby="problem-list-title">
        <div className="problem-list-heading" css={getStyles("problem-list-heading")}><h2 id="problem-list-title"><span className="problems-icon-circle" css={getStyles("problems-icon-circle")}><Icon name="list" /></span>문제 목록</h2><p aria-live="polite">{hasFilters ? `검색 결과 ${filtered.length}문제` : '총 1,284문제'}</p></div>
        <form className="problem-filters" css={getStyles("problem-filters")} aria-label="문제 검색 및 필터" onSubmit={event => event.preventDefault()}>
          <div className="problem-filter-top" css={getStyles("problem-filter-top")}>
            <div className="problem-search" css={getStyles("problem-search")}><Icon name="search" /><input type="search" aria-label="문제 검색" placeholder="번호 또는 문제 이름 검색" value={query} onChange={event => setQuery(event.target.value)} /></div>
            <select aria-label="난이도" value={difficulty} onChange={event => setDifficulty(event.target.value)}><option value="">난이도 전체</option><option value="Silver">Silver</option><option value="Gold">Gold</option></select>
            <select aria-label="카테고리" value={category} onChange={event => setCategory(event.target.value)}><option value="">분야 전체</option><option>동적 계획법</option><option>그래프</option><option>문자열</option></select>
            <select aria-label="풀이 상태" value={status} onChange={event => setStatus(event.target.value)}><option value="">상태 전체</option><option value="unsolved">안 푼 문제</option><option value="solved">푼 문제</option></select>
            <Button variant="secondary" className="filter-reset" css={getStyles("filter-reset")} type="button" aria-label="필터 초기화" onClick={resetFilters}><Icon name="reset" /></Button>
          </div>
          <div className="problem-filter-bottom" css={getStyles("problem-filter-bottom")}>
            <div className="problem-quick-filters" css={getStyles("problem-quick-filters")}>
              <label className="unsolved-filter" css={getStyles("unsolved-filter")}><input type="checkbox" checked={status === 'unsolved'} onChange={event => setStatus(event.target.checked ? 'unsolved' : '')} />안 푼 문제만</label>
              <span className="quick-filter-label" css={getStyles("quick-filter-label")}>빠른 필터</span>
              <button type="button" className="quick-filter" css={getStyles("quick-filter")} aria-pressed={nearLevel} onClick={() => setNearLevel(!nearLevel)}>내 수준 ±2</button>
              <button type="button" className="quick-filter" css={getStyles("quick-filter")} aria-pressed={minRate} onClick={() => setMinRate(!minRate)}>정답률 20% 이상</button>
            </div>
            <select aria-label="문제 정렬" value={sort} onChange={event => setSort(event.target.value)}><option value="recommended">추천순</option><option value="number">번호순</option><option value="rate">정답률순</option></select>
          </div>
        </form>
        <ul className="problem-results" css={getStyles("problem-results")} aria-label="문제 목록">
          {filtered.map(problem => <li key={problem.id}><Link className="problem-result" css={getStyles("problem-result")} to={`/problems/${problem.id}`}><div><p>{problem.id}. {problem.title}</p><div className="problem-result-meta" css={getStyles("problem-result-meta")}><span className="problem-tier" css={getStyles("problem-tier")}>{problem.level}</span><span className="problem-category" css={getStyles("problem-category")}>{problem.category}</span><span>정답률 {problem.rate}%</span><span>평균 {problem.attempts}회</span></div></div><Icon name="chevron" /></Link></li>)}
        </ul>
        {filtered.length === 0 && <p className="problem-empty" css={getStyles("problem-empty")} role="status">조건에 맞는 문제가 없습니다. 검색어나 필터를 변경해 주세요.</p>}
        <Pagination className="problem-pagination" css={getStyles("problem-pagination")} />
      </section>
    </>
  )
}
