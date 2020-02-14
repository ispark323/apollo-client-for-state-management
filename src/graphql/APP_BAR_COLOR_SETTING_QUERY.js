import gql from "graphql-tag";

const APP_BAR_COLOR_SETTING_QUERY = gql`
  query appBarColorSetting {
    appBarColorSetting @client {
      id
      name
      setting
    }
  }
`;

export default APP_BAR_COLOR_SETTING_QUERY;
