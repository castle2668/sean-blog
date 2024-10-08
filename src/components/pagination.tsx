import Link from "next/link";
import React, { useEffect, useState } from "react";

import classes from "./pagination.module.scss";

interface PaginationProps {
  currentPage?: number;
  numPages?: number;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, numPages } = props;

  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    if (currentPage === undefined || numPages === undefined) return;

    setIsFirst(currentPage === 1);
    setIsLast(currentPage === numPages);
    setPrevPage(
      currentPage - 1 === 1 ? "/posts" : `/posts/p/${currentPage - 1}`
    );
    setNextPage(`/posts/p/${currentPage + 1}`);
  }, [currentPage, numPages]);

  return (
    <div className={classes.pagination}>
      {!isFirst ? (
        <Link href={prevPage} rel="prev">
          ← 較新文章
        </Link>
      ) : (
        <span>← 較新文章</span>
      )}
      {!isLast ? (
        <Link href={nextPage} rel="next">
          較舊文章 →
        </Link>
      ) : (
        <span>較舊文章 →</span>
      )}
    </div>
  );
};

export default Pagination;
