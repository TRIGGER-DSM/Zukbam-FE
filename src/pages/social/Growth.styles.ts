import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "growth-content": css`
&.growth-content {
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-content {
  padding-block: 40px 48px;
}
}
  `,
  "growth-stats": css`
&.growth-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  border-block: .8px solid ${theme.colors.border};
}
&.growth-stats > div {
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  border-right: .8px solid ${theme.colors.border};
  min-height: 110px;
}
&.growth-stats > div:first-child {
  padding-left: 0;
}
&.growth-stats > div:last-child {
  border-right: 0;
}
&.growth-stats dd {
  order: 1;
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}
&.growth-stats > div:first-child dd {
  color: ${theme.colors.accent};
}
&.growth-stats dt {
  order: 2;
  padding-top: 2px;
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 26px;
  font-weight: 700;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-stats {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-stats > div {
  padding: 20px 16px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-stats > div:nth-child(2) {
  border-right: 0;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-stats > div:nth-child(n + 3) {
  border-top: .8px solid ${theme.colors.border};
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-stats > div:nth-child(3) {
  padding-left: 0;
}
}
  `,
  "growth-activity-heading": css`
&.growth-activity-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-top: 48px;
}
&.growth-activity-heading h2 {
  margin: 12px 0 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
&.growth-activity-heading select {
  width: 124px;
  height: 44px;
  flex-shrink: 0;
  padding: 10px 12px;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font: inherit;
  font-size: 16px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-activity-heading {
  margin-top: 36px;
  flex-wrap: wrap;
  gap: 12px;
}
}
  `,
  "growth-period": css`
&.growth-period {
  color: #6dff52;
  font-size: 13px;
  line-height: 21.13px;
}
  `,
  "growth-description": css`
&.growth-description {
  max-width: 336px;
  padding-block: 8px 16px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-description {
  max-width: none;
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "growth-chart-scroll": css`
&.growth-chart-scroll {
  margin-top: 32px;
  overflow-x: auto;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.growth-chart-scroll {
  margin-top: 24px;
}
}
  `,
  "growth-chart": css`
&.growth-chart {
  display: grid;
  grid-template-columns: repeat(26, minmax(0, 1fr));
  gap: 4px;
  min-width: 780px;
}
  `,
  "growth-cell": css`
&.growth-cell {
  display: block;
  aspect-ratio: 1;
  background: var(--activity-color);
  border-radius: 2px;
}
  `,
}
