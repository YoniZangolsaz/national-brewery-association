import { SnackbarOrigin } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { ReactNode } from "react";

type MySnack = {
  action?: ReactNode;
  hideTime?: number;
  anchorOrigin?: SnackbarOrigin;
  message?: string;
};
class SnackStore {
  action: ReactNode | undefined;
  hideTime: number | undefined;
  anchorOrigin: SnackbarOrigin | undefined;
  message: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setSnack(snack: MySnack) {
    console.log(snack);

    this.hideTime = snack.hideTime;
    this.anchorOrigin = snack.anchorOrigin;
    this.message = snack.message;
    this.action = snack.action;
  }

  clear() {
    this.action = null;
    this.hideTime = undefined;
    this.anchorOrigin = undefined;
    this.message = undefined;
  }
}

const snackStore = new SnackStore();

export default snackStore;
