import { css, type SerializedStyles } from '@emotion/react'
import { styles as homeStyles } from '../pages/home/Home.styles'
import { styles as historyStyles } from '../pages/problems/History.styles'
import { styles as problemDetailStyles } from '../pages/problems/ProblemDetail.styles'
import { styles as problemListStyles } from '../pages/problems/Problems.styles'
import { styles as solutionDetailStyles } from '../pages/problems/SolutionDetail.styles'
import { styles as submissionStyles } from '../pages/problems/Submission.styles'
import { styles as accountStyles } from '../pages/social/Account.styles'
import { styles as growthStyles } from '../pages/social/Growth.styles'
import { styles as sharedStyles } from './shared.styles'
import { styles as rankingStyles } from '../pages/ranking/Ranking.styles'

// Each module owns its rules. This adapter composes variant and layout classes
// without rewriting CSS selector hooks used by nested styles and UI checks.
const modules: Record<string, SerializedStyles>[] = [
  homeStyles, historyStyles, problemDetailStyles, problemListStyles,
  solutionDetailStyles, submissionStyles, accountStyles, growthStyles, sharedStyles, rankingStyles,
]
const cache = new Map<string, SerializedStyles>()
export function getStyles(className?: string): SerializedStyles | undefined {
  if (!className) return undefined
  const names = className.split(/\s+/).filter(name => modules.some(module => module[name]))
  if (!names.length) return undefined
  const key = names.join(' ')
  const cached = cache.get(key)
  if (cached) return cached
  const composed = css(modules.flatMap(module => names.map(name => module[name]).filter(Boolean)))
  cache.set(key, composed)
  return composed
}
