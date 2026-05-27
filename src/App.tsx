import { HashRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { MapPage } from "./pages/MapPage/MapPage";
import { Modal } from "./components/ui/Modal/Modal";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/map" element={<MapPage />} />
            </Routes>
            <Modal />
        </HashRouter>
    );
}

export default App;
