import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
// import Auth from "../hoc/auth";
const LoginPage = lazy(() => import("./views/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./views/RegisterPage/RegisterPage"));
const Footer = lazy(() => import("./views/Footer/Footer"));
const PostPage = lazy(() => import("./views/PostPage/PostPage"));
const BlogPage = lazy(() => import("./views/BlogPage/BlogPage"));

const CreateBlogPage = lazy(() =>
  import("./views/BlogPage/Section.js/CreatePage")
);
function App() {
  return (
    <>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Auth(LandingPage, null)} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route exact path="/" component={BlogPage} />
            <Route path="/blog/create" component={CreateBlogPage} />
            <Route path="/blog/post/:postId" component={PostPage} />
          </Switch>
        </Router>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
