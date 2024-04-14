import { Box } from "@mui/material";
import PaginationButton from "./PaginationButton";
import { styles } from "./style/paginationStyle";

const Pagination = () => {
  return (
    <Box sx={styles.mainBox}>
      {[...Array(10)].map((_, index) => (
        <PaginationButton number={index + 1} key={index} />
      ))}
    </Box>
  );
};

export default Pagination;
