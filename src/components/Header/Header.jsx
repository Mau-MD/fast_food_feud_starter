import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.appInfo.title}</h1>
      <h4 className="tagline">{props.appInfo.tagline}</h4>
      <p className="description">{props.appInfo.description}</p>
    </header>
  )
}

export default Header
