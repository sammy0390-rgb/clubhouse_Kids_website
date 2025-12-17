/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use standalone output in production builds (for Docker/App Runner)
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
  // Don't use basePath - it breaks dev server. Instead, we'll use absolute paths everywhere
  // and add base tag back for the HTML content only
};

export default nextConfig;


