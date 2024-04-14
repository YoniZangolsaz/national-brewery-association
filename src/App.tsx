import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { PAGES } from "./config/config";
import AllBreweries from "./pages/AllBreweries";
import FavoriteBreweries from "./pages/FavoriteBreweries";
import Snack from "./components/SnackBar";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <NavBar />
      <Routes>
        <Route path={PAGES.allBreweries} element={<AllBreweries />} />
        <Route path={PAGES.favoriteBreweries} element={<FavoriteBreweries />} />
      </Routes>
      <Snack />
    </Box>
  );
}

export default App;
