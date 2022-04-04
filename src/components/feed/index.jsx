import { data } from "./data"
import { PostCard } from "./postCard"
import cn from "./style.module.css"

export const Feed = () => {
  return (
    <div className={cn.feedWrapper}>
      {data.map((res) =>
        <PostCard
          key={res.id}
          userName={res.userName}
          createdAt={res.createdAt}
          content={res.content}
          likes={res.likes}
          comments={res.comments} />)}
    </div>
  )
}