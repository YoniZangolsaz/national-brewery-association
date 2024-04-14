import BreweriesList from "../components/brewery/BreweriesList";
import { Box, Button, Typography } from "@mui/material";
import breweryStore from "../stroe/brewery.store";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../config/config";
import Unlike from "../components/Unlike";
import { styles } from "./style/favoriteBreweriesStyle";

const FavoriteBreweries = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.mainBox}>
      {breweryStore.favoriteBreweries.length === 0 ? (
        <Box sx={styles.secBox}>
          <Typography sx={styles.propTypography}>
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
          <Box sx={styles.brweryResult}>
            <BreweriesList
              breweries={breweryStore.favoriteBreweries}
              showRating={true}
            />
          </Box>
          <Box sx={styles.unlikeBox}>
            <Unlike />
          </Box>
        </>
      )}
    </Box>
  );
};

export default observer(FavoriteBreweries);
