import { Link } from "~/i18n/navigation";
import { getPosts } from "~/lib/posts";
import { Blog } from ".";

export const metadata = { title: "Blog" }; // 任意

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getPosts(locale).sort((a, b) =>
    (a.date ?? "") < (b.date ?? "") ? 1 : -1
  );

  return (
    <>
      <Blog posts={posts} locale={locale} />
    </>
  );
}
