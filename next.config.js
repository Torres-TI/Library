const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

const nextImage = {
  images: {
    domains: ["d2rmrv8pjirauk.cloudfront.net"],
  },
};
const svgPlugin = withReactSvg({
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config) {
    return config;
  },
});

module.exports = withPlugins([svgPlugin, nextImage]);
