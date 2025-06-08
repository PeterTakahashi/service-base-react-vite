import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { SigninPage } from "@/pages/SigninPage";
import { SignupPage } from "@/pages/SIgnupPage";
import { ForgotPasswordPage } from "@/pages/ForgotPasswordPage";
import { SentResetPasswordMailPage } from "@/pages/SentResetPasswordMailPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
import { NotVerifiedPage } from "@/pages/NotVerifiedPage";
import { VerifyTokenPage } from "@/pages/VerifyTokenPage";
import { EditUserPage } from "@/pages/EditUserPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProtectedRoute } from "@/components/routes/ProtectedRoute";
import { PublicOnlyRoute } from "@/components/routes/PublicOnlyRoute";
import { ToastMessageHandler } from "@/components/common/ToastMessageHandler";
import { AddFundsPage } from "@/pages/AddFundsPage";
import { WalletPage } from "@/pages/WalletPage";
import { UserProfilePage } from "@/pages/UserProfilePage";
import { WalletTransactionsPage } from "@/pages/WalletTransactionsPage";
import { UserApiKeysPage } from "@/pages/UserApiKeysPage";
import { UserApiKeysNewPage } from "@/pages/UserApiKeysNewPage";

const routes = [
  { path: "/", element: <HomePage />, isPrivate: true },
  { path: "/signin", element: <SigninPage />, isPrivate: false },
  { path: "/signup", element: <SignupPage />, isPrivate: false },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
    isPrivate: false,
  },
  {
    path: "/sent-reset-password-mail",
    element: <SentResetPasswordMailPage />,
    isPrivate: false,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPasswordPage />,
    isPrivate: false,
  },
  { path: "/not-verified", element: <NotVerifiedPage />, isPrivate: true },
  {
    path: "/verify-token/:token",
    element: <VerifyTokenPage />,
    isPrivate: true,
  },
  {
    path: "/me/edit",
    element: <EditUserPage />,
    isPrivate: true,
  },
  {
    path: "/add-funds",
    element: <AddFundsPage />,
    isPrivate: true,
  },
  {
    path: "/wallet",
    element: <WalletPage />,
    isPrivate: true,
  },
  {
    path: "/me",
    element: <UserProfilePage />,
    isPrivate: true,
  },
  {
    path: "/wallet-transactions",
    element: <WalletTransactionsPage />,
    isPrivate: true,
  },
  {
    path: "/user-api-keys",
    element: <UserApiKeysPage />,
    isPrivate: true,
  },
  {
    path: "/user-api-keys/new",
    element: <UserApiKeysNewPage />,
    isPrivate: true,
  },
];

function App() {
  return (
    <>
      <ToastMessageHandler />
      <Routes>
        {routes.map((route) => {
          // isPrivate is a boolean that indicates if the route is private or not
          const element = route.isPrivate ? (
            <ProtectedRoute>{route.element}</ProtectedRoute>
          ) : (
            <PublicOnlyRoute>{route.element}</PublicOnlyRoute>
          );
          return <Route key={route.path} path={route.path} element={element} />;
        })}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
