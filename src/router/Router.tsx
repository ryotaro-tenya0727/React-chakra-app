import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";

import { HeaderLayout } from "./../components/templates/HeaderLayout";
import { Login } from "./../components/pages/Login";
import { Home } from "./../components/pages/Home";
import { Setting } from "./../components/pages/Setting";
import { UserManagement } from "./../components/pages/UserManagement";
import { Page404 } from "./../components/pages/Page404";
import { LoginUserProvider } from "./../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="home">
            <Route
              index
              element={
                <HeaderLayout>
                  <Home />
                </HeaderLayout>
              }
            />
            <Route path="user_management">
              <Route
                index
                element={
                  <HeaderLayout>
                    <UserManagement />
                  </HeaderLayout>
                }
              />
            </Route>
            <Route path="setting">
              <Route
                index
                element={
                  <HeaderLayout>
                    <Setting />{" "}
                  </HeaderLayout>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <HeaderLayout>
                  <Page404 />
                </HeaderLayout>
              }
            />
          </Route>
        </Route>
      </Routes>
    </LoginUserProvider>
  );
});
