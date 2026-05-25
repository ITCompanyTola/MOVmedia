import { HashRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
