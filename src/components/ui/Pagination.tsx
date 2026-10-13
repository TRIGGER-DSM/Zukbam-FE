import { getStyles } from '../../styles/classes'
export default function Pagination({ className }: { className: string }) {
  return <nav className={className} css={getStyles(className)} aria-label="페이지 이동">
    <button type="button" aria-label="이전 페이지" disabled>‹</button>
    <button type="button" aria-current="page">1</button>
    <button type="button" aria-label="2페이지, 데이터 준비 중" disabled>2</button>
    <button type="button" aria-label="3페이지, 데이터 준비 중" disabled>3</button>
    <button type="button" aria-label="다음 페이지" disabled>›</button>
  </nav>
}
