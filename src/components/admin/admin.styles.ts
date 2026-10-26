import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

const c = theme.colors
export const AdminRoot = styled.div`
  min-height: 100svh; font-family: 'Noto Sans KR', Pretendard, sans-serif;
  h2, h3 { margin: 0; } h2 { font-size: 18px; line-height: 1.45; }
  input, select, textarea, button { font: inherit; }
  input, select, textarea { background: ${c.input}; border: 1px solid ${c.border}; border-radius: 8px; padding: 12px 14px; color: ${c.text}; font-size: 15px; width: 100%; min-width: 0; }
  input, select, textarea { font-weight:400; }
  && .button { padding:11px 18px; border-radius:8px; box-shadow:none; font-size:14px; line-height:20px; }
  && .button.red { color:#ff7d7d; }
  && .button.danger { background:#ff7d7d; color:#000; }
  && .button.small { padding:6px 12px; font-size:12px; }
  && .button.group-action { padding:10px 14px; font-size:12px; }
  input::placeholder, textarea::placeholder { color: ${c.muted}; }
  select { cursor: pointer; }
  textarea { resize: vertical; min-height: 150px; line-height: 1.6; }
  [aria-invalid='true'] { border-color: #ff7d7d; }
  button:disabled { cursor: default; opacity: .45; }
  .green { color: ${c.primary}; } .muted { color: ${c.muted}; } .red { color: #ff7d7d; }
  small { font-size: 12px; line-height: 1.6; } .grow { flex: 1; min-width: 0; }
`
export const Wide = styled.div`width: min(1120px, calc(100% - 48px)); margin-inline: auto; @media(max-width:640px) { width:calc(100% - 40px); }`
export const Header = styled.header`
  background: ${c.dark}; border-bottom: 1px solid #747474;
  > div { min-height:72px; display:flex; align-items:center; justify-content:space-between; gap:20px; }
  .brand { display:flex; align-items:center; gap:10px; font-size:18px; font-weight:900; }
  .mark { width:30px; height:30px; display:grid; place-items:center; background:${c.primary}; color:#000; border-radius:8px; font-size:14px; }
  .admin-badge { background:${c.accentBackground}; color:${c.primary}; border-radius:99px; padding:3px 10px; font-size:12px; font-weight:700; }
  nav { display:flex; gap:24px; font-size:14px; } nav a { padding:24px 0; position:relative; }
  nav a[aria-current]::after { content:''; position:absolute; height:2px; width:24px; background:${c.primary}; left:0; bottom:15px; }
  .profile { width:44px; height:44px; border:2px solid ${c.primary}; border-radius:50%; padding:8px; display:grid;place-items:center; }
  .profile span { width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:${c.primary};color:#000;font-size:12px;font-weight:900; }
  @media(max-width:640px) { > div { flex-wrap:wrap;padding-top:14px;gap:0; } nav {order:3;width:100%;justify-content:center;} nav a {padding:18px 0;} nav a[aria-current]::after {bottom:9px;} }
`
export const Tabs = styled.nav`
  border-bottom:1px solid ${c.border}; > div { display:flex; gap:24px; overflow-x:auto; }
  a { flex-shrink:0; padding:16px 0 14px; font-size:14px; font-weight:700; line-height:23px; color:${c.muted}; border-bottom:2px solid transparent; }
  a[aria-current] { color:${c.text}; border-color:${c.primary}; }
`
export const Intro = styled.section`
  padding-top:48px; padding-bottom:28px;
  .eyebrow {display:flex;align-items:center;gap:8px;font-size:13px;color:${c.accent};line-height:21px;}
  .eyebrow img {width:16px;height:16px;}
  h1 {font-size:36px;font-weight:900;line-height:48px;margin:10px 0 8px;}
  p {font-size:16px;line-height:26px;color:${c.secondary};}
  @media(max-width:640px) { h1 {font-size:28px;line-height:1.4;} }
`
export const Content = styled(Wide)`padding-block:72px; display:flex;flex-direction:column;gap:24px; @media(max-width:640px){padding-block:40px;}`
export const Card = styled.section`padding:24px;display:flex;flex-direction:column;gap:16px;background:${c.surface};border:1px solid ${c.border};border-radius:12px; min-width:0; h2.grow{min-width:180px;} @media(max-width:640px){.student-header > .grow{flex-basis:calc(100% - 84px);}}`
export const Row = styled.div`display:flex;align-items:center;gap:10px;flex-wrap:wrap;`
export const Filters = styled(Row)`flex-wrap:nowrap; input {flex:1;} select {width:160px;} @media(max-width:900px){flex-wrap:wrap;&& input{flex-basis:100%;}&& select{flex:1;min-width:120px;}}`
export const Stats = styled.div`
  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;
  > section {padding:20px;gap:6px;} h2 {font-size:13px;color:${c.muted};} strong {font-size:30px;line-height:36px;font-weight:900;} p {font-size:12px;color:${c.muted};line-height:18px;}
  @media(max-width:640px){grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;>section{padding:16px;}strong{font-size:26px;}}
`
export const TableWrap = styled.div`
  position:relative;border:1px solid ${c.border};border-radius:12px;overflow:auto;
  table {width:100%;border-collapse:collapse;text-align:left;white-space:nowrap;font-size:14px;}
  thead {background:${c.input};color:${c.muted};font-size:12px;}
  th {font-weight:700;padding:12px 20px;} td {padding:14px 20px;color:${c.secondary};border-top:1px solid ${c.border};}
  th,td {padding-right:12px;} th:last-of-type,td:last-of-type {padding-right:20px;}
  td:first-of-type {color:${c.text};font-weight:700;} .number {text-align:right;} td a:hover {text-decoration:underline;} .empty {text-align:center;padding:36px;}
`
export const Field = styled.label`
  display:flex;flex-direction:column;gap:8px;flex:1;min-width:0;font-size:13px;font-weight:700;
  small {font-weight:400;color:${c.muted};} small.error {color:#ff7d7d;}
`
export const TwoColumns = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:20px;@media(max-width:640px){grid-template-columns:1fr;}`
export const GroupColumns = styled.div`display:grid;grid-template-columns:360px minmax(0,1fr);gap:24px;align-items:start; >aside{display:flex;flex-direction:column;gap:20px;min-width:0;} @media(max-width:1000px){grid-template-columns:minmax(0,1fr);} @media(max-width:640px){.group-header > .grow {flex-basis:100%;}}`
export const GroupChoice = styled.button`
  display:flex;text-align:left;align-items:center;gap:8px;width:100%;padding:16px;border:1px solid transparent;border-radius:10px;background:${c.input};color:${c.text};
  &[aria-pressed=true] {background:${c.accentBackground};border-color:${c.primary};color:${c.primary};}
  strong {display:block;font-size:14px;} small {color:${c.muted};display:block;margin-top:4px;}
