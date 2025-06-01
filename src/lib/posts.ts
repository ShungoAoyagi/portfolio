import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

export type BlogPost = {
  slug: string;
  locale: string;
  title: string;
  date?: string;
};

export const getPosts = cache((locale: string): BlogPost[] => {
  const dir = path.resolve(process.cwd(), "src", "content");
  const slugs = fs.readdirSync(dir);

  return slugs.flatMap((slug) => {
    const fileFor = (l: string) => path.join(dir, slug, `index.${l}.mdx`);
    const file = fs.existsSync(fileFor(locale))
      ? fileFor(locale)
      : fileFor("en");

    if (!fs.existsSync(file)) return [];

    const { data } = matter(fs.readFileSync(file, "utf8"));

    return [
      {
        slug,
        locale,
        title: data.title ?? slug,
        date: data.date ?? null,
      } satisfies BlogPost,
    ];
  });
});
