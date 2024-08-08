import Image from "next/image";
import Link from "next/link";
import React from "react";

import Tags from "@/components/tags";

import classes from "./posts-item.module.scss";
import { PostData } from "@/lib/posts-util";

interface PostsItemProps {
  post: PostData;
}

const PostsItem = (props: PostsItemProps) => {
  const { title, image, excerpt, date, slug, tags } = props.post;
  // April 14, 2023
  // const formattedDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // 2023年4月14日
  const formattedDate = new Date(date).toLocaleDateString("zh-TW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/blog-posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      {tags && <Tags tags={tags} />}
      <div className={classes.content}>
        <Link href={linkPath}>
          <h2>{title}</h2>
          {image && (
            <div className={classes.image}>
              <Image src={imagePath} alt={title} fill sizes="100vw" />
            </div>
          )}
          <p>{excerpt}</p>
          <time>📅 {formattedDate}</time>
        </Link>
      </div>
    </li>
  );
};

export default PostsItem;
