import { Post } from "@/components/Post";
import React from "react";
import { usePosts } from "@/hooks/usePosts";
import { Spinner } from "@/components/Spinner";
import { Error } from "../Error";

export const PostList = () => {
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    loadMoreRef,
    isError,
  } = usePosts();

  const isFetchingPosts = isLoading || isFetchingNextPage;
  const hasFetchedAllPosts = !hasNextPage && !isFetchingNextPage && !isLoading;
  const shouldRenderLoadMoreTrigger = hasNextPage || !isFetchingNextPage;

  return (
    <section className="relative">
      <ul className="flex flex-col gap-6">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((postData) => (
              <li key={postData.id}>
                <Post {...postData} />
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div className="flex w-full justify-center py-6">
        {isFetchingPosts && <Spinner />}
        {hasFetchedAllPosts && <p>Nothing more to load</p>}
      </div>
      {isError && <Error />}
      {shouldRenderLoadMoreTrigger && (
        <div
          ref={loadMoreRef}
          className="absolute bottom-40 h-48 w-full bg-transparent"
          aria-hidden="true"
        ></div>
      )}
    </section>
  );
};
