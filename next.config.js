/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Redirects are handled at the hosting layer (.htaccess / Vercel / Netlify)
  // because output: 'export' does not support next.config redirects.
};

module.exports = nextConfig;
