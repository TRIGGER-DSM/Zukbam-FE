import { getStyles } from '../../styles/classes'
import HomeHero from '../../components/home/HomeHero'
import ActivitySection from '../../components/home/ActivitySection'
import RankSection from '../../components/home/RankSection'
import NoticeSection from '../../components/home/NoticeSection'

export default function Home() {
  return <><HomeHero /><ActivitySection /><section className="home-overview" css={getStyles("home-overview")}><div className="wide-container home-overview-inner" css={getStyles("wide-container home-overview-inner")}><RankSection /><NoticeSection /></div></section></>
}
