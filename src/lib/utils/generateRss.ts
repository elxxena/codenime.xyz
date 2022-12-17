/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-await-in-loop */
import type { Blog } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";
import RSS from "rss";

const generateRssItem = async (post: Blog) => {
  const postData = allBlogs.find(({ id }) => id === post.id) as Blog;

  return {
    title: postData.title,
    id: postData.id,
    date: new Date(postData.date).toUTCString(),
    description: postData.description ? postData.description : "",
    contentHtml: postData.body.html,
  };
};

export const generateRss = async (posts: Array<Blog>): Promise<string> => {
  const feed = new RSS({
    title: "codenime",
    site_url: "https://codenime.xyz",
    feed_url: "https://codenime.xyz/rss.xml",
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item: any = await generateRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://codenime.xyz/blog/${item.id}`,
        url: `https://codenime.xyz/blog/${item.id}`,
        date: item.date,
        description: "",
        author: "4ndrexyz",
        custom_elements: [{ "content:encoded": item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};
