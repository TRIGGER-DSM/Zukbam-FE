import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "detail-intro": css`
&.detail-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-block: 48px 28px;
}
&.detail-intro h1 {
  padding-top: 10px;
  font-size: 36px;
  font-weight: 900;
  line-height: 48px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.detail-intro {
  flex-direction: column;
  align-items: flex-start;
  padding-block: 36px 20px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.detail-intro h1 {
  font-size: 29px;
  line-height: 40px;
}
}
  `,
  "detail-eyebrow": css`
&.detail-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
&.detail-eyebrow img {
  width: 16px;
  height: 16px;
}
  `,
  "detail-write-top": css`
&.detail-write-top img {
  width: 16px;
  height: 16px;
}
&.detail-write-top {
  gap: 8px;
}
  `,
  "detail-description": css`
&.detail-description {
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.detail-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "detail-content": css`
&.detail-content {
  display: grid;
  grid-template-columns: minmax(0, 772fr) minmax(0, 300fr);
  gap: 48px;
  padding-block: 72px;
  align-items: start;
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.detail-content {
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.detail-content {
  padding-block: 40px 48px;
}
}
  `,
  "detail-article": css`
&.detail-article {
  min-width: 0;
}
&.detail-article section + section {
  margin-top: 40px;
}
&.detail-article h2 {
  margin: 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
&.detail-article section > p {
  max-width: 760px;
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
  `,
  "detail-examples": css`
&.detail-examples {
  max-width: 760px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 8px;
}
&.detail-examples h3 {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
}
&.detail-examples pre {
  margin: 6px 0 0;
  padding: 18px;
  border: .8px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.dark};
  overflow-x: auto;
  font-family: 'Cascadia Code', Consolas, monospace;
  font-size: 14px;
  line-height: 22.4px;
}
&.detail-examples code {
  font: inherit;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.detail-examples {
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
}
}
  `,
  "detail-sidebar": css`
&.detail-sidebar {
  padding-left: 28px;
  border-left: .8px solid ${theme.colors.border};
  min-width: 0;
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.detail-sidebar {
  padding: 32px 0 0;
  border-left: 0;
  border-top: .8px solid ${theme.colors.border};
}
}
  `,
  "detail-info": css`
&.detail-info h2 {
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}
&.detail-info p {
  padding-top: 6px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
&.detail-info + .detail-info {
  margin-top: 32px;
  padding-top: 32px;
  border-top: .8px solid ${theme.colors.border};
}
  `,
  "detail-tier": css`
&.detail-tier {
  display: inline-flex;
  padding: 3px 8px;
  background: ${theme.colors.accentBackground};
  color: ${theme.colors.accent};
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  line-height: 19.5px;
}
  `,
  "detail-sidebar-action": css`
&.detail-sidebar-action {
  margin-top: 32px;
  padding-top: 32px;
  border-top: .8px solid ${theme.colors.border};
}
&.detail-sidebar-action .button {
  width: 100%;
}
  `,
  "detail-back": css`
&.detail-back {
  margin-top: 32px;
  padding-top: 32px;
  border-top: .8px solid ${theme.colors.border};
}
&.detail-back a {
  color: ${theme.colors.accent};
  font-size: 16px;
  line-height: 26px;
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 2px;
}
  `,
  "detail-message": css`
&.detail-message {
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 24px;
}
&.detail-message {
  margin-top: 20px;
}
  `,
  "detail-unavailable": css`
&.detail-unavailable {
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 24px;
}
  `,
}
