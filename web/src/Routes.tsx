// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import BaseLayout from './layouts/BaseLayout/BaseLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BaseLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact-us" page={ContactUsPage} name="contactUs" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login">
        <Set wrap={BaseLayout}>
          <Route path="/video-builder-home" page={VideoBuilderHomePage} name="videoBuilderHome" />
          <Route path="/video-builder-app/audiogram-video-template" page={AudiogramVideoTemplatePage} name="audiogramVideoTemplate" />
          <Route path="/video-builder-app/wikipedia-video-template" page={WikipediaVideoTemplatePage} name="wikipediaVideoTemplate" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
