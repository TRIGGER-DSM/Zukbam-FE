import { Route, Routes } from 'react-router'
import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import EmailVerification from './pages/auth/EmailVerification'
import Home from './pages/home/Home'
import Problems from './pages/problems/Problems'
import History from './pages/problems/History'
import Growth from './pages/social/Growth'
import Account from './pages/social/Account'
import Ranking from './pages/ranking/Ranking'
import { ProblemDetailRoute, SubmissionRoute, SolutionDetailRoute } from './routes/ProblemRoutes'
import AdminLayout, { AdminIndex } from './components/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import StudentAchievement from './pages/admin/StudentAchievement'
import ProblemManagement from './pages/admin/ProblemManagement'
import ProblemEditor from './pages/admin/ProblemEditor'
import GroupManagement from './pages/admin/GroupManagement'

export default function App() {
  return <Routes>
    <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminIndex />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="statistics" element={<Dashboard statisticsOnly />} />
        <Route path="students" element={<StudentAchievement />} />
        <Route path="students/:studentId" element={<StudentAchievement />} />
        <Route path="problems" element={<ProblemManagement />} />
        <Route path="problems/new" element={<ProblemEditor />} />
        <Route path="problems/:problemId/edit" element={<ProblemEditor />} />
        <Route path="groups" element={<GroupManagement />} />
        <Route path="groups/new" element={<GroupManagement />} />
        <Route path="*" element={<AdminIndex />} />
      </Route>
      <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="ranking" element={<Ranking />} />
      <Route path="problems" element={<Problems />} />
      <Route path="problems/history" element={<History />} />
      <Route path="problems/history/:recordId" element={<SolutionDetailRoute />} />
      <Route path="problems/:problemId" element={<ProblemDetailRoute />} />
      <Route path="problems/:problemId/submit" element={<SubmissionRoute />} />
      <Route path="social/growth" element={<Growth />} />
      <Route path="growth" element={<Growth />} />
      <Route path="social/account" element={<Account />} />
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<Signup key="student" />} />
        <Route path="signup/teacher" element={<Signup key="teacher" accountType="teacher" />} />
        <Route path="login" element={<Login />} />
        <Route path="verify-email" element={<EmailVerification />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Signup />} />
      </Route>
    </Route>
  </Routes>
}
