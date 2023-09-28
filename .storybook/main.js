module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: (config) => {
    if (config?.module?.rules) {
      config.module.rules.push({
        test: /\.(ts|js|tsx|jsx)$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: [
          {
            loader: require.resolve("@linaria/webpack5-loader"),
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
              displayName: process.env.NODE_ENV !== "production",
              extension: ".linaria.module.css",
            },
          },
        ],
      });
    }
    return config;
  },
};
