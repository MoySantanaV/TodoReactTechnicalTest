import { useState } from "react";
import { AppManagement } from "./Components/AppManagement/AppManagement";
import { GlobalStyles } from "../globalStyles";
import { ThemeProvider } from "styled-components";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { darkTheme, lightTheme } from "./assets/theme";
import "./App.css";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyles />
        <AppManagement toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
