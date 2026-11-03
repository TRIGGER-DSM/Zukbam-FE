import { useState } from 'react'
import { adminStudents, useAdmin } from '../../data/admin'
import { AdminHeading, AdminStats } from '../../components/admin/AdminUI'
import {
  Card,
  Content,
  Filters,
  Row,
  TableWrap,
} from '../../components/admin/admin.styles'
import {
  StatisticsTitle,
  ChartLegend,
  LegendItem,
  LegendMarker,
  ChartUnitSelect,
  ChartCaption,
  ChartViewport,
  WeeklyChart,
  YAxisLabel,
  XAxisLabel,
  PeriodSelect,
  SummaryUnitSelect,
  ResetFiltersButton,
  StudentTableTitle,
  StudentTableSummary,
  StudentTable,
  StudentColumn,
  StudentColumnHeading,
  AccessibleColumnLabel,
  NumericCell,
  StudentAchievementLink,
  EmptyStudentRow,
} from './Dashboard.styles'

export default function Dashboard({
  statisticsOnly = false,
}: {
  statisticsOnly?: boolean
}) {
  const { groups } = useAdmin()
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('')
  const [period, setPeriod] = useState('28')
  const [unit, setUnit] = useState('week')
  const students = adminStudents
    .slice(0, 6)
    .filter(
      (s) =>
        `${s.name} ${s.id}`.includes(query.trim()) &&
        (!group ||
          groups.find((g) => String(g.id) === group)?.members.includes(s.id)) &&
        s.daysAgo < Number(period),
    )
    .sort((a, b) => b.submitted - a.submitted)
  const filtered = Boolean(query || group || period !== '28')
  const total = students.reduce((sum, s) => sum + s.submitted, 0)
  const correct = students.reduce((sum, s) => sum + s.correct, 0)
  const rate = total ? `${((correct / total) * 100).toFixed(1)}%` : '0%'
  return (
    <>
      <AdminHeading
        category="대시보드"
        title={statisticsOnly ? '문제 풀이 통계' : '학생 풀이 현황'}
        description="전체 학생의 풀이 현황과 기간별 통계를 한눈에 확인합니다."
      />
      <Content>
        <Filters>
          <input
            aria-label="학생 이름 또는 학번 검색"
            placeholder="학생 이름 또는 학번 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            aria-label="그룹 필터"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="">전체 그룹</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <PeriodSelect
            aria-label="조회 기간"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="28">최근 4주</option>
            <option value="7">최근 1주</option>
            <option value="1">오늘</option>
          </PeriodSelect>
          <SummaryUnitSelect
            aria-label="집계 단위"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="week">주차별</option>
            <option value="month">월별</option>
          </SummaryUnitSelect>
          <ResetFiltersButton
            variant="secondary"
            onClick={() => {
              setQuery('')
              setGroup('')
              setPeriod('28')
              setUnit('week')
            }}
          >
            초기화
          </ResetFiltersButton>
        </Filters>
        <AdminStats
          items={[
            {
              label: '총 제출 수',
              value: filtered ? String(total) : '1,248',
              note: filtered ? '검색된 샘플 학생 기준' : '지난 기간 대비 +12%',
              tone: 'green',
            },
            {
              label: '정답 수',
              value: filtered ? String(correct) : '842',
              note: `정답 비율 ${filtered ? rate : '67.5%'}`,
              tone: 'green',
            },
            {
              label: '오답 수',
              value: filtered ? String(total - correct) : '406',
              note: filtered ? '검색된 샘플 학생 기준' : '지난 기간 대비 -4%',
              tone: 'red',
            },
            {
              label: '평균 정답률',
              value: filtered ? rate : '67.5%',
              note: `학생 ${filtered ? students.length : 28}명 기준`,
            },
          ]}
        />
        <Card id="statistics">
          <Row>
            <StatisticsTitle>문제 풀이 통계</StatisticsTitle>
            <ChartLegend>
              {[
                ['#c2c4c8', '제출'],
                ['#39ff14', '정답'],
                ['#ff7d7d', '오답'],
              ].map(([color, label]) => (
                <LegendItem key={label}>
                  <LegendMarker $color={color} />
                  {label}
                </LegendItem>
              ))}
            </ChartLegend>
            <ChartUnitSelect
              aria-label="차트 집계 단위"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="week">주차별</option>
              <option value="month">월별</option>
            </ChartUnitSelect>
          </Row>
          <ChartCaption>
            {unit === 'week'
              ? '주차별 제출 수, 정답 수, 오답 수 (최근 8주)'
              : '월별 제출 수, 정답 수, 오답 수 (최근 2개월)'}
          </ChartCaption>
          <ChartViewport
            role="region"
            aria-label="문제 풀이 통계 차트"
            tabIndex={0}
          >
            {unit === 'week' ? (
              <WeeklyChart
                role="img"
                aria-label="최근 8주 제출, 정답, 오답 추이. 제출 수 106건에서 216건으로 증가"
              >
                <img
                  src="/images/admin/statistics.svg"
                  width={1070}
                  height={254}
                  alt=""
                />
                {[0, 50, 100, 150, 200, 250].map((n, i) => (
                  <YAxisLabel key={n} $index={i}>
                    {n}
                  </YAxisLabel>
                ))}
                {Array.from({ length: 8 }, (_, i) => (
                  <XAxisLabel key={i} $index={i}>
                    {i + 1}주차
                  </XAxisLabel>
                ))}
              </WeeklyChart>
            ) : (
              <svg
                viewBox="0 0 1070 254"
                width="1070"
                height="254"
                role="img"
                aria-label="최근 2개월 제출 504건, 744건. 정답 341건, 501건. 오답 163건, 243건."
              >
                {[0, 200, 400, 600, 800].map((n, i) => (
                  <g key={n}>
                    <line
                      x1="44"
                      x2="1066"
                      y1={222 - i * 50}
                      y2={222 - i * 50}
                      stroke="#37383c"
                      strokeDasharray="3 4"
                    />
                    <text
                      x="30"
                      y={226 - i * 50}
                      fill="#878a93"
                      textAnchor="end"
                      fontSize="11"
                    >
                      {n}
                    </text>
                  </g>
                ))}
                {[
                  [504, 744, '#c2c4c8'],
                  [341, 501, '#39ff14'],
                  [163, 243, '#ff7d7d'],
                ].map(([a, b, color]) => (
                  <polyline
                    key={color}
                    points={`220,${222 - Number(a) / 4} 860,${222 - Number(b) / 4}`}
                    stroke={String(color)}
                    fill="none"
                    strokeWidth="3"
                  />
                ))}
                <text
                  x="220"
                  y="247"
                  textAnchor="middle"
                  fill="#878a93"
                  fontSize="12"
                >
                  7월
                </text>
                <text
                  x="860"
                  y="247"
                  textAnchor="middle"
                  fill="#878a93"
                  fontSize="12"
                >
                  8월
                </text>
              </svg>
            )}
          </ChartViewport>
        </Card>
        {!statisticsOnly && (
          <Card>
            <Row>
              <StudentTableTitle>학생별 풀이 현황</StudentTableTitle>
              <StudentTableSummary>
                {filtered ? students.length : 28}명 · 풀이 수 많은 순
              </StudentTableSummary>
            </Row>
            <TableWrap>
              <StudentTable>
                <colgroup>
                  <col />
                  {[122, 132, 92, 82, 82, 92, 132, 80].map((width, i) => (
                    <StudentColumn key={i} $width={width} />
                  ))}
                </colgroup>
                <thead>
                  <tr>
                    {[
                      '학생',
                      '학번',
                      '그룹',
                      '풀이 수',
                      '정답',
                      '오답',
                      '정답률',
                      '최근 제출',
                      '',
                    ].map((label, i) => (
                      <StudentColumnHeading key={i} scope="col" $index={i}>
                        {label || (
                          <AccessibleColumnLabel>상세</AccessibleColumnLabel>
                        )}
                      </StudentColumnHeading>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td>{s.name}</td>
                      <td>{s.id}</td>
                      <td>{s.group}</td>
                      <NumericCell>{s.submitted}</NumericCell>
                      <NumericCell>{s.correct}</NumericCell>
                      <NumericCell>{s.submitted - s.correct}</NumericCell>
                      <NumericCell>{s.rate}</NumericCell>
                      <td>{s.recent}</td>
                      <td>
                        <StudentAchievementLink
                          to={`/admin/students/${s.id}`}
                          aria-label={`${s.name} 성취도 상세`}
                        >
                          상세 →
                        </StudentAchievementLink>
                      </td>
                    </tr>
                  ))}
                  {!students.length && (
                    <tr>
                      <EmptyStudentRow colSpan={9}>
                        검색 결과가 없습니다.
                      </EmptyStudentRow>
                    </tr>
                  )}
                </tbody>
              </StudentTable>
            </TableWrap>
          </Card>
        )}
      </Content>
    </>
  )
}
