const webpackConfig = require('./webpack.prod.js');

module.exports = {
  title: 'Style Guide',
  showUsage: true,
  webpackConfig,
  sortProps: props =>
    props.sort((a, b) => {
      if (a.required && !b.required) {
        return -1;
      }
      if (!a.required && b.required) {
        return 1;
      }
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    }),
};
