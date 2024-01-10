import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Bmi from "./components/Bmi/Bmi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bmi" element={<Bmi />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
