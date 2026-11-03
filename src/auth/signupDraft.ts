import type {
  EmailVerification,
  StudentSignupRequest,
  TeacherSignupRequest,
} from '../api/auth'

export type SignupDraft =
  | {
      accountType: 'student'
      data: Omit<StudentSignupRequest, 'emailVerifiedToken'>
    }
  | {
      accountType: 'teacher'
      data: Omit<TeacherSignupRequest, 'emailVerifiedToken'>
    }

export type PendingSignup = {
  draft: SignupDraft
  verificationId: string
  expiresAt: number
  emailVerifiedToken?: string
}

// Passwords and unfinished signup information stay in memory, never browser storage or URL state.
let pendingSignup: PendingSignup | null = null

export function getPendingSignup() {
  return pendingSignup
}
export function setPendingSignup(value: PendingSignup | null) {
  pendingSignup = value
}
export function beginSignup(
  draft: SignupDraft,
  verification: EmailVerification,
) {
  pendingSignup = {
    draft,
    verificationId: verification.verificationId,
    expiresAt: Date.now() + verification.expiresIn * 1000,
  }
}

export function readSignupDraft(
  form: HTMLFormElement,
  accountType: 'student' | 'teacher',
): SignupDraft {
  const values = new FormData(form)
  const email = String(values.get('email') ?? '').trim()
  const name = String(values.get('name') ?? '').trim()
  const password = String(values.get('password') ?? '')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new Error('올바른 학교 이메일을 입력해 주세요.')
  if (!name || name.length > 255)
    throw new Error('이름은 1~255자로 입력해 주세요.')
  if (
    password.length < 8 ||
    password.length > 64 ||
    !/[A-Za-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^\p{L}\p{N}\s]/u.test(password)
  ) {
    throw new Error(
      '비밀번호는 8~64자로 영문자, 숫자, 특수문자를 모두 포함해 주세요.',
    )
  }
  const common = { email, name, password }
  if (accountType === 'teacher') {
    const teacherCode = String(values.get('teacherCode') ?? '').trim()
    if (!teacherCode) throw new Error('선생님 고유 코드를 입력해 주세요.')
    return { accountType, data: { ...common, teacherCode } }
  }
  const grade = Number(values.get('grade'))
  const classroom = Number(values.get('class'))
  const number = Number(values.get('number'))
  if (!Number.isInteger(grade) || grade < 1 || grade > 3)
    throw new Error('학년은 1~3 사이의 정수로 입력해 주세요.')
  if (!Number.isInteger(classroom) || classroom < 1 || classroom > 4)
    throw new Error('반은 1~4 사이의 정수로 입력해 주세요.')
  if (!Number.isSafeInteger(number) || number < 1)
    throw new Error('번호는 양의 정수로 입력해 주세요.')
  return { accountType, data: { ...common, grade, class: classroom, number } }
}
