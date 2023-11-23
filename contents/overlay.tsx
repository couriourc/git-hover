import cssText from "data-text:~/contents/overlay.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

function useMouseMove() {
  const [pos, syncPos] = useState({
    x: 0,
    y: 0,
    url: ""
  })

  document.addEventListener("mousemove", (event) => {
    const el: HTMLAnchorElement = event.target

    syncPos({
      x: event.clientX,
      y: event.clientY,
      url: el.href
    })
  })
  return pos
}

export default () => {
  const pos = useMouseMove()
  return (
    <div
      className="hw-top"
      style={{
        padding: 12,
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%,-50%)",
        pointerEvents: "none"
      }}>
      {pos.url && <img width={50} src={pos.url + "?raw=true"}></img>}
    </div>
  )
}
