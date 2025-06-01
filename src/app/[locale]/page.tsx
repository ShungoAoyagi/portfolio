import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { Link } from "~/i18n/navigation";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
