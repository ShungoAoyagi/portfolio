import { useTranslations } from "next-intl";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "~/i18n/navigation";

interface BlogPostTemplateProps {
  content: string;
  data: {
    title?: string;
    date?: string;
    tags?: string[];
  };
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  content,
  data,
}) => {
  const t = useTranslations("blog.slug");
  return (
    <article className="prose mx-auto">
      {data.title && <h1>{data.title}</h1>}
      <MDXRemote source={content} />
      <Link href="/blog">{t("backToIndex")}</Link>
    </article>
  );
};
