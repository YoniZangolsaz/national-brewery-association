import { Snackbar } from "@mui/material";
import snackStore from "../stroe/snack.store";
import { observer } from "mobx-react";

const Snack = () => {
  return (
    <>
      {(snackStore.action || snackStore.message) && (
        <Snackbar
          open={!!snackStore.action || !!snackStore.message}
          anchorOrigin={snackStore.anchorOrigin}
          autoHideDuration={snackStore.hideTime}
          onClose={() => snackStore.clear()}
          action={snackStore.action}
          message={snackStore.message}
        />
      )}
    </>
  );
};

export default observer(Snack);
