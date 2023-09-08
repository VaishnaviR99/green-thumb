module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // Plugins: [
    //   "@babel/plugin-proposal-export-namespace-from",
    //   "react-native-reanimated/plugin",
    // ],
  };
};
