import { Route, Routes, useLocation, Navigate, UNSAFE_DataRouterStateContext } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { ScrollToTop, Navbar, Footer } from "./components";

const Loader = lazy(() => import(/* webpackChunkName: "loader" */"./components/atoms/Loader"));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */"./components/molecules/NotFound"));
const ProjectDetails = lazy(() => import(/* webpackChunkName: "project-details" */"./components/molecules/ProjectDetails"));
const BlogDetail = lazy(() => import(/* webpackChunkName: "blog-detail" */"./components/molecules/BlogDetail"));
const BlogIndex = lazy(() => import(/* webpackChunkName: "blog-index" */"./components/molecules/BlogIndex"));
const MernBlogRepair = lazy(() => import(/* webpackChunkName: "mern-blog" */"./components/molecules/MernBlogRepair"));
const EmployeeSalaryManagementRepair = lazy(() => import(/* webpackChunkName: "employee-salary" */"./components/molecules/EmployeeSalaryManagementRepair"));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */"./pages/Blog"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */"./pages/Contact"));
const About = lazy(() => import(/* webpackChunkName: "about" */"./pages/About"));
const Home = lazy(() => import(/* webpackChunkName: "home" */"./pages/Home"));
const Project = lazy(() => import(/* webpackChunkName: "project" */"./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagementRepair />} />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
