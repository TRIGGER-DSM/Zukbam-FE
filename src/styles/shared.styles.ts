import { css } from '@emotion/react'
import { theme } from './theme'

export const styles = {
  "signup-page": css`
&.signup-page {
  min-height: 100svh;
}
  `,
  "wide-container": css`
&.wide-container {
  width: min(${theme.layout.wide}, calc(100% - 48px));
  margin-inline: auto;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.wide-container {
  width: calc(100% - 40px);
}
}
  `,
  "site-header": css`
&.site-header {
  background: ${theme.colors.dark};
  border-bottom: .8px solid ${theme.colors.text};
}
  `,
  "header-inner": css`
&.header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.header-inner {
  height: auto;
  min-height: 72px;
  flex-wrap: wrap;
}
}
  `,
  "brand": css`
&.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 29.25px;
}
  `,
  "brand-mark": css`
&.brand-mark {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${theme.colors.primary};
  color: ${theme.colors.dark};
  font-size: 14px;
}
  `,
  "main-nav": css`
&.main-nav {
  display: flex;
  gap: 24px;
  font-size: 14px;
  line-height: 22.75px;
}
&.main-nav a {
  padding-block: 24px;
}
&.main-nav a:hover {
  color: ${theme.colors.primary};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.main-nav {
  order: 3;
  width: 100%;
  justify-content: center;
  gap: 32px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.main-nav a {
  padding-block: 12px;
}
}
&.main-nav a[aria-current='page'] {
  position: relative;
}
&.main-nav a[aria-current='page']::after {
  content: '';
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${theme.colors.primary};
}
  `,
  "footer-inner": css`
&.footer-inner a:hover {
  color: ${theme.colors.primary};
}
&.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.muted};
  font-size: 13px;
  line-height: 21.13px;
}
&.footer-inner nav {
  display: flex;
  gap: 18px;
}
&.footer-inner a {
  text-decoration: underline;
  text-underline-offset: 2px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.footer-inner {
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
}
}
  `,
  "button": css`
&.button {
  min-height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  border: 1.6px solid;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  line-height: 22.75px;
  white-space: nowrap;
  transition: background-color 150ms, transform 150ms;
}
&.button:active {
  transform: translateY(2px);
  box-shadow: none;
}
@media (prefers-reduced-motion: reduce) {
&.button {
  transition: none;
}
}
  `,
  "button-primary": css`
&.button-primary {
  color: ${theme.colors.dark};
  background: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
  box-shadow: 0 3px 0 ${theme.colors.primaryShadow};
}
&.button-primary:hover {
  background: ${theme.colors.primaryHover};
  border-color: ${theme.colors.primaryHover};
}
  `,
  "button-secondary": css`
&.button-secondary {
  background: ${theme.colors.input};
  border-color: ${theme.colors.border};
  color: ${theme.colors.text};
  box-shadow: 0 3px 0 #191919;
}
&.button-secondary:hover {
  background: ${theme.colors.border};
}
  `,
  "account-nav": css`
&.account-nav {
  border-bottom: .8px solid ${theme.colors.border};
}
&.account-nav a {
  padding: 16px 0 14px;
  border-bottom: 1.6px solid transparent;
  color: ${theme.colors.muted};
  font-size: 14px;
  font-weight: 800;
  line-height: 22.75px;
  white-space: nowrap;
}
&.account-nav a[aria-current='page'] {
  border-bottom-color: ${theme.colors.primary};
  color: ${theme.colors.text};
}
&.account-nav a:hover {
  color: ${theme.colors.text};
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-nav a {
  font-size: 13px;
}
}
  `,
  "account-nav-inner": css`
&.account-nav-inner {
  display: flex;
  gap: 24px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.account-nav-inner {
  gap: 20px;
  overflow-x: auto;
}
}
  `,
  "page-intro": css`
&.page-intro {
  height: 230px;
  padding: 56px 0 64px;
  background: ${theme.colors.dark};
  border-bottom: .8px solid ${theme.colors.border};
}
&.page-intro h1 {
  font-size: 36px;
  font-weight: 900;
  line-height: 47.99px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.page-intro {
  height: auto;
  padding-block: 40px;
}
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.page-intro h1 {
  font-size: 32px;
}
}
  `,
  "intro-container": css`
&.intro-container {
  width: min(${theme.layout.intro}, calc(100% - 48px));
  margin-inline: auto;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.intro-container {
  width: calc(100% - 40px);
}
}
  `,
  "eyebrow": css`
&.eyebrow {
  font-size: 13px;
  line-height: 21.13px;
}
  `,
  "intro-description": css`
&.intro-description {
  padding-top: 14px;
  font-size: 16px;
  line-height: 26px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.intro-description {
  font-size: 14px;
  line-height: 24px;
}
}
  `,
  "signup-section": css`
&.signup-section {
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.signup-section {
  padding-block: 40px 56px;
}
}
  `,
  "signup-form": css`
&.signup-form {
  width: min(${theme.layout.form}, 100%);
}
  `,
  "verification-section": css`
&.verification-section {
  display: flex;
  justify-content: center;
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.verification-section {
  padding-block: 40px 56px;
}
}
  `,
  "verification-form": css`
&.verification-form {
  width: min(440px, 100%);
}
  `,
  "login-section": css`
&.login-section {
  display: flex;
  justify-content: center;
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.login-section {
  padding-block: 40px 56px;
}
}
  `,
  "login-container": css`
&.login-container {
  width: min(440px, 100%);
}
  `,
  "login-password": css`
&.login-password {
  padding-top: 18px;
}
  `,
  "login-submit": css`
&.login-submit {
  padding-top: 28px;
}
&.login-submit .button {
  width: 100%;
  height: 42px;
}
  `,
  "login-links": css`
&.login-links {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 18px;
  font-size: 14px;
  font-weight: 800;
  line-height: 22.75px;
}
&.login-links a {
  color: ${theme.colors.accent};
  text-decoration: underline;
  text-underline-offset: 2px;
}
&.login-links a:hover {
  color: ${theme.colors.primaryHover};
}
  `,
  "reset-section": css`
&.reset-section {
  display: flex;
  justify-content: center;
  padding-block: 72px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.reset-section {
  padding-block: 40px 56px;
}
}
  `,
  "reset-container": css`
&.reset-container {
  width: min(440px, 100%);
}
  `,
  "reset-new-password": css`
&.reset-new-password {
  padding-top: 18px;
}
  `,
  "reset-help": css`
&.reset-help {
  padding-top: 6px;
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
  `,
  "reset-notice": css`
&.reset-notice {
  margin-top: 24px;
  padding: 16px 18px;
  border-left: 2.4px solid #ff7d7d;
  background: #432323;
  font-size: 16px;
  line-height: 26px;
  overflow-wrap: anywhere;
}
&.reset-notice strong {
  display: block;
  font-weight: 700;
}
  `,
  "verification-notice": css`
&.verification-notice {
  padding: 16px 18px;
  border-left: 2.4px solid #73a7ff;
  background: #1e3047;
  font-size: 16px;
  line-height: 26px;
  overflow-wrap: anywhere;
}
  `,
  "verification-field": css`
&.verification-field {
  margin-top: 24px;
}
  `,
  "verification-time": css`
&.verification-time {
  padding-top: 6px;
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
  `,
  "form-grid": css`
&.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 20px;
  row-gap: 20px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.form-grid {
  grid-template-columns: minmax(0, 1fr);
}
}
  `,
  "field": css`
&.field {
  min-width: 0;
}
&.field label {
  display: block;
  padding-bottom: 8px;
  font-size: 13px;
  line-height: 21.13px;
  font-weight: 800;
}
&.field input {
  display: block;
  width: 100%;
  height: 49px;
  padding: 10px 12px;
  border: 1.6px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.input};
  color: ${theme.colors.text};
  font-size: 16px;
}
&.field input::placeholder {
  color: ${theme.colors.muted};
  opacity: 1;
}
&.field input:hover {
  border-color: #62656d;
}
&.field input:focus {
  border-color: ${theme.colors.primary};
  outline: 2px solid rgb(57 255 20 / 18%);
  outline-offset: 2px;
}
  `,
  "field-full": css`
&.field-full {
  grid-column: 1 / -1;
}
  `,
  "field-help": css`
&.field-help {
  padding: 6px 0 12px;
  color: ${theme.colors.muted};
  font-size: 12px;
  line-height: 19.5px;
}
  `,
  "form-actions": css`
&.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 28px;
}
@media (max-width: ${theme.breakpoints.mobile}) {
&.form-actions {
  flex-wrap: wrap;
}
}
  `,
  "form-message": css`
&.form-message {
  margin-top: 20px;
  color: ${theme.colors.text};
  font-size: 13px;
  line-height: 21px;
}
  `,
  "site-footer": css`
&.site-footer {
  border-top: .8px solid ${theme.colors.border};
  padding-block: 32px;
}
  `,
  "skip-link": css`
&.skip-link {
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 10;
  transform: translateY(-150%);
  padding: 10px 16px;
  background: ${theme.colors.primary};
  color: ${theme.colors.dark};
  border-radius: 8px;
}
&.skip-link:focus {
  transform: none;
}
  `,
  "home-profile": css`
&.home-profile {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: ${theme.colors.accentBackground};
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  box-shadow: 0 3px 0 #191919;
}
&.home-profile span {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  background: ${theme.colors.primary};
  border-radius: 50%;
  color: #191919;
  font-size: 12px;
  font-weight: 700;
}
  `,
}
