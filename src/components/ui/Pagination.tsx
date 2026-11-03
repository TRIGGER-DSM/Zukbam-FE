export default function Pagination({ className, page = 0, totalPages = 1, onPageChange }: {
  className?: string; page?: number; totalPages?: number; onPageChange?: (page: number) => void
}) {
  return <nav className={className} aria-label="페이지 이동">
    <button type="button" aria-label="이전 페이지" disabled={!onPageChange || page === 0} onClick={() => onPageChange?.(page - 1)}>‹</button>
    <button type="button" aria-current="page">{page + 1}</button>
    <button type="button" aria-label="다음 페이지" disabled={!onPageChange || page + 1 >= totalPages} onClick={() => onPageChange?.(page + 1)}>›</button>
  </nav>
}
