import {FC, ReactNode} from 'react'
import Menu from "./Menu";
import "./style.scss";

const PageLayout:FC<{children: ReactNode }> = ({ children }) => {
  return (
    <main className="page">
      <Menu />
      {children}
    </main>
  )
}

export default PageLayout