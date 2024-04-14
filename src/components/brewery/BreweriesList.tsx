import { Box, Typography } from "@mui/material";
import ShortBrewery from "./ShortBrewery";
import { styles } from "./style/breweriesListStyle";

type BreweryTypeProps = {
  breweries: BreweryType[];
  showRating: boolean;
};

const BreweriesList = ({ breweries, showRating }: BreweryTypeProps) => {
  return (
    <Box sx={styles.mainBox}>
      {breweries.length === 0 && (
        <Typography variant="h4">No breweries found</Typography>
      )}
      {breweries.map((brewery: BreweryType) => (
        <ShortBrewery
          brewery={brewery}
          key={brewery.id}
          showRating={showRating}
        />
      ))}
    </Box>
  );
};

export default BreweriesList;
