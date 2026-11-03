import { theme } from '../../styles/theme'
import styled from '@emotion/styled'

import { useId, useState } from 'react'
import { useParams } from 'react-router'
import { Button, ButtonLink } from '../../components/ui/Button'
import { AdminHeading } from '../../components/admin/AdminUI'
import {
  Card,
  Content,
  Field,
  Notice,
  Row,
  TwoColumns,
} from '../../components/admin/admin.styles'
import { useQuery } from '@tanstack/react-query'
import { service } from '../../api/service'
import QueryStatus from '../../components/ui/QueryStatus'
import type { AdminProblem } from '../../data/admin'

const emptyProblem: AdminProblem = {
  id: 0,
  title: '',
  level: '',
  category: '',
  date: '',
  submissions: 0,
  rate: '-',
  description: '',
  input: '',
  output: '',
  time: '',
  memory: '256',
}

const ProblemTextArea = styled.textarea<{ $mono: boolean | undefined }>(
  ({ $mono }) =>
    $mono && {
      '&&': { fontFamily: 'monospace', minHeight: 180 },
    },
)

const LimitInputRow = styled(Row)({ flexWrap: 'nowrap' })

const FieldHelp = styled.small<{ $error: string }>(({ $error }) =>
  $error
    ? {
        color: '#ff7d7d',
      }
    : {
        color: theme.colors.muted,
      },
)

const ValidationNotice = styled(Notice)({
  color: '#ff7d7d',
  borderColor: '#ff7d7d',
})

const ActionSpacer = styled.span({
  flex: 1,
  minWidth: 0,
})

const CancelProblemEdit = styled(ButtonLink)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

const SaveProblemButton = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export default function ProblemEditor() {
  const { problemId } = useParams()
  const result = useQuery({ queryKey: ['problem', Number(problemId)], queryFn: ({ signal }) => service.problem(Number(problemId), signal), enabled: Boolean(problemId) })
  if (problemId && !result.data) return <Content><QueryStatus pending={result.isPending} error={result.error} /></Content>
  const problem = result.data
  const existing = problem ? { ...emptyProblem, id: problem.problemId, title: problem.title, level: problem.rank, description: problem.content, time: String(problem.timeLimit), memory: String(problem.memoryLimit), input: problem.testCases.find(item => item.isSample)?.input ?? '', output: problem.testCases.find(item => item.isSample)?.output ?? '' } : undefined
  return <ProblemEditorForm key={problemId ?? 'new'} existing={existing} />
}

