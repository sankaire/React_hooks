import React from "react"
import { render } from "react-dom"

import Counter from "./Counter"
import "./css/Styles.css"

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  )
}

render(<Application />, document.getElementById("root"))
