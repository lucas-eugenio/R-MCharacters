export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: "White",
        value: "#FFFFFF",
      },
      {
        name: "Off-White",
        value: "#F5F5F5",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
