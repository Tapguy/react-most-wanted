/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'
import { Route } from 'react-router-dom'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home/Home'))
const DialogDemo = lazy(() => import('../pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../pages/FilterDemo'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <PublicRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <Route path="/about" exact component={About} />,
  <PrivateRoute path="/home" exact component={Home} />,
  <PrivateRoute path="/dialog_demo" exact component={DialogDemo} />,
  <PrivateRoute path="/toast_demo" exact component={ToastDemo} />,
  <PrivateRoute path="/filter_demo" exact component={FilterDemo} />,
]

export default routes
