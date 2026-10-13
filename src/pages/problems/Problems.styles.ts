import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "problems-icon": css`
&.problems-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
  `,
  "problems-intro": css`
&.problems-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-block: 48px 28px;
}
&.problems-intro > div {
  max-width: 560px;
}
&.problems-intro h1 {
  padding-top: 10px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 900;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-intro {
  flex-direction: column;
  align-items: flex-start;
  padding-block: 36px 20px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-intro h1 {
  font-size: 29px;
  line-height: 40px;
}
}
  `,
  "problems-eyebrow": css`
&.problems-eyebrow {
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
&.problems-eyebrow .problems-icon {
  width: 16px;
  height: 16px;
}
  `,
  "problems-description": css`
&.problems-description {
  padding-top: 8px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "problems-recent": css`
&.problems-recent {
  padding-block: 24px 56px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-recent {
  padding-block: 20px 28px;
}
}
  `,
  "problems-recent-grid": css`
&.problems-recent-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-block: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-recent-grid {
  grid-template-columns: minmax(0, 1fr);
}
}
  `,
  "recent-updates": css`
&.recent-updates {
  padding: 28px 36px 28px 0;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recent-updates {
  padding: 24px 0;
}
}
  `,
  "recent-friends": css`
&.recent-friends {
  padding: 28px 0 28px 36px;
  border-left: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recent-friends {
  padding: 24px 0;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recent-friends {
  border-left: 0;
  border-top: .8px solid ${theme.colors.border};
}
}
  `,
  "recent-heading": css`
&.recent-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
&.recent-heading h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 20px;
  line-height: 27.7px;
  font-weight: 400;
}
&.recent-heading > a {
  color: ${theme.colors.accent};
  font-size: 16px;
  font-weight: 800;
  line-height: 26px;
  text-decoration: underline;
  white-space: nowrap;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.recent-heading {
  flex-wrap: wrap;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recent-heading h2 {
  font-size: 18px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recent-heading > a {
  font-size: 14px;
}
}
  `,
  "recent-problem-list": css`
&.recent-problem-list {
  margin-top: 12px;
  border-top: .8px solid ${theme.colors.border};
}
  `,
  "recent-problem": css`
&.recent-problem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 4px;
  min-height: 94px;
  border-bottom: .8px solid ${theme.colors.border};
}
&.recent-problem p {
  font-size: 16px;
  line-height: 26px;
}
&.recent-problem:hover {
  background: ${theme.colors.surface};
}
  `,
  "problem-result": css`
&.problem-result p {
  font-size: 16px;
  line-height: 26px;
}
&.problem-result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 12px;
  min-height: 98px;
  border-bottom: .8px solid ${theme.colors.border};
  border-radius: 8px;
}
&.problem-result:hover {
  background: ${theme.colors.surface};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-result {
  gap: 12px;
  padding-inline: 4px;
}
}
  `,
  "recent-problem-meta": css`
&.recent-problem-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding-top: 6px;
  color: ${theme.colors.muted};
  font-size: 12px;
  font-weight: 700;
  line-height: 19.5px;
}
  `,
  "problem-tier": css`
&.problem-tier {
  display: inline-flex;
  padding: 3px 8px;
  background: ${theme.colors.accentBackground};
  color: ${theme.colors.accent};
  font-size: 12px;
  font-weight: 800;
  line-height: 19.5px;
  border-radius: 999px;
}
  `,
  "problems-list-section": css`
&.problems-list-section {
  padding-block: 56px 72px;
  scroll-margin-top: 24px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problems-list-section {
  padding-block: 28px 48px;
}
}
  `,
  "problem-list-heading": css`
&.problem-list-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}
&.problem-list-heading h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
&.problem-list-heading > p {
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 21px;
}
  `,
  "problems-icon-circle": css`
&.problems-icon-circle {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${theme.colors.accentBackground};
}
  `,
  "problem-filters": css`
&.problem-filters {
  margin-top: 20px;
  padding: 20px;
  border: .8px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.surface};
}
&.problem-filters select {
  height: 49px;
  width: 100%;
  min-width: 0;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font-size: 16px;
  padding: 10px 12px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filters {
  padding: 14px;
}
}
  `,
  "problem-filter-top": css`
&.problem-filter-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(3, 168px) 44px;
  gap: 8px;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.problem-filter-top {
  grid-template-columns: repeat(3, minmax(0, 1fr)) 44px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filter-top {
  grid-template-columns: minmax(0, 1fr) 44px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filter-top > select {
  grid-column: 1 / -1;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filter-top > select:last-of-type {
  grid-column: 1;
}
}
  `,
  "problem-search": css`
&.problem-search {
  position: relative;
  min-width: 0;
}
&.problem-search > .problems-icon {
  position: absolute;
  top: 15px;
  left: 14px;
  pointer-events: none;
}
&.problem-search input {
  height: 49px;
  width: 100%;
  min-width: 0;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font-size: 16px;
  padding: 10px 12px;
}
&.problem-search input {
  padding-left: 42px;
}
&.problem-search input::placeholder {
  color: ${theme.colors.muted};
  opacity: 1;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.problem-search {
  grid-column: 1 / -1;
}
}
  `,
  "filter-reset": css`
&.filter-reset {
  width: 44px;
  height: 44px;
  min-height: 44px;
  padding: 0;
}
  `,
  "problem-filter-bottom": css`
&.problem-filter-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 14px;
}
&.problem-filter-bottom > select {
  width: 153px;
  height: 44px;
  flex-shrink: 0;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filter-bottom {
  flex-direction: column;
  align-items: flex-start;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-filter-bottom > select {
  align-self: flex-end;
}
}
  `,
  "problem-quick-filters": css`
&.problem-quick-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
  `,
  "unsolved-filter": css`
&.unsolved-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 800;
  line-height: 21px;
}
&.unsolved-filter input {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: ${theme.colors.primary};
}
  `,
  "quick-filter-label": css`
&.quick-filter-label {
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
  `,
  "quick-filter": css`
&.quick-filter {
  border: 1px solid transparent;
  background: ${theme.colors.surface};
  color: ${theme.colors.secondary};
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 19.5px;
  font-weight: 800;
}
&.quick-filter:hover {
  background: ${theme.colors.input};
}
&.quick-filter[aria-pressed='true'] {
  border-color: ${theme.colors.primary};
  background: ${theme.colors.accentBackground};
  color: ${theme.colors.primary};
}
  `,
  "problem-results": css`
&.problem-results {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  border-top: .8px solid ${theme.colors.border};
}
  `,
  "problem-result-meta": css`
&.problem-result-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 6px;
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 21px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.problem-result-meta {
  gap: 8px;
}
}
  `,
  "problem-category": css`
&.problem-category {
  padding: 3px 8px;
  border-radius: 999px;
  background: ${theme.colors.surface};
  color: ${theme.colors.secondary};
  font-size: 12px;
  font-weight: 800;
  line-height: 19.5px;
}
  `,
  "problem-pagination": css`
&.problem-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding-top: 28px;
}
&.problem-pagination button {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: ${theme.colors.secondary};
  font-size: 14px;
  font-weight: 800;
}
&.problem-pagination button[aria-current='page'] {
  background: ${theme.colors.primary};
  color: ${theme.colors.dark};
}
&.problem-pagination button:disabled {
  cursor: default;
}
  `,
  "problem-empty": css`
&.problem-empty {
  padding: 40px 16px;
  text-align: center;
  color: ${theme.colors.secondary};
  font-size: 14px;
  line-height: 24px;
}
  `,
}
