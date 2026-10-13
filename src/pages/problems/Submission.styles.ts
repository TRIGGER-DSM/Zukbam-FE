import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "submission-intro": css`
&.submission-intro {
  padding-block: 48px 28px;
}
&.submission-intro h1 {
  padding-top: 10px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 900;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-intro {
  padding-block: 36px 20px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-intro h1 {
  font-size: 29px;
  line-height: 40px;
}
}
  `,
  "submission-eyebrow": css`
&.submission-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
&.submission-eyebrow img {
  width: 16px;
  height: 16px;
}
  `,
  "submission-description": css`
&.submission-description {
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "submission-content": css`
&.submission-content {
  display: grid;
  grid-template-columns: minmax(0, 772fr) minmax(0, 300fr);
  gap: 48px;
  padding-block: 72px;
  align-items: start;
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.submission-content {
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-content {
  padding-block: 40px 48px;
}
}
  `,
  "submission-form": css`
&.submission-form {
  min-width: 0;
}
  `,
  "submission-editor": css`
&.submission-editor {
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  overflow: hidden;
  min-height: 448px;
}
&.submission-editor textarea {
  display: block;
  width: 100%;
  min-height: 376px;
  padding: 10px 12px;
  margin: 0;
  border: 0;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font-family: 'Cascadia Code', Consolas, monospace;
  font-size: 16px;
  line-height: 25.6px;
  tab-size: 4;
  resize: vertical;
}
&.submission-editor:focus-within {
  border-color: #62656d;
}
&.submission-editor textarea:focus-visible {
  outline: 2px solid ${theme.colors.primary};
  outline-offset: -2px;
}
  `,
  "submission-toolbar": css`
&.submission-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 14px;
  border-bottom: .8px solid ${theme.colors.border};
  background: ${theme.colors.surface};
}
&.submission-toolbar strong {
  width: 98px;
  flex-shrink: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}
&.submission-toolbar select {
  flex: 1;
  min-width: 0;
  height: 44px;
  padding: 10px 16px;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font: inherit;
  font-size: 16px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-toolbar {
  align-items: stretch;
  flex-direction: column;
  gap: 12px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-toolbar strong {
  width: auto;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-toolbar select {
  flex: auto;
  width: 100%;
}
}
  `,
  "submission-help": css`
&.submission-help {
  padding-top: 12px;
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
  `,
  "submission-message": css`
&.submission-message {
  margin-top: 20px;
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 24px;
}
  `,
  "submission-sidebar": css`
&.submission-sidebar {
  min-width: 0;
  padding-left: 28px;
  border-left: .8px solid ${theme.colors.border};
}
&.submission-sidebar h2 {
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}
&.submission-sidebar p {
  padding-top: 6px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
&.submission-sidebar section + section {
  margin-top: 32px;
  padding-block: 32px 16px;
  border-top: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.tablet}) {
&.submission-sidebar {
  border-left: 0;
  border-top: .8px solid ${theme.colors.border};
  padding: 32px 0 0;
}
}
  `,
  "submission-actions": css`
@media (max-width: ${theme.breakpoints.mobile}) {
&.submission-actions {
  gap: 10px;
}
}
  `,
}
