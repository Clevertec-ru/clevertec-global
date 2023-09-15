/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      }
}

