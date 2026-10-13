import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "history-intro": css`
&.history-intro {
  padding-block: 48px 28px;
}
&.history-intro h1 {
  padding-top: 10px;
  font-size: 36px;
  font-weight: 900;
  line-height: 48px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-intro {
  padding-block: 36px 20px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-intro h1 {
  font-size: 29px;
  line-height: 40px;
}
}
  `,
  "history-eyebrow": css`
&.history-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
&.history-eyebrow img {
  width: 16px;
  height: 16px;
}
  `,
  "history-description": css`
&.history-description {
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "history-content": css`
&.history-content {
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-content {
  padding-block: 40px 48px;
}
}
  `,
  "history-filters": css`
&.history-filters {
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(3, 168px) auto;
  gap: 8px;
}
&.history-filters input {
  width: 100%;
  min-width: 0;
  height: 49px;
  padding: 10px 12px;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font: inherit;
  font-size: 16px;
}
&.history-filters select {
  width: 100%;
  min-width: 0;
  height: 49px;
  padding: 10px 12px;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font: inherit;
  font-size: 16px;
}
&.history-filters input::placeholder {
  color: ${theme.colors.muted};
  opacity: 1;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.history-filters {
  grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
}
}
@media (max-width: ${theme.breakpoints.compact}) {
&.history-filters input {
  grid-column: 1 / -1;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-filters {
  grid-template-columns: minmax(0, 1fr) auto;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-filters select {
  grid-column: 1 / -1;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-filters select:last-of-type {
  grid-column: 1;
}
}
  `,
  "history-records": css`
&.history-records {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  border-top: .8px solid ${theme.colors.border};
}
  `,
  "history-record": css`
&.history-record {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 20px 12px;
  min-height: 98px;
  border-bottom: .8px solid ${theme.colors.border};
  border-radius: 8px;
}
&.history-record:hover {
  background: ${theme.colors.surface};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-record {
  padding-inline: 4px;
  gap: 12px;
}
}
  `,
  "history-record-title": css`
&.history-record-title {
  font-size: 16px;
  line-height: 26px;
}
  `,
  "history-record-meta": css`
&.history-record-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 6px;
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 21.13px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.history-record-meta {
  gap: 8px;
}
}
  `,
  "history-result": css`
&.history-result {
  display: inline-flex;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 19.5px;
  font-weight: 800;
}
  `,
  "history-result-correct": css`
&.history-result-correct {
  color: #50d890;
  background: #193529;
}
  `,
  "history-result-wrong": css`
&.history-result-wrong {
  color: #ff7d7d;
  background: #432323;
}
  `,
  "history-chevron": css`
&.history-chevron {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
  `,
  "history-pagination": css`
&.history-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding-top: 28px;
}
&.history-pagination button {
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: ${theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
}
&.history-pagination button[aria-current='page'] {
  background: ${theme.colors.primary};
  color: ${theme.colors.dark};
}
&.history-pagination button:disabled {
  cursor: default;
}
  `,
  "history-empty": css`
&.history-empty {
  padding: 40px 16px;
  color: ${theme.colors.secondary};
  text-align: center;
  font-size: 14px;
  line-height: 24px;
}
  `,
}
