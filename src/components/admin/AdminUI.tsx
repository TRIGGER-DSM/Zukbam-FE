import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../ui/Button'
import { Card, Intro, Wide, Stats, Notice, Row, dialogStyles } from './admin.styles'

export function AdminHeading({ category, title, description, actions }: { category: string; title: string; description: string; actions?: ReactNode }) {
  return <Intro><Wide><Row><div className="grow"><div className="eyebrow"><img src="/images/admin/dashboard.svg" alt="" />{category}</div><h1>{title}</h1><p>{description}</p></div>{actions}</Row></Wide></Intro>
}
export function AdminStats({ items }: { items: { label: string; value: string; note?: string; tone?: string }[] }) {
  return <Stats>{items.map(item => <Card key={item.label}><h2>{item.label}</h2><strong>{item.value}</strong>{item.note && <p className={item.tone}>{item.note}</p>}</Card>)}</Stats>
}
export function Badge({ children }: { children: ReactNode }) {
  return <span css={{ display: 'inline-block', padding: '3px 10px', background: '#062900', color: '#39ff14', borderRadius: 99, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{children}</span>
}
export function Modal({ title, children, onClose, wide = false }: { title: string; children: ReactNode; onClose: () => void; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null)
  const id = useId()
  useEffect(() => {
    const dialog = ref.current!
    dialog.showModal()
    return () => dialog.close()
  }, [])
  return <dialog ref={ref} css={[dialogStyles, wide && { width: 'min(560px,calc(100% - 32px))' }]} aria-labelledby={id} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose() } }}><div><Row><h2 id={id} className="grow">{title}</h2><button className="close" aria-label="닫기" onClick={onClose}>✕</button></Row>{children}</div></dialog>
}
export function DeleteConfirmation({ kind, name, count, onClose, onConfirm }: { kind: 'problem' | 'group'; name: string; count: number; onClose: () => void; onConfirm: () => void }) {
  const problem = kind === 'problem'
  return <Modal title={problem ? '문제를 삭제할까요?' : `‘${name}’ 그룹을 삭제할까요?`} onClose={onClose}><div className="warning" aria-hidden="true">!</div><p>{problem ? `‘${name}’에는 이미 ${count}건의 풀이 기록이 있습니다.` : `그룹에 속한 학생 ${count}명은 이 그룹에서만 제거됩니다.`}</p><Notice><strong>{problem ? '풀이 기록 보존 정책' : '학생 계정은 삭제되지 않아요'}</strong><p>{problem ? '삭제해도 학생들의 기존 제출·채점 기록과 잔디·스트릭은 그대로 보존되며, 문제 목록과 검색에서만 사라집니다.' : '학생 계정, 풀이 기록, 스트릭과 다른 그룹 소속은 그대로 유지됩니다. 그룹 랭킹에서만 사라집니다.'}</p></Notice><div className="dialog-actions"><Button variant="secondary" onClick={onClose}>취소</Button><Button className="danger" onClick={onConfirm}>{problem ? '삭제하기' : '그룹 삭제'}</Button></div></Modal>
}
