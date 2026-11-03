# Zubam / Algo

React + TypeScript + Vite + Emotion 프런트엔드입니다.

## 실행 및 검사

```sh
npm run dev
npm run build
npm run lint
npm run test:auth
```

## API 설정

`.env.example`을 `.env.local`로 복사해 서버 주소를 설정한 뒤 개발 서버를 재시작합니다. 현재 `.env`에도 다음 서버 주소가 설정되어 있습니다.

```dotenv
VITE_API_BASE_URL=https://cowtree28-server.duckdns.org
```

서버 주소는 공통 호스트까지만 설정합니다. 인증 API의 `/auth` 접두사는 코드에서 추가합니다. API 서버에서 프런트엔드 출처에 대한 CORS 허용이 필요합니다.

## 연동 범위

회원가입·이메일 인증·로그인, 사용자/관리자 문제 목록·상세, 관리자 문제 삭제, 내 프로필, 홈·성장 기록의 스트릭/잔디, 그룹 조회·생성·수정·삭제, 그룹 멤버의 프로필/스트릭/잔디를 연결했습니다.

사용자 요청에 따라 필요한 UI가 없는 API는 연결하지 않았습니다. 친구·그룹 초대·그룹장 위임·멤버 내보내기/탈퇴, 서버 명세와 폼이 맞지 않는 문제 등록/수정은 제외했습니다. 자세한 경로와 제외 사유는 [API 연동 현황](docs/api-integration.md)을 확인하세요.

## 인증과 데이터

가입 입력값과 인증 진행 정보는 메모리에만 유지합니다. 가입 전 새로고침하면 다시 입력해야 합니다. 인증 결과와 로그인 이메일은 현재 탭의 sessionStorage에 저장하며 로그아웃 시 삭제합니다.

보호된 API는 accessToken을 Authorization Bearer 헤더로 전달합니다. 로그아웃/계정 변경 시 조회 캐시를 지웁니다. 토큰 갱신·프로필 수정·서버 로그아웃 API는 Swagger에 없어 호출하지 않습니다.

문제 검색/난이도 필터는 현재 서버 페이지에 적용됩니다. 제공되지 않는 카테고리·정답률 등은 연결한 화면에서 표시하지 않습니다. 관리자 대시보드·랭킹·학습 기록 등 미연동 화면은 기존 샘플 데이터입니다.

## 주요 파일

- `src/api/client.ts`: 공통 JSON 요청, 시간 초과, HTTP/네트워크 오류
- `src/api/auth.ts`: 인증 API
- `src/api/service.ts`: 문제·프로필·스트릭·그룹 API
- `src/api/queries.ts`: 프로필 및 날짜 범위별 활동 조회
- `src/auth/`: 세션 및 회원가입 임시 정보
- `docs/openapi.json`: 제공된 Swagger 명세 스냅샷
- `tests/auth.test.mjs`: 서버를 변경하지 않는 인증·공통 API 계약 테스트
