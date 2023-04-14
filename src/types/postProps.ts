import { Id } from "@/types/id";

export type PostProps = {
  username: string;
  created_datetime: string;
  title: string;
  content: string;
} & Id;
