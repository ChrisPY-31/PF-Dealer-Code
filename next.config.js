/** @type {import('next').NextConfig} */
const nextConfig = {
 
  experimental: {
    appDir: true,
    esmExternals: "loose",
    webpack: (config) => {
      config.externals = config.externals || {};
      config.externals['supports-color'] = 'supports-color';
      return config;
    },
  },
  
}

module.exports = nextConfig
