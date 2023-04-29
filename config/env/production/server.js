module.exports = ({ env }) => ({
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("RENDER_EXTERNAL_URL"),
});
