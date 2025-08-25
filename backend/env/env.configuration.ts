export const EnvironmentVariables = () => ({
  port: parseInt(process.env.PORT || '5000', 10),
  mongodb: {
    connectionUrl: process.env.MONGODB_CONNECTION_URL,
  },
});
