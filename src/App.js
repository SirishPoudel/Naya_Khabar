import React, { useEffect, useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Landing from "./components/Landing";
import MessageAlert from "./components/MessageAlert";

const App = () => {
  useEffect(() => {
    document.title = "Naya Khabar";
  });
  const pagesize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0,
  // };
  // setProgress = (progress) => {
  //   setState({
  //     progress: progress,
  //   });
  // };

  // states
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState({
    color: "",
    backgroundColor: "",
    mode: "light",
  });
  const [alert, setAlert] = useState(null);

  // functions
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const colorMode = (color) => {
    if (darkMode.mode === "light") {
      setDarkMode({ color: "white", backgroundColor: "#213363", mode: "dark" });
      manageAlert("Dark mode has been enabled!","info")
    } else if (darkMode.mode === "dark") {
      setDarkMode({ color: "black", backgroundColor: "white", mode: "light" });
      manageAlert("Dark mode has been disabled!","danger")
    }
  };

  const manageAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div
      style={{
        color: darkMode.color,
        backgroundColor: darkMode.backgroundColor,
      }}
    >
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar colorMode={colorMode} darkMode={darkMode} />
        <MessageAlert manageAlert={manageAlert} alert={alert} />
        <div className="mt-3 d-flex justify-content-end sticky-xxl-top">
          <button
            id="scrollToTopBtn"
            className="btn btn-primary rounded-circle"
            width="100"
            height="100"
            onClick={scrollToTop}
          >
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pagesize}
                category="general"
                darkMode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pagesize}
                category="business"
                darkMode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pagesize}
                category="sports"
                darkMode={darkMode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pagesize}
                category="entertainment"
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
