import React from "react";
import { useMutation } from "@apollo/react-hooks";

import Button from "@material-ui/core/Button";

import UPDATE_APP_BAR_COLOR_SETTING_MUTATION from "../graphql/UPDATE_APP_BAR_COLOR_SETTING_MUTATION";
import APP_BAR_COLOR_SETTING_QUERY from "../graphql/APP_BAR_COLOR_SETTING_QUERY";

function SettingsComponent({ setting }) {
  const [updateUserSetting] = useMutation(
    UPDATE_APP_BAR_COLOR_SETTING_MUTATION,
    {
      variables: { setting },
      update: cache => {
        const data = cache.readQuery({
          query: APP_BAR_COLOR_SETTING_QUERY
        });

        const dataClone = {
          ...data,
          appBarColorSetting: {
            ...data.appBarColorSetting,
            setting
          }
        };

        cache.writeQuery({
          query: APP_BAR_COLOR_SETTING_QUERY,
          data: dataClone
        });
      }
    }
  );
  return (
    <div style={{ marginTop: "50px" }}>
      <Button variant="outlined" color="primary" onClick={updateUserSetting}>
        Change color
      </Button>
    </div>
  );
}

export default SettingsComponent;
