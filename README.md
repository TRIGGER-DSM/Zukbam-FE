# Zubam / Algo

Figma 디자인을 구현한 React + TypeScript + Vite 프로젝트입니다.

## 실행

```sh
pnpm dev
pnpm build
pnpm lint
```

## 폴더 구성

```text
src/
  App.tsx                  # 페이지 라우트 구성
  main.tsx                 # React 및 BrowserRouter 진입점
  pages/
    auth/                  # 로그인, 회원가입, 인증, 비밀번호 재설정
    home/                  # 메인 페이지
    problems/              # 문제 목록·상세, 제출, 기록·풀이 상세
    social/                # 성장, 계정 관리
  components/
    layout/                # 헤더, 푸터, 하위 메뉴, 공통 페이지 제목
    ui/                    # 버튼, 입력 필드, 상태 안내, 통계, 코드, 페이지 이동
    home/                  # 추천, 풀이 활동, 랭크, 공지 섹션
    problems/              # 최근 문제 활동
    account/               # 기본 정보 수정, 로그아웃 섹션
  routes/                  # URL 파라미터를 페이지 props로 변환
  config/                  # 메뉴, 페이지 제목, 활성 메뉴 설정
  data/                    # Figma 샘플 데이터
  styles/                  # 공통 레이아웃·UI 스타일
```

페이지별 Emotion 스타일은 해당 `pages` 폴더의 `*.styles.ts`에 함께 있습니다. 화면에서 여러 번 쓰는 UI는 `components/ui`, 모든 페이지의 틀은 `components/layout`에 추가합니다. 특정 기능에만 쓰는 섹션은 `components/home`처럼 기능별 폴더에 둡니다.

## 스타일

- `styles/GlobalStyles.tsx`: Emotion `Global`로 전역 초기화와 기본 글꼴을 적용합니다.
- `styles/theme.ts`: 공통 색상, 컨테이너 너비, 반응형 분기점입니다.
- `styles/shared.styles.ts`: 공통 레이아웃·폼·버튼 스타일입니다.
- `pages/**/페이지.styles.ts`: Emotion `css`로 정의한 페이지 스타일입니다.
- `styles/classes.ts`: 기존 클래스 조합을 해당 Emotion 스타일로 연결하고 결과를 캐시합니다. 클래스 이름은 중첩 선택자와 화면 검증을 위한 식별자로 유지합니다.

스타일은 `css={getStyles('클래스 이름')}`으로 컴포넌트에 적용됩니다. 새 스타일 모듈을 만들면 `styles/classes.ts`에 등록하거나 해당 모듈의 `css` 값을 직접 사용합니다. `.css` 파일과 전역 클래스 스타일 주입은 사용하지 않습니다. 공통 토큰은 `theme`에서 가져오며, 기본 폰트 스타일시트는 `index.html`에서 불러옵니다.

## 공통 컴포넌트

- `Button` / `ButtonLink`: 실제 버튼과 페이지 이동 링크를 구분하고 색상 변형을 공유합니다.
- `InputField`: 라벨, 입력 속성, 도움말 연결을 유지합니다. `className`은 필드 컨테이너에 적용됩니다.
- `PageIntro`: 어두운 배경의 큰 소개 영역입니다.
- `PageHeading`: 문제·기록 페이지의 제목과 우측 액션 영역입니다.
- `SubNavigation`: 설정된 메뉴와 활성 경로를 표시합니다.
- `FormMessage`, `StatsGrid`, `CodeBlock`, `Pagination`, `AssetIcon`: 반복되는 상태·통계·코드·페이지 이동·아이콘 UI입니다.

## 데이터와 동작

화면은 샘플 데이터로 표시됩니다. 검색, 필터, 입력 검증, 언어·색상 선택, 페이지 이동은 프런트엔드에서 동작합니다. 인증, 개인정보 저장, 실제 로그아웃, 제출·채점은 서버 API가 연결되지 않았습니다. `Pagination`은 샘플의 첫 페이지를 표시하며, 추가 페이지는 비활성화되어 있습니다.

기존 동작과 같이 아직 구현하지 않은 URL은 회원가입 화면으로 표시됩니다. 새 페이지를 추가할 때는 `App.tsx`의 라우트와 `config/navigation.ts`의 제목·메뉴 설정을 함께 추가합니다.
"# Zukbam-FE" 
