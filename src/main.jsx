import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// components call
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
    </React.StrictMode>
);

{/* <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}></Route>
    </Routes>
</BrowserRouter>; */}
