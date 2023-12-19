import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import './index.css'
const pages = ["Menu", "Rewards", "GiftCards"];
const settings = ["Find Store", "Login", "Join Now"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        height: "90px",
        marginBottom: "15px",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {/* logo */}
          <Box sx={{ width: "100px" }}>
            <img style={{ width: "100%" }} src="./Starbucks-Logo.png" alt="" />
          </Box>

          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Login - register */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="/find-store" style={{ color: "black" }}>
              <FmdGoodIcon />
              Find a Store
            </Button>
            <Button
              href="/login"
              variant="outlined"
              sx={{ borderRadius: "20px", color: "black", mx: "20px" }}
              color="inherit"
            >
              sign in
            </Button>
            <Button
              href="/join"
              variant="contained"
              sx={{ borderRadius: "20px", color: "white", bgcolor: "black" }}
            >
              Join now
            </Button>
          </Box>

          {/* responsive navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  height: "1px",
                  borderTop: 1,
                  mb: 2,
                  borderColor: "grey.500",
                }}
              ></Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Button href="/find-store" style={{ color: "black" }}>
                  <FmdGoodIcon />
                  Find a Store
                </Button>
                <Button
                  href="/login"
                  variant="outlined"
                  sx={{ borderRadius: "20px", color: "black", mx: "20px" }}
                  color="inherit"
                >
                  sign in
                </Button>
                <Button
                  href="/join"
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    color: "white",
                    bgcolor: "black",
                  }}
                >
                  Join now
                </Button>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
