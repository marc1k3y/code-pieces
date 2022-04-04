import cn from "./style.module.css"
import { NavLink } from "react-router-dom"
import { footerLinks } from "./links"

export const Footer = () => {
  return (
    <div className={cn.footerWrapper}>
      {footerLinks.map((link) =>
        <NavLink to={link.to} key={link.to}>
          <img src={link.imageHolder} alt="footer-link" />
        </NavLink>)}
    </div>
  )
}