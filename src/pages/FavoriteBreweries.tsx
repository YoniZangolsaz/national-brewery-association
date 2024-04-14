import BreweriesList from "../components/brewery/BreweriesList";
import { Box, Button, Typography } from "@mui/material";
import breweryStore from "../stroe/brewery.store";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../config/config";
import Unlike from "../components/Unlike";

const FavoriteBreweries = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "90%" }}>
      {breweryStore.favoriteBreweries.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: 2,
              color: "red",
            }}
          >
            No favorite breweries
          </Typography>
          <Button
            onClick={() => {
              navigate(PAGES.allBreweries);
            }}
            variant="contained"
            color="info"
          >
            go to all breweries
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ overflow: "auto", maxHeight: "85%" }}>
            <BreweriesList
              breweries={breweryStore.favoriteBreweries}
              showRating={true}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              margin: 2,
            }}
          >
            <Unlike />
          </Box>
        </>
      )}
    </Box>
  );
};

export default observer(FavoriteBreweries);
