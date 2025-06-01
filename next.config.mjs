import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // その他オプション（必要なら追加）
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
