export const styles = {
  mainBox: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: 2,
    padding: 2,
    overflow: "auto",
    height: "-webkit-fill-available",
    margin: 2,
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
};
