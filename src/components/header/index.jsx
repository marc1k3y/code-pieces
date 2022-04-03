import cn from "./style.module.css"
import messages from "../../assets/messages.svg"

export const Header = () => {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        rugram
      </div>
      <div className={cn.navigation}>
        <div className={cn.add}>
          +
        </div>
        <div className={cn.messages}>
          <img src={messages} alt="messages" />
        </div>
      </div>
    </div>
  )
}