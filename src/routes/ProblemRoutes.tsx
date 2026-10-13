import { useParams } from 'react-router'
import ProblemDetail from '../pages/problems/ProblemDetail'
import Submission from '../pages/problems/Submission'
import SolutionDetail from '../pages/problems/SolutionDetail'

export function ProblemDetailRoute() {
  const { problemId } = useParams()
  return <ProblemDetail key={problemId} problemId={Number(problemId)} />
}
export function SubmissionRoute() {
  const { problemId } = useParams()
  return <Submission key={problemId} problemId={Number(problemId)} />
}
export function SolutionDetailRoute() {
  const { recordId } = useParams()
  return <SolutionDetail recordId={Number(recordId)} />
}
