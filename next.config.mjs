import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use standalone output in production builds (for Docker/App Runner)
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
  // Don't use basePath - it breaks dev server. Instead, we'll use absolute paths everywhere
  // and add base tag back for the HTML content only
  
  // Fix for dev server cache issues - use filesystem cache but with better invalidation
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Use filesystem cache with better invalidation to prevent chunk errors
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};

export default nextConfig;


