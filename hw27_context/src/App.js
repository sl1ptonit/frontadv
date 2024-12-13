import {createContext, useContext, useState} from "react";
import MyComponent from "./components/MyComponent.js";
//import TodoPage from "./pages/TodoPage/TodoPage";
import SmilePage from "./pages/SmilePage/SmilePage"
import TodoPage from "./pages/TodoPage/TodoPage";

export const ThemeContext = createContext(null);

function App() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <TodoPage />
      </ThemeContext.Provider>
  );
}

export default App;
