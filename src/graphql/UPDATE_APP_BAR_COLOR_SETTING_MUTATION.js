import gql from "graphql-tag";

const UPDATE_APP_BAR_COLOR_SETTING_MUTATION = gql`
  mutation updateAppBarColorSetting($setting: String!) {
    updateAppBarColorSetting(setting: $setting) @client
  }
`;

export default UPDATE_APP_BAR_COLOR_SETTING_MUTATION;
