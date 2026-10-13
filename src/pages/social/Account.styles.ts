import { css } from '@emotion/react'
import { theme } from '../../styles/theme'

export const styles = {
  "account-container": css`
&.account-container {
  width: min(${theme.layout.form}, calc(100% - 48px));
  margin-inline: auto;
}
&.account-container h2 {
  margin: 0;
  font-size: 26px;
  line-height: 36px;
  font-weight: 400;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-container {
  width: calc(100% - 40px);
}
}
  `,
  "account-information": css`
&.account-information {
  padding-block: 72px;
}
&.account-information > .account-section-description {
  max-width: 241px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-information {
  padding-block: 40px 48px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-information > .account-section-description {
  max-width: none;
}
}
  `,
  "account-section-description": css`
&.account-section-description {
  padding: 8px 0 16px;
  color: ${theme.colors.secondary};
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-section-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "account-form": css`
&.account-form {
  margin-top: 32px;
}
&.account-form input[readonly] {
  cursor: default;
}
  `,
  "account-logout-section": css`
&.account-logout-section {
  padding-block: 72px;
  background: ${theme.colors.surface};
  border-block: .8px solid ${theme.colors.border};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-logout-section {
  padding-block: 40px;
}
}
  `,
  "account-logout-inner": css`
&.account-logout-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 32px;
}
&.account-logout-inner > div {
  max-width: 315px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-logout-inner {
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 0;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-logout-inner > div {
  max-width: none;
}
}
  `,
}
