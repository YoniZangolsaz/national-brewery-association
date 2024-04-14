import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import breweryLogo from "../images/brewery-logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { pages } from "../config/config";
import { styles } from "./style/navBar";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Box sx={styles.mainBox}>
      <AppBar position="static">
        <Toolbar>
          <img src={breweryLogo} alt="brewry logo" style={styles.logoImg} />
          <Typography sx={styles.textLogo} variant="h6">
            breweries
          </Typography>
          <Box sx={styles.navLinks}>
            {pages.map((page) => (
              <Button
                key={page.path}
                sx={{
                  color: pathname === page.path ? "black" : "white",
                  backgroundColor:
                    pathname === page.path ? "white" : "transparent",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => {
                  navigate(page.path);
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
