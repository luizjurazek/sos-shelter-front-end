import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import SheltersPage from "../pages/SheltersPages/SheltersPage/SheltersPage";
import ShelterPage from "../pages/SheltersPages/ShelterPage/ShelterPage";
import CreateShelter from "../pages/SheltersPages/CreateShelter/CreateShelter"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shelters" element={<SheltersPage />} />
        <Route path="/shelter/:id" element={<ShelterPage />} />
        <Route path="/create-shelter" element={<CreateShelter />} />
      </Routes>
    </BrowserRouter>
  );
}
