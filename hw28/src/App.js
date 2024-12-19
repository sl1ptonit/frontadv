import {Routes, Route, NavLink, Router, Outlet} from "react-router-dom";
import { ThemeProvider} from "./context/ThemeContext";
import About from "./components/components/About";
import Home from "./components/components/Home";
import NotFound from "./components/components/NotFound";
import Profile from "./components/components/Profile"
import TodoPage from "./pages/TodoPage/TodoPage";
import Layout from "./components/components/Layout/Layout";
import Posts from "./pages/Posts/index";
import SinglePost from "./pages/SinglePost/SinglePost";
import FormPage from "./pages/FormPage";
import FormikForm from "./pages/FormikForm";

function App() {

  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path="/todos" element={<TodoPage />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/posts/:id" element={<SinglePost />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/simpleform" element={<FormPage />} />
                  <Route path="/formik" element={<FormikForm />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
