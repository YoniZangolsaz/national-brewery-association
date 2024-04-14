import { useEffect, useState } from "react";
import BreweriesList from "../components/brewery/BreweriesList";
import { Box, Typography } from "@mui/material";
import Pagination from "../components/pagination/Pagination";
import { observer } from "mobx-react";
import searchStore from "../stroe/search.store";
import SearchBar from "../components/search/SearchBar";
import { getByPage, searchByFilter } from "../api/brewery.api";
import Loading from "../components/Loading";
import snackStore from "../stroe/snack.store";
import { styles } from "./style/allBreweriesStyle";

const AllBreweries = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDatas = async () => {
      try {
        let data;
        if (searchStore.searchValue && searchStore.searchType) {
          data = await searchByFilter(
            searchStore.searchType,
            searchStore.searchValue,
            searchStore.page
          );
        } else {
          data = await getByPage(searchStore.page);
        }
        if (data) setBreweries(data);
        else throw new Error("Fail to get the data");
      } catch (error) {
        snackStore.setSnack({
          message: "Fail to get the data",
          hideTime: 3000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
      }

      setLoading(false);
    };
    getDatas();
  }, [searchStore.page, searchStore.searchValue, searchStore.searchType]);

  return (
    <Box sx={styles.mainBox}>
      {loading ? (
        <Box sx={styles.loadBox}>
          <Loading />
        </Box>
      ) : (
        <>
          <Box sx={styles.searchBox}>
            <SearchBar />
          </Box>
          {!breweries.length ? (
            <Box sx={styles.textBox}>
              <Typography variant="h2">No breweries found</Typography>
            </Box>
          ) : (
            <>
              <Box sx={styles.breweryList}>
                <BreweriesList breweries={breweries} showRating={false} />
              </Box>
              <Pagination />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default observer(AllBreweries);
