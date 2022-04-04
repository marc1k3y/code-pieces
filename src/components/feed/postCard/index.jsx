import { useState } from "react"
import cn from "./style.module.css"

export const PostCard = ({
  userName, createdAt, content, likes, comments }) => {
  const [showingFooter, setShowingFooter] = useState(false)
  return (
    <div className={cn.postCardWrapper}>
      <div className={cn.header}>
        <div className={cn.userName}>
          {userName}
        </div>
        <div className={cn.createdAt}>
          {createdAt}
        </div>
      </div>
      <div className={cn.content} onClick={() => setShowingFooter(!showingFooter)}>
        {content}
      </div>
      <div className={cn.footer} style={{ display: showingFooter ? "flex" : "none" }}>
        <div className={cn.likes}>
          {likes} likes
        </div>
        <div className={cn.comments}>
          {comments.map((comm, index) =>
            <div className={cn.comment} key={index}>
              <div className={cn.commHeader}>
                {comm.userName}
              </div>
              <div className={cn.commText}>
                {comm.text}
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}