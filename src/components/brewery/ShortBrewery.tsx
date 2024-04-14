import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import AddToFavorite from "../AddToFavorite";
import MyDialog from "../Dialog";
import FullBrewery from "./FullBrewery";
import BasicRating from "../Rating";
import breweryStore from "../../stroe/brewery.store";
import { styles } from "./style/shortBreweryStyle";

type shortBreweryProps = {
  brewery: BreweryType;
  showRating: boolean;
};

const ShortBrewery = ({ brewery, showRating }: shortBreweryProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Paper elevation={5} onClick={() => setOpen(true)} sx={styles.mainBox}>
        <Box sx={styles.secBox}>
          <Typography sx={styles.typography}>name:</Typography>
          <Typography>{brewery.name}</Typography>
        </Box>
        <Box sx={styles.secBox}>
          <Typography sx={styles.typography}>type:</Typography>
          <Typography>{brewery.brewery_type}</Typography>
        </Box>
        <Box sx={styles.favoriteBox}>
          <AddToFavorite brewery={brewery} />
        </Box>
        {showRating && (
          <BasicRating
            rating={brewery.rating}
            onChange={(value) => {
              breweryStore.rateBrewery(brewery, value || 0);
            }}
          />
        )}
      </Paper>
      {open && (
        <MyDialog
          open={open}
          onClose={() => {
            setOpen((v) => !v);
          }}
        >
          <FullBrewery brewery={brewery} />
        </MyDialog>
      )}
    </>
  );
};

export default ShortBrewery;
