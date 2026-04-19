import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// import './App.css'
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "./ui/AppLayout";
import {
  Submissions,
  Dashboard,
  Diagnosis,
  ReportIssue,
  Settings,
  User,
  Request,
  Login,
  PageNotFound,
  PreviewReportedIssues,
  RegisteredUsers,
  OperationalStaff,
  AddCommonUserProfile,
  AddOperationalStaff,
  ReviewRequestedHelps,
  DetailRequestedHelp,
  UpdateUserPassword,
} from "./pages/index.js";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime:60 * 1000,
      staleTime: 0,
    },
  },
});

const toastOptions = {
  success: {
    duration: 3000,
  },
  error: {
    duration: 5000,
  },
  style: {
    fontSize: "16px",
    maxWidth: "500px",
    padding: "16px 24px",
    backgroundColor: "var(--color-grey-0)",
    color: "var(--color-grey-700)",
  },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="submissions" element={<Submissions />} />
            <Route path="diagnosis" element={<Diagnosis />} />
            <Route path="report-issue" element={<ReportIssue />} />
            <Route path="settings" element={<Settings />} />
            <Route path="user" element={<User />} />
            <Route path="user/update-password/:userProfileId" element={<UpdateUserPassword />} />
            <Route path="request-helper" element={<Request />} />
            <Route
              path="preview-reported-issues"
              element={<PreviewReportedIssues />}
            />
            <Route
              path="registered-user-profiles"
              element={<RegisteredUsers />}
            />
            <Route
              path="operational-staff-user-profiles"
              element={<OperationalStaff />}
            />
            <Route
              path="add-common-user-profile"
              element={<AddCommonUserProfile />}
            />
            <Route
              path="add-operational-staff-user-profile"
              element={<AddOperationalStaff />}
            />
            <Route
              path="review-requested-helps"
              element={<ReviewRequestedHelps />}
            />
            <Route
              path="/requested-help/information/:requestedHelpId"
              element={<DetailRequestedHelp />}
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={toastOptions}
      />
    </QueryClientProvider>
  );
}

export default App;
