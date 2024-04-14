import { Box, Typography } from "@mui/material";
import { styles } from "./style/fullBreweryStyle";

const FullBrewery = ({ brewery }: { brewery: BreweryType }) => {
  return (
    <Box sx={styles.mainBox}>
      <Typography>name: {brewery.name}</Typography>
      <Typography>brewery_type: {brewery.brewery_type}</Typography>
      <Typography>city: {brewery.city}</Typography>
      <Typography>state: {brewery.state}</Typography>
      <Typography>website_url: {brewery.website_url}</Typography>
    </Box>
  );
};

export default FullBrewery;
