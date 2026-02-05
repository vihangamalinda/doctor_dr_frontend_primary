import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css'
import GlobalStyles from './styles/GlobalStyle';
import AppLayout from './ui/AppLayout';
import Submissions from './pages/Submissions';
import DashBoard from './pages/DashBoard';
import Diagnosis from './pages/Diagnosis';
import ReportIssue from './pages/ReportIssue';
import Settings from './pages/Settings';
import User from './pages/User';
import Request from './pages/Request';
import Login from "./pages/Login";
import PageNotFound from './pages/PageNotFound';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="submissions" element={<Submissions />} />
            <Route path="diagnosis" element={<Diagnosis />} />
            <Route path="report-issue" element={<ReportIssue />} />
            <Route path="settings" element={<Settings />} />
            <Route path="user" element={<User />} />
            <Route path="request-helper" element={<Request />} />
          </Route>
             <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>

     

      </BrowserRouter>
    </>
  );
}

export default App
