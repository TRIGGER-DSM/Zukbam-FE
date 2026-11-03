import { getErrorMessage } from '../../api/client'

export default function QueryStatus({ pending, error, retry }: { pending?: boolean; error?: unknown; retry?: () => void }) {
  if (error) return <p role="alert">{getErrorMessage(error)} {retry && <button type="button" onClick={retry}>다시 시도</button>}</p>
  if (pending) return <p role="status">불러오는 중…</p>
  return null
}
