module.exports = ({ env }) => ({
  app: { keys: env("APP_KEYS") },
  url: env("RENDER_EXTERNAL_URL"),
});
