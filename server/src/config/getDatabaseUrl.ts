export default function getDatabaseUrl(nodeEnv: string) {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/social-media-app_development",
      test: "postgres://postgres:postgres@localhost:5432/social-media-staging",
    }[nodeEnv] || process.env.DATABASE_URL
  );
}