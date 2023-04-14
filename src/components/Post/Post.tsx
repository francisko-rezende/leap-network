import { Card } from "../Card";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { DeletePostDialog } from "../DeletePostDialog";
import { EditPostDialog } from "../EditPostDialog./EditPostDialog";
import { PostProps } from "@/types/postProps";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";
dayjs.extend(relativeTime);

export const Post = ({
  title,
  username,
  created_datetime,
  content,
  id,
}: PostProps) => {
  const timeSincePublished = dayjs(created_datetime).fromNow();

  const user = useAppSelector((state: RootState) => state.user.user);

  const isAuthor = user === username;

  return (
    <Card tag="article" hasBorder hasTitle>
      <Header intent="post">
        <Title tag="h2" intent="light" className="flex-[3]">
          {title}
        </Title>
        {isAuthor && (
          <span className="flex max-w-[88px] flex-1 justify-between">
            <DeletePostDialog id={id} />
            <EditPostDialog
              id={id}
              originalContent={content}
              originalTitle={title}
            />
          </span>
        )}
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
