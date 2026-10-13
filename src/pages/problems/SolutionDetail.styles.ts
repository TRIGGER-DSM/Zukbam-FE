import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "solution-intro": css`
&.solution-intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  padding-block: 48px 28px;
}
&.solution-intro h1 {
  padding-top: 10px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 900;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.solution-intro {
  flex-direction: column;
  align-items: flex-start;
  padding-block: 36px 20px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.solution-intro h1 {
  font-size: 29px;
  line-height: 40px;
}
}
  `,
  "solution-eyebrow": css`
&.solution-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
&.solution-eyebrow img {
  width: 16px;
  height: 16px;
}
  `,
  "solution-description": css`
&.solution-description {
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.solution-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "solution-content": css`
&.solution-content {
  display: grid;
  grid-template-columns: minmax(0, 772fr) minmax(0, 300fr);
  gap: 48px;
  align-items: start;
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.solution-content {
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.solution-content {
  padding-block: 40px 48px;
}
}
  `,
  "solution-article": css`
&.solution-article {
  min-width: 0;
}
  `,
  "solution-metrics": css`
&.solution-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0;
  border-block: .8px solid ${theme.colors.border};
}
&.solution-metrics > div {
  display: flex;
  flex-direction: column;
  padding: 18px;
  min-height: 93px;
  border-right: .8px solid ${theme.colors.border};
}
&.solution-metrics > div:last-child {
  border-right: 0;
}
&.solution-metrics dt {
  order: 2;
  padding-top: 3px;
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 26px;
}
&.solution-metrics dd {
  order: 1;
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.solution-metrics > div {
  padding: 14px 10px;
  min-height: 85px;
}
}
  `,
  "solution-code": css`
&.solution-code {
  margin: 24px 0 0;
  min-height: 172px;
  padding: 18px;
  border: .8px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.dark};
  color: ${theme.colors.text};
  font-family: 'Cascadia Code', Consolas, monospace;
  font-size: 14px;
  line-height: 22.4px;
  overflow-x: auto;
  tab-size: 4;
}
&.solution-code code {
  font: inherit;
}
  `,
  "solution-sidebar": css`
&.solution-sidebar {
  padding-left: 28px;
  border-left: .8px solid ${theme.colors.border};
  min-width: 0;
}
&.solution-sidebar h2 {
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}
&.solution-sidebar p {
  padding-top: 6px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
&.solution-sidebar section + section {
  margin-top: 32px;
  padding-top: 32px;
  border-top: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.solution-sidebar {
  padding: 32px 0 0;
  border-left: 0;
  border-top: .8px solid ${theme.colors.border};
}
}
  `,
  "solution-problem-link": css`
&.solution-problem-link {
  margin-top: 32px;
  padding-top: 32px;
  border-top: .8px solid ${theme.colors.border};
}
&.solution-problem-link a {
  color: ${theme.colors.accent};
  text-decoration: underline;
  text-underline-offset: 2px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 800;
}
  `,
  "solution-unavailable": css`
&.solution-unavailable {
  margin-top: 24px;
  padding: 18px;
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 24px;
}
  `,
}
