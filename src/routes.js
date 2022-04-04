import { Account } from "./components/account";
import { Feed } from "./components/feed";

export const privateRoutes = [
  { path: "*", element: <Feed /> },
  { path: "/account", element: <Account /> }
]

export const publicRoutes = [
]