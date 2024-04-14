import { observer } from "mobx-react";
import { Button } from "@mui/material";
import breweryStore from "../stroe/brewery.store";

const AddToFavorite = ({ brewery }: { brewery: BreweryType }) => {
  const isFavorite = breweryStore.isFavorite(brewery.id);
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        breweryStore.addOrRemoveFavorite(brewery);
      }}
      variant="contained"
      color={isFavorite ? "primary" : "error"}
    >
      {isFavorite ? "👍🏻" : "👎🏻"}
    </Button>
  );
};

export default observer(AddToFavorite);
