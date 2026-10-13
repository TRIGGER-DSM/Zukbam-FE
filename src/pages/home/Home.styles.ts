import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "home-icon": css`
&.home-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
  `,
  "home-hero": css`
&.home-hero {
  padding: 64px 0 80px;
  border-bottom: .8px solid ${theme.colors.border};
  background: ${theme.colors.dark};
}
&.home-hero h1 {
  font-size: 48px;
  font-weight: 900;
  line-height: 60px;
  letter-spacing: 0;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.home-hero h1 {
  font-size: 40px;
  line-height: 52px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-hero {
  padding-block: 40px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-hero h1 {
  font-size: 36px;
  line-height: 46px;
}
}
  `,
  "home-hero-inner": css`
&.home-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 559fr) minmax(0, 497fr);
  gap: 64px;
  align-items: center;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.home-hero-inner {
  gap: 32px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-hero-inner {
  grid-template-columns: minmax(0, 1fr);
  gap: 36px;
}
}
  `,
  "home-eyebrow": css`
&.home-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 21.13px;
}
  `,
  "home-hero-copy": css`
&.home-hero-copy > .home-eyebrow {
  margin-bottom: 5px;
}
  `,
  "home-description": css`
&.home-description {
  margin-top: 14px;
  font-size: 17px;
  line-height: 28.05px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-description {
  font-size: 15px;
}
}
  `,
  "home-hero-actions": css`
&.home-hero-actions {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}
&.home-hero-actions .button {
  gap: 8px;
}
  `,
  "home-refresh": css`
&.home-refresh {
  background: transparent;
  border-color: ${theme.colors.text};
  color: ${theme.colors.text};
  box-shadow: 0 3px 0 #191919;
}
&.home-refresh:hover {
  background: ${theme.colors.input};
}
  `,
  "home-recommendation-message": css`
&.home-recommendation-message {
  margin-top: 16px;
  font-size: 13px;
  line-height: 21px;
}
  `,
  "recommendation-card": css`
&.recommendation-card {
  height: 352px;
  padding: 32px;
  border: .8px solid ${theme.colors.text};
  border-radius: 8px;
  background: linear-gradient(135deg, rgb(57 255 20 / 12%), transparent 52%), ${theme.colors.background};
  box-shadow: 0 24px 64px rgb(0 0 0 / 36%);
}
&.recommendation-card h2 {
  margin: 56px 0 0;
  font-size: 26px;
  line-height: 35.88px;
  font-weight: 400;
}
&.recommendation-card h2 a:hover {
  color: ${theme.colors.primary};
}
@media (max-width: ${theme.breakpoints.compact}) {
&.recommendation-card {
  padding: 24px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recommendation-card {
  height: 300px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.recommendation-card h2 {
  margin-top: 40px;
  font-size: 24px;
}
}
  `,
  "recommendation-top": css`
&.recommendation-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
  line-height: 21px;
}
  `,
  "recommendation-description": css`
&.recommendation-description {
  margin-top: 10px;
  font-size: 16px;
  line-height: 26px;
}
  `,
  "problem-badges": css`
&.problem-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}
&.problem-badges span {
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 19.5px;
  font-weight: 800;
}
  `,
  "problem-level": css`
&.problem-level {
  color: ${theme.colors.accent};
  background: ${theme.colors.accentBackground};
}
  `,
  "problem-rate": css`
&.problem-rate {
  color: ${theme.colors.secondary};
  background: ${theme.colors.surface};
}
  `,
  "home-activity": css`
&.home-activity {
  padding-block: 48px;
}
&.home-activity h2 {
  margin: 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
&.home-activity h2 strong {
  color: ${theme.colors.accent};
  font-weight: 900;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-activity {
  padding-block: 36px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-activity h2 {
  font-size: 21px;
}
}
  `,
  "activity-heading": css`
&.activity-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.activity-heading {
  gap: 12px;
  align-items: flex-start;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.activity-heading .home-heading-group {
  gap: 8px;
}
}
  `,
  "home-heading-group": css`
&.home-heading-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
  `,
  "home-icon-circle": css`
&.home-icon-circle {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.accentBackground};
  flex-shrink: 0;
}
&.home-icon-circle .home-icon {
  width: 18px;
  height: 18px;
}
  `,
  "activity-year": css`
&.activity-year {
  color: ${theme.colors.accent};
  font-size: 13px;
  line-height: 26px;
}
  `,
  "home-overview": css`
&.home-overview h2 {
  margin: 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
&.home-overview {
  padding-block: 72px;
  background: ${theme.colors.surface};
  border-block: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.home-overview {
  padding-block: 40px;
}
}
  `,
  "activity-year-select": css`
&.activity-year-select {
  width: 112px;
  height: 44px;
  padding: 10px 14px;
  background: ${theme.colors.input};
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  color: ${theme.colors.text};
  font: inherit;
  font-size: 16px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.activity-year-select {
  width: 94px;
  padding-inline: 8px;
  font-size: 14px;
}
}
  `,
  "activity-scroll": css`
&.activity-scroll {
  overflow-x: auto;
  padding-top: 28px;
}
  `,
  "activity-chart": css`
&.activity-chart {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 12px;
  min-width: 1120px;
  height: 136px;
}
  `,
  "activity-days": css`
&.activity-days {
  display: grid;
  grid-template-rows: repeat(7, 12px);
  gap: 4px;
  text-align: center;
  color: ${theme.colors.muted};
  font-size: 10px;
  line-height: 12px;
}
  `,
  "activity-cells": css`
&.activity-cells {
  display: grid;
  grid-template-columns: repeat(53, 12px);
  grid-template-rows: repeat(7, 12px);
  gap: 4px;
}
  `,
  "activity-cell": css`
&.activity-cell {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
}
  `,
  "activity-level-0": css`
&.activity-level-0 {
  background: ${theme.colors.border};
}
  `,
  "activity-level-1": css`
&.activity-level-1 {
  background: #caffc0;
}
  `,
  "activity-level-2": css`
&.activity-level-2 {
  background: #9bff87;
}
  `,
  "activity-level-3": css`
&.activity-level-3 {
  background: ${theme.colors.primary};
}
  `,
  "activity-level-4": css`
&.activity-level-4 {
  background: ${theme.colors.accent};
}
  `,
  "activity-months": css`
&.activity-months {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 10px;
  color: ${theme.colors.muted};
  font-size: 11px;
  line-height: 17.88px;
}
  `,
  "activity-summary": css`
&.activity-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-top: .8px solid ${theme.colors.border};
  margin-top: 24px;
  padding-top: 20px;
  color: ${theme.colors.secondary};
  font-size: 13px;
  line-height: 21.13px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.activity-summary {
  flex-wrap: wrap;
}
}
  `,
  "activity-longest": css`
&.activity-longest {
  display: flex;
  align-items: center;
  gap: 8px;
}
  `,
  "activity-legend": css`
&.activity-legend {
  display: flex;
  align-items: center;
  gap: 8px;
}
  `,
  "home-overview-inner": css`
&.home-overview-inner {
  display: grid;
  grid-template-columns: minmax(0, 718fr) minmax(0, 346fr);
  gap: 56px;
}
@media (max-width: ${theme.breakpoints.compact}) {
&.home-overview-inner {
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
}
}
  `,
  "rank-section": css`
&.rank-section > .home-heading-group {
  min-height: 44px;
}
  `,
  "rank-details": css`
&.rank-details {
  display: grid;
  grid-template-columns: 116px minmax(0, 1fr);
  align-items: center;
  gap: 28px;
  margin-top: 28px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.rank-details {
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 16px;
}
}
  `,
  "rank-emblem": css`
&.rank-emblem {
  width: 116px;
  height: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: .8px solid ${theme.colors.primary};
  border-radius: 50%;
  background: ${theme.colors.dark};
}
&.rank-emblem span {
  color: #6dff52;
  font-size: 13px;
  line-height: 21.13px;
  font-weight: 800;
}
&.rank-emblem strong {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.rank-emblem {
  width: 84px;
  height: 84px;
}
}
  `,
  "rank-progress-heading": css`
&.rank-progress-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
&.rank-progress-heading strong {
  font-size: 26px;
  line-height: 42.25px;
}
&.rank-progress-heading > span {
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 21.13px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.rank-progress-heading {
  align-items: flex-start;
  flex-direction: column;
  gap: 0;
}
}
  `,
  "rank-progress": css`
&.rank-progress {
  height: 8px;
  border-radius: 999px;
  background: ${theme.colors.border};
  margin-top: 10px;
  overflow: hidden;
}
&.rank-progress > span {
  display: block;
  width: 68%;
  height: 100%;
  border-radius: inherit;
  background: ${theme.colors.primary};
}
  `,
  "rank-stats": css`
&.rank-stats {
  display: flex;
  gap: 20px;
  padding-top: 16px;
  color: ${theme.colors.secondary};
  font-size: 13px;
  line-height: 21.13px;
}
&.rank-stats > span {
  display: flex;
  align-items: center;
  gap: 6px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.rank-stats {
  gap: 12px;
  flex-wrap: wrap;
}
}
  `,
  "rank-link": css`
&.rank-link {
  display: inline-flex;
  margin-top: 18px;
  padding: 8px 4px;
  color: ${theme.colors.accent};
  font-size: 14px;
  line-height: 22.75px;
  font-weight: 800;
}
&.rank-link:hover {
  text-decoration: underline;
}
  `,
  "home-notices": css`
&.home-notices {
  padding-left: 36px;
  border-left: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.compact}) {
&.home-notices {
  border-left: 0;
  border-top: .8px solid ${theme.colors.border};
  padding: 32px 0 0;
}
}
  `,
  "notices-heading": css`
&.notices-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
  `,
  "notices-all": css`
&.notices-all {
  color: ${theme.colors.accent};
  font-size: 16px;
  line-height: 26px;
  font-weight: 800;
  text-decoration: underline;
}
  `,
  "notice-list": css`
&.notice-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  border-top: .8px solid ${theme.colors.border};
}
&.notice-list li {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  padding-block: 14px;
  border-bottom: .8px solid ${theme.colors.border};
}
&.notice-list time {
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
&.notice-list a {
  font-size: 14px;
  line-height: 22.75px;
}
&.notice-list a:hover {
  color: ${theme.colors.primary};
}
  `,
}
