import ActivityHeatmap, {
  ActivityLegend,
} from "../../components/activity/ActivityHeatmap";
import { useActivity, useProfile } from "../../api/queries";
import QueryStatus from "../../components/ui/QueryStatus";
import { ButtonLink } from "../../components/ui/Button";
import AssetIcon from "../../components/ui/AssetIcon";
import {
  Hero,
  HeroInner,
  HeroCopy,
  HeroEyebrow,
  HeroDescription,
  HeroActions,
  RankOverview,
  RankHeading,
  RankIcon,
  RankDetails,
  RankEmblem,
  RankLabel,
  RankProgressHeading,
  NextRankTarget,
  RankStats,
  RankPosition,
  RankLink,
  RankTier,
  RankTierName,
  ActivityPanel,
  ActivityHeader,
  ActivityHeading,
  ActivityIcon,
  ActivityYear,
  ActivityYearSelect,
  ActivitySummary,
  LongestStreak,
  RankContent,
} from "./Home.styles";

export default function Home() {
  const year = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Seoul' }).format(new Date()))
  const activity = useActivity('me', year)
  const profile = useProfile()
  const levels = activity.days.map(day => Math.min(day.count, 4))
  return (
    <>
      <Hero aria-labelledby="home-title">
        <HeroInner>
          <HeroCopy>
            <HeroEyebrow>
              <AssetIcon group="home" name="today" />
              오늘의 학습
            </HeroEyebrow>
            <h1 id="home-title">
              오늘 한 문제,
              <br />
              기록은 자동으로.
            </h1>
            <HeroDescription>문제를 풀고 스트릭을 이어가세요.</HeroDescription>
            <HeroActions>
              <ButtonLink variant="primary" to="/problems">
                문제 목록
                <AssetIcon group="home" name="arrow" />
              </ButtonLink>
            </HeroActions>
          </HeroCopy>
        </HeroInner>
      </Hero>
      <ActivityPanel aria-labelledby="activity-title">
        <ActivityHeader>
          <ActivityHeading>
            <ActivityIcon>
              <AssetIcon group="home" name="activity" />
            </ActivityIcon>
            <div>
              <ActivityYear>{year}년 풀이활동</ActivityYear>
              <h2 id="activity-title">
                현재 <strong>{activity.streak.data?.currentStreak ?? '—'}일</strong> 스트릭
              </h2>
            </div>
          </ActivityHeading>
          <ActivityYearSelect aria-label="활동 연도" value={year} disabled>
            <option value={year}>{year}년</option>
          </ActivityYearSelect>
        </ActivityHeader>
        {!activity.loggedIn ? <p role="status">로그인 후 풀이 활동을 확인하세요.</p> : <QueryStatus pending={activity.grass.isPending || activity.streak.isPending} error={activity.grass.error ?? activity.streak.error} retry={() => { void activity.grass.refetch(); void activity.streak.refetch() }} />}
        <ActivityHeatmap
          levels={activity.grass.data ? levels : []}
          dates={activity.grass.data ? activity.days.map(day => day.date) : undefined}
          label={`${year}년 풀이활동`}
        />
        <ActivitySummary>
          <LongestStreak>
            <AssetIcon group="home" name="trend" />
            최장 {activity.streak.data?.maxStreak ?? '—'}일
          </LongestStreak>
          <ActivityLegend />
        </ActivitySummary>
      </ActivityPanel>
      <RankOverview aria-labelledby="rank-title">
        <RankContent>
          <RankHeading>
            <RankIcon>
              <AssetIcon group="home" name="rank" />
            </RankIcon>
            <h2 id="rank-title">내 랭크 현황</h2>
          </RankHeading>
          <RankDetails>
            <RankEmblem>
              <RankLabel>RANK</RankLabel>
              <RankTier>{profile.data?.rank ?? '—'}</RankTier>
            </RankEmblem>
            <div>
              <RankProgressHeading>
                <RankTierName>{profile.data?.rank ?? '—'}</RankTierName>
                <NextRankTarget>{profile.data ? `${profile.data.score}점` : '로그인 후 확인할 수 있습니다.'}</NextRankTarget>
              </RankProgressHeading>
              <RankStats><RankPosition>총 {profile.data?.solvedCount ?? '—'}문제 해결</RankPosition></RankStats>
              {activity.loggedIn && <QueryStatus pending={profile.isPending} error={profile.error} retry={() => { void profile.refetch() }} />}
              <RankLink to="/ranking">랭킹 보기</RankLink>
            </div>
          </RankDetails>
        </RankContent>
      </RankOverview>
    </>
  );
}
