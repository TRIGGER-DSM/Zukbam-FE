import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { Button, ButtonLink } from "../../components/ui/Button";
import { authApi } from "../../api/auth";
import { getErrorMessage } from "../../api/client";
import { getPendingSignup, setPendingSignup } from "../../auth/signupDraft";
import { saveSession } from "../../auth/session";
import {
  VerificationSection,
  VerificationForm,
  VerificationNotice,
  VerificationField,
  FormActions,
  VerificationFeedback,
} from "./EmailVerification.styles";

export default function EmailVerification() {
  const [pending, setPending] = useState(getPendingSignup);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [action, setAction] = useState<"verify" | "resend" | null>(null);
  const [now, setNow] = useState(Date.now);
  const busy = useRef(false);
  const navigate = useNavigate();
  const remaining = pending
    ? Math.max(0, Math.ceil((pending.expiresAt - now) / 1000))
    : 0;
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");

  useEffect(() => {
    if (!pending || pending.emailVerifiedToken) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [pending]);

  async function handleResend() {
    if (!pending || busy.current) return;
    busy.current = true;
    setAction("resend");
    setMessage("");
    try {
      const result = await authApi.sendEmailCode(pending.draft.data.email);
      const next = {
        draft: pending.draft,
        verificationId: result.verificationId,
        expiresAt: Date.now() + result.expiresIn * 1000,
      };
      setPendingSignup(next);
      setPending(next);
      setNow(Date.now());
      setCode("");
      setMessage(
        "새 인증 코드를 보냈습니다. 가장 최근에 받은 코드를 입력해 주세요.",
      );
    } catch (error) {
      setMessage(getErrorMessage(error));
    } finally {
      busy.current = false;
      setAction(null);
    }
  }

  async function handleVerify(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pending || busy.current) return;
    if (!pending.emailVerifiedToken && pending.expiresAt <= Date.now()) {
      setMessage("인증 시간이 만료되었습니다. 코드를 재전송해 주세요.");
      return;
    }
    busy.current = true;
    setAction("verify");
    setMessage("");
    try {
      const emailVerifiedToken =
        pending.emailVerifiedToken ??
        (await authApi.verifyEmail({
          email: pending.draft.data.email,
          verificationId: pending.verificationId,
          verificationCode: code,
        }));
      const verified = { ...pending, emailVerifiedToken };
      setPendingSignup(verified);
      setPending(verified);
      const draft = pending.draft;
      const tokens =
        draft.accountType === "teacher"
          ? await authApi.signupTeacher({ ...draft.data, emailVerifiedToken })
          : await authApi.signupStudent({ ...draft.data, emailVerifiedToken });
      saveSession(tokens, draft.data.email);
      setPendingSignup(null);
      navigate(draft.accountType === "teacher" ? "/admin/dashboard" : "/", {
        replace: true,
      });
    } catch (error) {
      setMessage(getErrorMessage(error));
    } finally {
      busy.current = false;
      setAction(null);
    }
  }

  if (!pending) {
    return (
      <VerificationSection aria-label="이메일 인증 안내">
        <VerificationForm as="div">
          <VerificationNotice>
            회원가입 정보를 입력한 뒤 인증 메일을 보내 주세요. 새로고침한
            경우에는 회원가입 정보를 다시 입력해야 합니다.
          </VerificationNotice>
          <FormActions>
            <ButtonLink to="/signup">회원가입으로</ButtonLink>
          </FormActions>
        </VerificationForm>
      </VerificationSection>
    );
  }

  return (
    <VerificationSection aria-label="이메일 인증 코드 입력">
      <VerificationForm onSubmit={handleVerify} aria-busy={action !== null}>
        <VerificationNotice>
          {pending.draft.data.email}로 인증 코드를 보냈습니다.
        </VerificationNotice>
        <VerificationField
          id="verification-code"
          name="verificationCode"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          placeholder="6자리 코드"
          pattern="[0-9]{6}"
          maxLength={6}
          title="6자리 숫자 인증 코드를 입력해 주세요."
          value={code}
          readOnly={action !== null || Boolean(pending.emailVerifiedToken)}
          onChange={(event) => {
            setCode(event.target.value.replace(/[^0-9]/g, "").slice(0, 6));
            setMessage("");
          }}
          required={!pending.emailVerifiedToken}
          label="인증 코드"
          help={
            pending.emailVerifiedToken
              ? "이메일 인증이 완료되었습니다. 회원가입을 다시 시도할 수 있습니다."
              : remaining > 0
                ? `남은 시간 ${minutes}:${seconds}`
                : "인증 시간이 만료되었습니다. 코드를 재전송해 주세요."
          }
          helpId="verification-time"
        />
        <FormActions>
          <ButtonLink
            variant="secondary"
            to={
              pending.draft.accountType === "teacher"
                ? "/signup/teacher"
                : "/signup"
            }
          >
            입력 정보 수정
          </ButtonLink>
          <Button
            variant="secondary"
            type="button"
            onClick={handleResend}
            disabled={action !== null}
          >
            {action === "resend" ? "전송 중…" : "코드 재전송"}
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={
              action !== null ||
              (!pending.emailVerifiedToken && remaining === 0)
            }
          >
            {action === "verify"
              ? "처리 중…"
              : pending.emailVerifiedToken
                ? "회원가입 다시 시도"
                : "인증 완료"}
          </Button>
        </FormActions>
        {message && <VerificationFeedback message={message} />}
      </VerificationForm>
    </VerificationSection>
  );
}
