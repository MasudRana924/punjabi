import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { appRoutes } from "./routes/routes";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
          <Routes>
            {appRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))}
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;