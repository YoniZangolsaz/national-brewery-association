export const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 2,
    border: "1px solid black",
    borderRadius: 2,
    padding: 2,
    "&:hover": {
      cursor: "pointer",
    },
  },
  secBox: {
    display: "flex",
  },
  favoriteBox: {
    display: "flex",
    width: "30%",
  },
  propTypography: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    mr: 1,
  },
  textResult: {
    fontSize: "1.2rem",
  },
};
