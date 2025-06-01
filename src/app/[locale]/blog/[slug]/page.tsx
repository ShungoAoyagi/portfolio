import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { BlogPostTemplate } from ".";

export async function generateStaticParams() {
  const locales = ["ja", "en"];
  const blogDir = path.join(process.cwd(), "src", "content");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const slugs = fs.readdirSync(blogDir);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    slug,
    `index.${locale}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return { title: "Post not found" };
  }

  const mdxSource = fs.readFileSync(filePath, "utf8");
  const { data } = matter(mdxSource);
  return { title: data.title || "Blog Post" };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    slug,
    `index.${locale}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const mdxSource = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(mdxSource);

  return <BlogPostTemplate content={content} data={data} />;
}
