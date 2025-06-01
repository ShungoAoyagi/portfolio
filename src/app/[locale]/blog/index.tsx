import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import { BlogPost } from "~/lib/posts";

interface BlogProps {
  locale: string;
  posts: BlogPost[];
}

export const Blog: React.FC<BlogProps> = ({ posts, locale }) => {
  const t = useTranslations("blog");
  return (
    <div>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} locale={locale}>
              {p.title}
            </Link>
            {p.date && (
              <time className="ml-2 text-sm text-muted-foreground">
                {p.date}
              </time>
            )}
          </li>
        ))}
      </ul>
      <Link href="/">{t("back")}</Link>
    </div>
  );
};
