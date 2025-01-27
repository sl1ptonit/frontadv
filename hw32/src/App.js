import {Routes, Route, NavLink, Router, Outlet, Navigate} from "react-router-dom";
import { ThemeProvider} from "./context/ThemeContext";
import Resume from "./pages/Resume/Resume";
import NotFound from "./components/components/NotFound";
import Profile from "./components/components/Profile"
import TodoPage from "./pages/TodoPage/TodoPage";
import Posts from "./pages/Posts/index";
import SinglePost from "./pages/SinglePost/SinglePost";
import FormPage from "./pages/FormPage";
import FormikForm from "./pages/FormikForm";
import Counter from "./pages/Counter";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Layout from "./components/components/Layout/Layout";

function App() {

  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Resume />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/todos" element={<TodoPage />} />
                  <Route path="/user-posts" element={<Navigate to="/posts" />} />
                  <Route path="/posts" element={
                      <PrivateRoute>
                        <Posts />
                      </PrivateRoute>}
                  />
                  <Route path="/posts/:id" element={<SinglePost />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/simpleform" element={<FormPage />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/formik" element={<FormikForm />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
