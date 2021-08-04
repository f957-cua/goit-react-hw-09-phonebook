import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import { useDispatch } from "react-redux";
import PrivatRoute from "./components/PrivatRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactView = lazy(() => import("./views/ContactView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivatRoute path="/contacts" redirectTo="/login">
            <ContactView />
          </PrivatRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
