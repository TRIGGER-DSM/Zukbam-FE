import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { service } from '../../api/service'
import { getErrorMessage } from '../../api/client'
import { useAuthSession } from '../../auth/useAuthSession'
import QueryStatus from '../../components/ui/QueryStatus'
import { AdminHeading, Badge, DeleteConfirmation, Modal } from '../../components/admin/AdminUI'
import { Button } from '../../components/ui/Button'
import { Card, Content, Field, GroupChoice, GroupColumns, Row, TableWrap } from '../../components/admin/admin.styles'
import { useAdmin } from '../../data/admin'
import { CreateGroupForm, CreateGroupButton, GroupListCard, GroupChoiceSummary, GroupDetailCard, GroupHeader, GroupIdentity, GroupName, GroupDescription, GroupToolbarButton, DeleteGroupButton, DialogActions } from './GroupManagement.styles'

export default function GroupManagement() {
  const session = useAuthSession()
  const client = useQueryClient()
  const { setMessage } = useAdmin()
  const [params, setParams] = useSearchParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [query, setQuery] = useState('')
  const [modal, setModal] = useState<'edit' | 'delete' | null>(null)
  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const groups = useQuery({ queryKey: ['groups', session?.accessToken], queryFn: ({ signal }) => service.groups(signal), enabled: Boolean(session) })
  const selected = groups.data?.groups.find(group => group.groupId === Number(params.get('group'))) ?? groups.data?.groups[0]
  const detail = useQuery({ queryKey: ['group', session?.accessToken, selected?.groupId], queryFn: ({ signal }) => service.group(selected!.groupId, signal), enabled: Boolean(session && selected) })
  const operation = useMutation({
    mutationFn: (action: { type: 'create' | 'edit' | 'delete'; id?: number; title?: string; introduce?: string }) => {
      if (action.type === 'create') return service.createGroup(action.title!, action.introduce!)
      if (action.type === 'edit') return service.updateGroup(action.id!, action.title!, action.introduce!)
      return service.deleteGroup(action.id!)
    },
    onSuccess: async (_, action) => {
      setMessage(action.type === 'delete' ? '그룹을 삭제했습니다.' : '그룹 정보를 저장했습니다.')
      setModal(null)
      if (action.type === 'create') { setName(''); setDescription('') }
      if (action.type === 'delete') setParams({})
      await Promise.all([client.invalidateQueries({ queryKey: ['groups'] }), client.invalidateQueries({ queryKey: ['group'] })])
    },
  })
  if (!session) return <Content><p role="status">로그인 후 이용해 주세요.</p></Content>
  const members = (detail.data?.members ?? []).filter(member => member.name.toLowerCase().includes(query.trim().toLowerCase()))
  return <>
    <AdminHeading category="그룹 관리" title="그룹 관리" description="내 그룹을 조회하고 그룹명과 설명을 관리합니다." />
    <Content>
      {operation.error && <p role="alert">{getErrorMessage(operation.error)}</p>}
      <GroupColumns><aside><Card><h2>새 그룹 만들기</h2>
        <CreateGroupForm onSubmit={event => { event.preventDefault(); if (!operation.isPending && name.trim()) operation.mutate({ type: 'create', title: name.trim(), introduce: description.trim() }) }}>
          <Field>그룹명<input aria-label="그룹명" required maxLength={255} value={name} onChange={event => setName(event.target.value)} /></Field>
          <Field>설명<input aria-label="그룹 설명" maxLength={255} value={description} onChange={event => setDescription(event.target.value)} /></Field>
          <CreateGroupButton type="submit" disabled={operation.isPending}>그룹 생성</CreateGroupButton>
        </CreateGroupForm></Card>
        <GroupListCard><h2>그룹 목록</h2><QueryStatus pending={groups.isPending} error={groups.error} retry={() => { void groups.refetch() }} />
          {groups.data?.groups.map(group => <GroupChoice key={group.groupId} aria-pressed={selected?.groupId === group.groupId} onClick={() => { setParams({ group: String(group.groupId) }); setQuery('') }}><GroupChoiceSummary><strong>{group.title}</strong><small>{group.myRole === 'OWNER' ? '그룹장' : '멤버'}</small></GroupChoiceSummary><span>›</span></GroupChoice>)}
          {groups.isSuccess && !groups.data.groups.length && <p>등록된 그룹이 없습니다.</p>}
        </GroupListCard></aside>
        <GroupDetailCard>{selected ? <>
          <GroupHeader><GroupIdentity><Row><GroupName>{selected.title}</GroupName><Badge>{selected.myRole === 'OWNER' ? '그룹장' : '멤버'}</Badge></Row><GroupDescription>{selected.introduce}</GroupDescription></GroupIdentity>
          <GroupToolbarButton variant="secondary" disabled={selected.myRole !== 'OWNER' || operation.isPending} onClick={() => { operation.reset(); setEditName(selected.title); setEditDescription(selected.introduce ?? ''); setModal('edit') }}>그룹 수정</GroupToolbarButton>
          <DeleteGroupButton variant="secondary" disabled={selected.myRole !== 'OWNER' || operation.isPending || !detail.data} onClick={() => { operation.reset(); setModal('delete') }}>그룹 삭제</DeleteGroupButton></GroupHeader>
          <input aria-label="그룹 내 멤버 검색" placeholder="멤버 이름 검색" value={query} onChange={event => setQuery(event.target.value)} />
          <QueryStatus pending={detail.isPending} error={detail.error} retry={() => { void detail.refetch() }} />
          <TableWrap><table><thead><tr><th>멤버</th><th>역할</th><th>가입일</th></tr></thead><tbody>{members.map(member => <tr key={member.userId}><td><Link to={`/admin/students/${member.userId}`}>{member.name}</Link></td><td>{member.role === 'OWNER' ? '그룹장' : '멤버'}</td><td>{member.joinedAt?.slice(0,10)}</td></tr>)}{detail.isSuccess && !members.length && <tr><td colSpan={3}>표시할 멤버가 없습니다.</td></tr>}</tbody></table></TableWrap>
          <p>멤버 초대는 아직 지원되지 않습니다.</p>
        </> : <p>그룹을 선택하거나 만들어 주세요.</p>}</GroupDetailCard>
      </GroupColumns>
    </Content>
    {selected && modal === 'edit' && <Modal title="그룹 수정" onClose={() => { if (!operation.isPending) setModal(null) }}><form onSubmit={event => { event.preventDefault(); if (!operation.isPending && editName.trim()) operation.mutate({ type: 'edit', id: selected.groupId, title: editName.trim(), introduce: editDescription.trim() }) }}>
      <Field>그룹명<input required maxLength={255} value={editName} onChange={event => setEditName(event.target.value)} /></Field><Field>설명<input maxLength={255} value={editDescription} onChange={event => setEditDescription(event.target.value)} /></Field>
      {operation.error && <p role="alert">{getErrorMessage(operation.error)}</p>}
      <DialogActions><Button variant="secondary" disabled={operation.isPending} onClick={() => setModal(null)}>취소</Button><Button type="submit" disabled={operation.isPending}>변경사항 저장</Button></DialogActions></form></Modal>}
    {selected && modal === 'delete' && <DeleteConfirmation kind="group" name={selected.title} count={detail.data?.members.length ?? 0} pending={operation.isPending} error={operation.error} onClose={() => setModal(null)} onConfirm={() => { if (!operation.isPending) operation.mutate({ type: 'delete', id: selected.groupId }) }} />}
  </>
}
