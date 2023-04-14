import { axiosInstance } from "@/lib/axios";
import { PostProps } from "@/types/postProps";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

type Result = PostProps & {
  id: string;
};

type FetchPostsReturn = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export const usePosts = () => {
  const fetchPosts = async ({ pageParam = "" }) => {
    const { data } = await axiosInstance.get<FetchPostsReturn>(pageParam);
    return data;
  };
  const postsQuery = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
  } = postsQuery;

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = loadMoreRef && loadMoreRef.current;

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isFetchingNextPage) {
            fetchNextPage();
          }
        });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, isFetchingNextPage]);

  return {
    data,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    loadMoreRef,
    isError,
  };
};
