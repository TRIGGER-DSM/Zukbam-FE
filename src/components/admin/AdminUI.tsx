import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { getErrorMessage } from '../../api/client'
import { Card, Intro, Wide, Stats, Notice, Row } from './admin.styles'
import {
  HeadingCopy,
  SectionEyebrow,
  StatisticsTrend,
  BadgeSurface,
  ModalSurface,
  ModalTitle,
  CloseModalButton,
  DeletionWarningIcon,
  DialogActions,
  CancelDeletion,
  ConfirmDeletionButton,
} from './AdminUI.styles'

export function AdminHeading({
  category,
  title,
  description,
  actions,
}: {
  category: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <Intro>
      <Wide>
        <Row>
          <HeadingCopy>
            <SectionEyebrow>
              <img src="/images/admin/dashboard.svg" alt="" />
              {category}
            </SectionEyebrow>
            <h1>{title}</h1>
            <p>{description}</p>
          </HeadingCopy>
          {actions}
        </Row>
      </Wide>
    </Intro>
  )
}

export function AdminStats({
  items,
}: {
  items: { label: string; value: string; note?: string; tone?: string }[]
}) {
  return (
    <Stats>
      {items.map((item) => (
        <Card key={item.label}>
          <h2>{item.label}</h2>
          <strong>{item.value}</strong>
          {item.note && (
            <StatisticsTrend $tone={item.tone}>{item.note}</StatisticsTrend>
          )}
        </Card>
      ))}
    </Stats>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <BadgeSurface>{children}</BadgeSurface>
}

export function Modal({
  title,
  children,
  onClose,
  wide = false,
}: {
  title: string
  children: ReactNode
  onClose: () => void
  wide?: boolean
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const id = useId()
  useEffect(() => {
    const dialog = ref.current!
    dialog.showModal()
    return () => dialog.close()
  }, [])
  return (
    <ModalSurface
      ref={ref}
      aria-labelledby={id}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose()
        }
      }}
      $wide={wide}
    >
      <div>
        <Row>
          <ModalTitle id={id}>{title}</ModalTitle>
          <CloseModalButton aria-label="닫기" onClick={onClose}>
            ✕
          </CloseModalButton>
        </Row>
        {children}
      </div>
    </ModalSurface>
  )
}

export function DeleteConfirmation({
  kind,
  name,
  count,
  onClose,
  onConfirm,
  pending = false,
  error,
}: {
  kind: 'problem' | 'group'
  name: string
  count: number | null
  onClose: () => void
  onConfirm: () => void
  pending?: boolean
  error?: unknown
}) {
  const problem = kind === 'problem'
  return (
    <Modal
      title={problem ? '문제를 삭제할까요?' : `‘${name}’ 그룹을 삭제할까요?`}
      onClose={() => { if (!pending) onClose() }}
    >
      <DeletionWarningIcon aria-hidden="true">!</DeletionWarningIcon>
      <p>
        {problem
          ? `‘${name}’ 문제를 삭제합니다.`
          : `그룹에 속한 학생 ${count}명은 이 그룹에서만 제거됩니다.`}
      </p>
      <Notice>
        <strong>
          {problem ? '삭제 전 확인' : '학생 계정은 삭제되지 않아요'}
        </strong>
        <p>
          {problem
            ? '삭제한 문제는 목록에서 더 이상 조회할 수 없습니다.'
            : '학생 계정, 풀이 기록, 스트릭과 다른 그룹 소속은 그대로 유지됩니다. 그룹 랭킹에서만 사라집니다.'}
        </p>
      </Notice>
      <DialogActions>
        <CancelDeletion variant="secondary" onClick={onClose} disabled={pending}>
          취소
        </CancelDeletion>
        <ConfirmDeletionButton onClick={onConfirm} disabled={pending}>
          {problem ? '삭제하기' : '그룹 삭제'}
        </ConfirmDeletionButton>
      </DialogActions>
      {error ? <p role="alert">{getErrorMessage(error)}</p> : null}
    </Modal>
  )
}
