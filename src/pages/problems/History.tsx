import { Button } from '../../components/ui/Button'
import { useState } from 'react'
import { records } from '../../data/historyData'
import {
  HistoryContent,
  HistoryFilters,
  HistoryRecords,
  HistoryRecord,
  HistoryRecordTitle,
  HistoryRecordMeta,
  SubmissionResult,
  HistoryChevron,
  HistoryEmpty,
  HistoryPagination,
  HistoryHeading,
  HistoryEyebrow,
  HistoryHeadingDescription,
} from './History.styles'

export default function History() {
  const [query, setQuery] = useState('')
  const [target, setTarget] = useState('mine')
  const [result, setResult] = useState('')
  const [period, setPeriod] = useState('30')
  // Sample periods are relative to the latest Figma record, not today's date.
  const visibleRecords = records.filter(
    (record) =>
      target === 'mine' &&
      `${record.problemId} ${record.title}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()) &&
      (!result || record.result === result) &&
      (period === 'all' || record.daysAgo < Number(period)),
  )

  function resetFilters() {
    setQuery('')
    setTarget('mine')
    setResult('')
    setPeriod('30')
  }

  return (
    <>
      <HistoryHeading aria-labelledby="history-title">
        <HistoryEyebrow>
          {
            <>
              <img src="/images/history/history.svg" alt="" />
              학습 기록
            </>
          }
        </HistoryEyebrow>
        <h1 id="history-title">{<>내 제출 기록</>}</h1>
        <HistoryHeadingDescription>
          {
            <>
              제출한 풀이를 최신순으로 확인하고 상세 코드를 다시 볼 수 있습니다.
            </>
          }
        </HistoryHeadingDescription>
      </HistoryHeading>
      <HistoryContent aria-label="제출 기록 검색 및 목록">
        <HistoryFilters
          aria-label="기록 검색 및 필터"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            aria-label="기록 검색"
            placeholder="문제 이름 검색"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            aria-label="대상"
            value={target}
            onChange={(event) => setTarget(event.target.value)}
          >
            <option value="mine">내 기록</option>
            <option value="friends">친구 기록</option>
          </select>
          <select
            aria-label="결과"
            value={result}
            onChange={(event) => setResult(event.target.value)}
          >
            <option value="">결과 전체</option>
            <option>정답</option>
            <option>오답</option>
          </select>
          <select
            aria-label="기간"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            <option value="30">최근 30일</option>
            <option value="7">최근 7일</option>
            <option value="1">오늘</option>
            <option value="all">전체 기간</option>
          </select>
          <Button variant="secondary" type="button" onClick={resetFilters}>
            초기화
          </Button>
        </HistoryFilters>
        <HistoryRecords aria-label="학습 기록">
          {visibleRecords.map((record) => (
            <li key={record.id}>
              <HistoryRecord
                to={`/problems/history/${record.id}`}
                aria-label={`${record.problemId}. ${record.title}, ${record.date}, ${record.language}, ${record.result}, 풀이 상세 보기`}
              >
                <div>
                  <HistoryRecordTitle>
                    {record.problemId}. {record.title}
                  </HistoryRecordTitle>
                  <HistoryRecordMeta>
                    <span>{record.date}</span>
                    <span>{record.language}</span>
                    <SubmissionResult $result={record.result}>
                      {record.result}
                    </SubmissionResult>
                  </HistoryRecordMeta>
                </div>
                <HistoryChevron src="/images/history/chevron.svg" alt="" />
              </HistoryRecord>
            </li>
          ))}
        </HistoryRecords>
        {visibleRecords.length === 0 && (
          <HistoryEmpty role="status">
            조건에 맞는 제출 기록이 없습니다. 검색어나 필터를 변경해 주세요.
          </HistoryEmpty>
        )}
        <HistoryPagination />
      </HistoryContent>
    </>
  )
}
