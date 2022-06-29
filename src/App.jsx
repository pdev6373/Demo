import "./App.css";
import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { MainPage } from "./components/MainPage";

function App() {
  const [hasSignedUp, setHasSignedUp] = useState(
    JSON.parse(localStorage.getItem("user") ? true : false)
  );
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  return (
    <div className="App">
      {!hasSignedUp && !hasLoggedIn && (
        <Signup setHasSignedUp={setHasSignedUp} />
      )}
      {hasSignedUp && !hasLoggedIn && <Login setHasLoggedIn={setHasLoggedIn} />}
      {hasLoggedIn && hasSignedUp && <MainPage />}
    </div>
  );
}

export default App;
