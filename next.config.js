const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.USE_LOCAL_FS_SHOWS_LIB === 'true' && {
        webpack: (config) => {
            config.resolve.alias['fs-shows'] = path.join(__dirname, '../fs-shows');
            return config;
        },
    }),
}

module.exports = nextConfig
