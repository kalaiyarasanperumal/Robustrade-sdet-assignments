
function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}

function getOptionalEnv(name: string, defaultValue: string): string {
  return process.env[name] || defaultValue;
}

export const env = {
  apiBaseUrl: getRequiredEnv("API_BASE_URL"),

  database: {
    host: getOptionalEnv("DB_HOST", "localhost"),
    port: Number(getOptionalEnv("DB_PORT", "5432")),
    name: getRequiredEnv("DB_NAME"),
    user: getRequiredEnv("DB_USER"),
    password: getRequiredEnv("DB_PASSWORD")
  },

  testEnvironment: getOptionalEnv("TEST_ENV", "local")
};

if (
  !Number.isInteger(env.database.port) ||
  env.database.port <= 0 ||
  env.database.port > 65535
) {
  throw new Error("DB_PORT must be a valid port number.");
}