`
export const Notice = styled.div`background:${c.input};border:1px solid ${c.border};border-radius:10px;padding:14px 18px;font-size:13px;color:${c.secondary};line-height:1.7;`
export const dialogStyles = css`
  width:min(480px,calc(100% - 32px));max-height:calc(100svh - 40px);overflow:auto;padding:28px;border:1px solid ${c.border};border-radius:16px;background:${c.surface};color:${c.text};box-shadow:0 20px 60px #0008;
  &::backdrop {background:#0009;} >div {display:flex;flex-direction:column;gap:16px;}
  h2 {font-size:22px;line-height:1.45;} p {font-size:14px;line-height:1.6;color:${c.secondary};}
  .warning {display:grid;place-items:center;width:48px;height:48px;background:${c.input};border-radius:50%;color:#ff7d7d;font-weight:900;font-size:22px;}
  .close {background:none;border:0;color:${c.muted};font-size:18px;padding:0 4px;}
  .dialog-actions {display:flex;gap:10px;} .dialog-actions >button {flex:1;}
  .results {border:1px solid ${c.border};border-radius:10px;overflow:hidden;max-height:340px;overflow-y:auto;}
  .result {display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid ${c.border};font-size:14px;}
  .result:last-of-type{border:0;} .result:has(:checked){background:${c.input};}.result:has(:disabled){color:${c.muted};}
  .result input {width:20px;height:20px;accent-color:${c.primary};flex-shrink:0;} .avatar{background:#333438;border-radius:50%;width:32px;height:32px;display:grid;place-items:center;flex-shrink:0;}
  .result small {display:block;color:${c.muted};} .result .info{flex:1;}
`
