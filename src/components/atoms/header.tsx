import { FC } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            競馬予想掲示板
          </Typography>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
};

export default Header;
