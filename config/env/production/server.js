module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "hP0Vl2rc9OFZP1nZ5n17aTDfQqdDHX"),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("RENDER_EXTERNAL_URL"),
});
