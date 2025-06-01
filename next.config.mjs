import createNextIntlPlugin from "next-intl/plugin";
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withMDX(nextConfig));
