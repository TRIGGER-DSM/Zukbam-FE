import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  'ranking-intro': css`
    &.ranking-intro { padding-block: 48px 28px; }
    &.ranking-intro h1 { padding-top: 10px; font-size: 36px; font-weight: 900; line-height: 48px; }
    @media (max-width: ${theme.breakpoints.mobile}) {
      &.ranking-intro { padding-block: 36px 20px; }
      &.ranking-intro h1 { font-size: 29px; line-height: 40px; }
    }
  `,
  'ranking-eyebrow': css`
    &.ranking-eyebrow { display: flex; align-items: center; gap: 8px; color: ${theme.colors.accent}; font-size: 13px; line-height: 26px; }
    &.ranking-eyebrow img { width: 16px; height: 16px; }
  `,
  'ranking-description': css`
    &.ranking-description { padding-top: 8px; color: ${theme.colors.secondary}; font-size: 16px; line-height: 26px; }
    @media (max-width: ${theme.breakpoints.mobile}) { &.ranking-description { font-size: 14px; line-height: 24px; } }
  `,
}

export const rankingStyles = {
  content: css`
    width: min(880px, calc(100% - 48px)); margin-inline: auto; padding-block: 48px 80px;
    @media (max-width: ${theme.breakpoints.mobile}) { width: calc(100% - 40px); padding-block: 32px 48px; }
  `,
  tabs: css`
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; padding: 6px;
    border: 1.6px solid ${theme.colors.border}; border-radius: 8px; background: ${theme.colors.input};
  `,
  tab: css`
    height: 44px; padding: 1px 6px; border: 1.6px solid transparent; border-radius: 6px;
    background: transparent; color: ${theme.colors.muted}; font-size: 16px; line-height: 26px; font-weight: 900;
    &[aria-selected='true'] { background: ${theme.colors.primary}; border-color: ${theme.colors.primary}; color: ${theme.colors.dark}; box-shadow: 0 2px 0 ${theme.colors.primaryShadow}; }
    &:hover:not([aria-selected='true']) { color: ${theme.colors.text}; }
  `,
  description: css`padding-top: 14px; color: ${theme.colors.muted}; font-size: 13px; line-height: 21.13px;`,
  panel: css`margin-top: 24px;`,
  table: css`border-top: .8px solid ${theme.colors.border};`,
  header: css`
    display: grid; grid-template-columns: 52px 44px minmax(0, 1fr) 112px; align-items: center; gap: 12px;
    min-height: 40px; padding-inline: 12px; border-bottom: .8px solid ${theme.colors.border};
    color: ${theme.colors.muted}; font-size: 12px; line-height: 19.5px;
    > :nth-child(2) { grid-column: span 2; }
    > :last-child { text-align: right; }
    @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 36px 32px minmax(0, 1fr) 88px; gap: 8px; padding-inline: 8px; }
  `,
  row: css`
    display: grid; grid-template-columns: 52px 44px minmax(0, 1fr) 112px; gap: 12px; align-items: center;
    min-height: 72px; padding: 10px 12px; border-bottom: .8px solid ${theme.colors.border}; border-radius: 8px;
    &[data-me='true'] { background: ${theme.colors.accentBackground}; box-shadow: inset 3px 0 0 ${theme.colors.primary}; }
    @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 36px 32px minmax(0, 1fr) 88px; gap: 8px; padding-inline: 8px; }
  `,
  position: css`
    width: 36px; height: 36px; justify-self: center; display: grid; place-items: center;
    border: 1.6px solid ${theme.colors.border}; border-radius: 50%; font-size: 14px; line-height: 22.75px; font-weight: 900;
    &[data-top='true'] { border-color: ${theme.colors.primary}; }
    &[data-highlight='true'] { color: ${theme.colors.primary}; }
    @media (max-width: ${theme.breakpoints.mobile}) { width: 32px; height: 32px; }
  `,
  avatar: css`
    width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; font-size: 15px; line-height: 24.38px; font-weight: 900;
    @media (max-width: ${theme.breakpoints.mobile}) { width: 32px; height: 32px; }
  `,
  user: css`min-width: 0;`,
  name: css`display: flex; align-items: center; gap: 8px; font-size: 16px; line-height: 26px;`,
  me: css`color: ${theme.colors.primary}; font-size: 12px; line-height: 19.5px;`,
  solved: css`padding-top: 3px; color: ${theme.colors.muted}; font-size: 12px; line-height: 19.5px; font-weight: 700;`,
  xp: css`
    text-align: right; font-size: 15px; line-height: 24.38px; white-space: nowrap;
    &[data-me='true'] { color: ${theme.colors.primary}; }
    @media (max-width: ${theme.breakpoints.mobile}) { font-size: 13px; }
  `,
  empty: css`padding: 40px 16px; color: ${theme.colors.secondary}; text-align: center; font-size: 14px; line-height: 24px;`,
}
