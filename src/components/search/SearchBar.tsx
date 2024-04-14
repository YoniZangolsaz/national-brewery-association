import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SelectList from "../SelectList";
import { searchOptions } from "../../config/config";
import { useState } from "react";
import MyDialog from "../Dialog";
import { SearchOption } from "../../types/searchOptions.type";
import searchStore from "../../stroe/search.store";
import snackStore from "../../stroe/snack.store";
import { styles } from "./style/searchBarSyle";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectType, setSelectType] = useState<SearchOption | undefined>();
  const [open, setOpen] = useState<boolean>(false);

  const handleSearchClick = () => {
    if (!searchValue || !selectType) {
      snackStore.setSnack({
        message: "please fill all fields",
        hideTime: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    } else {
      searchStore.setSearch(searchValue, selectType!.value);
    }
  };

  return (
    <>
      <Box sx={styles.mainBox}>
        <Stack spacing={2} direction="row" sx={styles.stack}>
          <TextField
            variant="outlined"
            multiline
            label="search value"
            value={searchValue}
            onChange={(e) => {
              snackStore.clear();
              setSearchValue(e.target.value);
            }}
          />
          <SelectList
            inputLabel="search filter"
            array={searchOptions}
            onChange={(searchOpt: SearchOption) => {
              setSelectType(searchOpt);
              setOpen(true);
            }}
            value={selectType}
          />
          <Button
            variant="contained"
            color="primary"
            sx={styles.button}
            onClick={() => handleSearchClick()}
          >
            search
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={styles.button}
            onClick={() => {
              setSearchValue("");
              setSelectType(undefined);
              searchStore.clear();
            }}
          >
            clear
          </Button>
        </Stack>
      </Box>
      {open && selectType?.instructions && (
        <MyDialog open={open} onClose={() => setOpen(false)}>
          <Typography sx={styles.mainTypography}>
            Instructions for searching
          </Typography>
          <Typography sx={styles}>{selectType?.instructions}</Typography>
        </MyDialog>
      )}
    </>
  );
};

export default SearchBar;
