const fs = require("fs");

const getRouteFile = (page) => {
  try {
    const file = fs.readFileSync("./i18n/pages/" + page + "/route.json", "utf-8");
    return JSON.parse(file);
  } catch {
    return null;
  }
};

const mapConfig = (config) => {
  return {
    source: "/en/" + config.en,
    destination: "/en/" + config["pt-BR"],
    locale: false,
  };
};

module.exports = {
  generateRoutesRewrites: () => {
    const pages = fs.readdirSync("./i18n/pages");
    const filteredPages = pages.filter((p) => p !== "Home");
    const configs = filteredPages.map(getRouteFile).filter(Boolean);

    return configs.map(mapConfig);
  },
};
