import React from "react";
import { useQuery } from "@apollo/react-hooks";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SettingsComponent from "./components/SettingsComponent";
import APP_BAR_COLOR_SETTING_QUERY from "./graphql/APP_BAR_COLOR_SETTING_QUERY";

function App() {
  const { loading, data } = useQuery(APP_BAR_COLOR_SETTING_QUERY);

  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <AppBar position="static" color={data.appBarColorSetting.setting}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            State Management with Apollo
          </Typography>
        </Toolbar>
      </AppBar>
      <SettingsComponent
        setting={
          data.appBarColorSetting.setting === "primary"
            ? "secondary"
            : "primary"
        }
      />
    </div>
  );
}

export default App;
