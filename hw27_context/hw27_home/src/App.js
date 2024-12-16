import {Routes, Route, NavLink, Router, Outlet} from "react-router-dom";
import { ThemeProvider} from "./context/ThemeContext";
import About from "./components/components/About";
import NotFound from "./components/components/NotFound";
import Contacts from "./components/components/Contacts"
import TodoPage from "./pages/TodoPage/TodoPage";
import Layout from "./components/components/Layout/Layout";
import Posts from "./pages/Posts/index";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {

  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<TodoPage />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/posts/:id" element={<SinglePost />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
