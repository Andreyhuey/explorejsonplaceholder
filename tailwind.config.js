module.exports = {
  content: [
    './apps/**/src/**/*.{html,ts}', // Angular apps in the monorepo
    './libs/**/src/**/*.{html,ts}', // Libraries in the monorepo, if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