function ProblemEditorForm({ existing }: { existing?: AdminProblem }) {
  const problemId = existing ? String(existing.id) : undefined
  const [value, setValue] = useState(existing ?? emptyProblem)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const prefix = useId()
  const [draftRoute, setDraftRoute] = useState(problemId ?? 'new')
  if (draftRoute !== (problemId ?? 'new')) {
    setDraftRoute(problemId ?? 'new')
    setValue(existing ?? emptyProblem)
    setErrors({})
  }
  const update = (key: keyof AdminProblem, text: string) =>
    setValue((v) => ({ ...v, [key]: text }))
  function save(event: React.FormEvent) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!value.title.trim()) next.title = '문제 이름은 필수 입력 항목입니다.'
    if (!value.description.trim())
      next.description = '문제 설명은 필수 입력 항목입니다.'
    if (!value.input.trim()) next.input = '예시 입력은 필수 입력 항목입니다.'
    if (!value.output.trim()) next.output = '예시 출력은 필수 입력 항목입니다.'
    if (!value.time || Number(value.time) < 1 || Number(value.time) > 10)
      next.time = '시간 제한은 1~10초 사이로 입력합니다.'
    if (
      !value.memory ||
      Number(value.memory) < 32 ||
      Number(value.memory) > 1024
    )
      next.memory = '메모리 제한은 32~1024MB 사이로 입력합니다.'
    setErrors(next)
    if (Object.keys(next).length) {
      document.getElementById(`${prefix}-${Object.keys(next)[0]}`)?.focus()
      return
    }
    setErrors({ integration: '난이도 및 테스트케이스 관리 UI가 준비되지 않아 저장할 수 없습니다.' })
  }
  function textField(
    key: 'title' | 'description' | 'input' | 'output' | 'time' | 'memory',
    label: string,
    options: {
      area?: boolean
      placeholder?: string
      help?: string
      unit?: string
      mono?: boolean
    } = {},
  ) {
    const props = {
      id: `${prefix}-${key}`,
      value: value[key],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => update(key, e.target.value),
      placeholder: options.placeholder,
      'aria-label': label,
      'aria-invalid': Boolean(errors[key]),
      'aria-describedby': `${prefix}-${key}-help`,
      required: true,
    }
    return (
      <Field>
        <span>{label}</span>
        {options.area ? (
          <ProblemTextArea {...props} $mono={options.mono} />
        ) : (
          <LimitInputRow>
            <input
              {...props}
              type={options.unit ? 'number' : 'text'}
              min={key === 'time' ? 1 : key === 'memory' ? 32 : undefined}
              max={key === 'time' ? 10 : key === 'memory' ? 1024 : undefined}
            />
            {options.unit && <span>{options.unit}</span>}
          </LimitInputRow>
        )}
        <FieldHelp id={`${prefix}-${key}-help`} $error={errors[key]}>
          {errors[key] || options.help}
        </FieldHelp>
      </Field>
    )
  }
  return (
    <>
      <AdminHeading
        category="문제 관리"
        title={
          existing ? `${existing.id}. ${existing.title} 수정` : '새 문제 등록'
        }
        description={
          existing
            ? '등록된 문제의 제목, 설명, 난이도, 카테고리, 예시, 제한 조건을 수정합니다.'
            : '문제 이름, 설명, 난이도, 카테고리, 예시 입력·출력, 시간·메모리 제한을 입력합니다.'
        }
      />
      <form noValidate onSubmit={save}>
        <Content>
          <Notice>난이도 선택과 전체 테스트케이스 관리 UI가 서버 명세에 맞게 준비되지 않아 문제 등록·수정은 연동하지 않았습니다.</Notice>
          {Object.keys(errors).length > 0 && (
            <ValidationNotice role="alert">
              ! 필수 항목 {Object.keys(errors).length}개를 확인해 주세요. 표시된
              항목을 입력한 뒤 다시 등록해 주세요.
            </ValidationNotice>
          )}
          <fieldset disabled style={{ border: 0, padding: 0, margin: 0 }}>
          <Card>
            <h2>기본 정보</h2>
            {textField('title', '문제 이름', {
              placeholder: '문제 이름을 입력하세요',
            })}
            <TwoColumns>
              <Field>
                <span>난이도</span>
                <select
                  value={value.level}
                  onChange={(e) => update('level', e.target.value)}
                >
                  {[
                    ...(existing ? [existing.level] : ['']),
                    'Bronze 5',
                    'Bronze 4',
                    'Bronze 3',
                    'Bronze 2',
                    'Bronze 1',
                    'Silver 5',
                    'Silver 4',
                    'Silver 3',
                    'Silver 2',
                    'Silver 1',
                    'Gold 5',
                    'Gold 4',
                    'Gold 3',
                    'Gold 2',
                    'Gold 1',
                    'Platinum 5',
                  ].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </Field>
              <Field>
                <span>카테고리</span>
                <select
                  value={value.category}
                  onChange={(e) => update('category', e.target.value)}
                >
                  {[
                    '그래프',
                    '동적 계획법',
                    '문자열',
                    '구현',
                    '수학',
                    '자료 구조',
                    '탐색',
                    '정렬',
                    '그리디',
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </TwoColumns>
          </Card>
          <Card>
            <h2>문제 내용</h2>
            {textField('description', '문제 설명', {
              area: true,
              help: '마크다운을 지원합니다.',
              placeholder: '문제 설명을 입력하세요',
            })}
            <TwoColumns>
              {textField('input', '예시 입력', { area: true, mono: true })}
              {textField('output', '예시 출력', { area: true, mono: true })}
            </TwoColumns>
          </Card>
          <Card>
            <h2>제한 조건</h2>
            <TwoColumns>
              {textField('time', '시간 제한', {
                unit: '초',
                help: '1~10초 사이로 입력합니다.',
              })}
              {textField('memory', '메모리 제한', {
                unit: 'MB',
                help: '32~1024MB 사이로 입력합니다.',
              })}
            </TwoColumns>
          </Card>
          </fieldset>
          <Row>
            <ActionSpacer />
            <CancelProblemEdit variant="secondary" to="/admin/problems">
              취소
            </CancelProblemEdit>
            <SaveProblemButton type="submit" disabled>
              {existing ? '변경사항 저장' : '문제 등록'}
            </SaveProblemButton>
          </Row>
        </Content>
      </form>

    </>
  )
}
