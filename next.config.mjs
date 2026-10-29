/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";
const nextConfig = {
  trailingSlash: true,
  ...(isExport
    ? { output: "export", images: { unoptimized: true } }
    : {
        async headers() {
          return [{ source: "/social/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
        },
        async redirects() {
          return [{ source: "/", destination: "/en/", permanent: false }];
        },
      }),
};
export default nextConfig;
