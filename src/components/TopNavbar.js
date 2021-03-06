import "./styles/TopNavbar.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const TopNavBar = () => {
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
    <div className="navbar">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  color: "white",
                  display: "block",
                }}
                to="/"
              >
                Hookah.wiki
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "white",
                    display: "block",
                  }}
                  to="/FindHookah"
                >
                  Find Hookah
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "white",
                    display: "block",
                  }}
                  to="/Tips"
                >
                  Tips
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "white",
                    display: "block",
                  }}
                  to="/Posts"
                >
                  Posts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "white",
                    display: "block",
                  }}
                  to="/HookahLab"
                >
                  Hookah Lab (beta)
                </Link>
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default TopNavBar;
