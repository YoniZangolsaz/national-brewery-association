import { Button } from "@mui/material";
import searchStore from "../../stroe/search.store";

const PaginationButton = ({ number }: { number: number }) => {
  return (
    <Button
      sx={{
        fontSize: "1.2rem",
        backgroundColor: searchStore.page === number ? "gray" : "",
        color: searchStore.page === number ? "white" : "black",
        borderRadius: 20,
        "&:hover": {
          opacity: 0.7,
          backgroundColor: searchStore.page === number ? "black" : "gray",
        },
      }}
      onClick={() => {
        searchStore.setPage(number);
      }}
    >
      {number}
    </Button>
  );
};

export default PaginationButton;
