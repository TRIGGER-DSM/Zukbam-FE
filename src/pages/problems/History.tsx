import { getStyles } from '../../styles/classes'
import PageHeading from '../../components/layout/PageHeading'
import Pagination from '../../components/ui/Pagination'
import { Button } from '../../components/ui/Button'
import { useState } from 'react'
import { Link } from 'react-router'
import { records } from '../../data/historyData'

export default function History() {
  const [query, setQuery] = useState('')
  const [target, setTarget] = useState('mine')
  const [result, setResult] = useState('')
  const [period, setPeriod] = useState('30')
  // Sample periods are relative to the latest Figma record, not today's date.
  const visibleRecords = records.filter(record =>
    target === 'mine'
    && `${record.problemId} ${record.title}`.toLowerCase().includes(query.trim().toLowerCase())
    && (!result || record.result === result)
    && (period === 'all' || record.daysAgo < Number(period)),
  )

  function resetFilters() {
    setQuery('')
    setTarget('mine')
    setResult('')
    setPeriod('30')
  }

  return (
    <>
      <PageHeading prefix="history" id="history-title" eyebrow={<><img src="/images/history/history.svg" alt="" />학습 기록</>} title={<>내 제출 기록</>} description={<>제출한 풀이를 최신순으로 확인하고 상세 코드를 다시 볼 수 있습니다.</>} wrapCopy={false} />
      <section className="wide-container history-content" css={getStyles("wide-container history-content")} aria-label="제출 기록 검색 및 목록">
        <form className="history-filters" css={getStyles("history-filters")} aria-label="기록 검색 및 필터" onSubmit={event => event.preventDefault()}>
          <input type="search" aria-label="기록 검색" placeholder="문제 이름 검색" value={query} onChange={event => setQuery(event.target.value)} />
          <select aria-label="대상" value={target} onChange={event => setTarget(event.target.value)}><option value="mine">내 기록</option><option value="friends">친구 기록</option></select>
          <select aria-label="결과" value={result} onChange={event => setResult(event.target.value)}><option value="">결과 전체</option><option>정답</option><option>오답</option></select>
          <select aria-label="기간" value={period} onChange={event => setPeriod(event.target.value)}><option value="30">최근 30일</option><option value="7">최근 7일</option><option value="1">오늘</option><option value="all">전체 기간</option></select>
          <Button variant="secondary" type="button" onClick={resetFilters}>초기화</Button>
        </form>
        <ul className="history-records" css={getStyles("history-records")} aria-label="학습 기록">
          {visibleRecords.map(record => <li key={record.id}>
            <Link className="history-record" css={getStyles("history-record")} to={`/problems/history/${record.id}`} aria-label={`${record.problemId}. ${record.title}, ${record.date}, ${record.language}, ${record.result}, 풀이 상세 보기`}>
              <div><p className="history-record-title" css={getStyles("history-record-title")}>{record.problemId}. {record.title}</p><div className="history-record-meta" css={getStyles("history-record-meta")}><span>{record.date}</span><span>{record.language}</span><span className={`history-result ${record.result === '정답' ? 'history-result-correct' : 'history-result-wrong'}`} css={getStyles(`history-result ${record.result === '정답' ? 'history-result-correct' : 'history-result-wrong'}`)}>{record.result}</span></div></div>
              <img className="history-chevron" css={getStyles("history-chevron")} src="/images/history/chevron.svg" alt="" />
            </Link>
          </li>)}
        </ul>
        {visibleRecords.length === 0 && <p className="history-empty" css={getStyles("history-empty")} role="status">조건에 맞는 제출 기록이 없습니다. 검색어나 필터를 변경해 주세요.</p>}
        <Pagination className="history-pagination" css={getStyles("history-pagination")} />
      </section>
    </>
  )
}
