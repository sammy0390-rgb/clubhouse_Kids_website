import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use standalone output in production builds (for Docker/App Runner)
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
  
  // Disable all caching in development to prevent corruption
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable webpack cache completely in dev mode
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;


