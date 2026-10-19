import { useState } from "react";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";

function App() {
    const [showSignUp, setShowSignUp] = useState(false);

    return showSignUp ? (
        <SignUp onLoginClick={() => setShowSignUp(false)} />
    ) : (
        <Login onSignupClick={() => setShowSignUp(true)} />
    );
}

export default App;