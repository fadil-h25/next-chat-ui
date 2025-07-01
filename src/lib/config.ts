export const getBaseUrl = () => {
  const baseUrl = process.env.NEST_API_BASE_URL!;
  if (!baseUrl) throw new Error("Cannot load baseUrl");
  return baseUrl;
};
