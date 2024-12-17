import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layout/MainLayout";
import CountryPage from "./pages/CountryPage";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="countries">
              <Route path=":countryCode" element={<CountryPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
