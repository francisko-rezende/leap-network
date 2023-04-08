import { Card } from "../Card";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { IconButton } from "../IconButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type PostProps = {
  title: string;
  username: string;
  created_datetime: string;
  content: string;
};

export const Post = ({
  title,
  username,
  created_datetime,
  content,
}: PostProps) => {
  const timeSincePublished = dayjs(created_datetime).fromNow();

  return (
    <Card tag="article" hasBorder hasTitle>
      <Header intent="post">
        <Title tag="h2" intent="light" className="flex-[3]">
          {title}
        </Title>
        <span className="flex max-w-[88px] flex-1 justify-between">
          <IconButton hiddenTextDescription="Delete post" intent="delete" />
          <IconButton hiddenTextDescription="Edit post" intent="edit" />
        </span>
      </Header>
      <div className="grid gap-3">
        <p className="flex justify-between text-[1.125rem] text-leap-gray-700">
          <span>{`@${username}`}</span>
          <span>{timeSincePublished}</span>
        </p>
        <p className="text-[1.125rem] leading-tight">{content}</p>
      </div>
    </Card>
  );
};
