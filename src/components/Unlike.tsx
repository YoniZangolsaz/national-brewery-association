import { Box, Button } from "@mui/material";
import breweryStore from "../stroe/brewery.store";
import snackStore from "../stroe/snack.store";

const Unlike = () => {
  const snackDiv = (
    <Box>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          snackStore.clear();
        }}
      >
        cancel
      </Button>
      <Button
        color="primary"
        size="small"
        onClick={() => {
          snackStore.clear();
          breweryStore.unlikeAll();
        }}
      >
        OK
      </Button>
    </Box>
  );

  return (
    <>
      <Button
        onClick={() => {
          snackStore.setSnack({
            message: "Are you sure?",
            action: snackDiv,
            hideTime: 3000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
        }}
        variant="contained"
        color="error"
      >
        unlike all
      </Button>
    </>
  );
};

export default Unlike;
