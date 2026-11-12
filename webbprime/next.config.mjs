/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";
const nextConfig = {
  trailingSlash: true,
  ...(isExport
    ? { output: "export", images: { unoptimized: true } }
    : {
        async redirects() {
          return [{ source: "/", destination: "/en/", permanent: false }];
        },
      }),
};
export default nextConfig;
