import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [number, setNumber] = React.useState()
  React.useEffect(() => {
    fetch("https://lunch-zsa32ird2q-uc.a.run.app/sorteo")
      .then(r => r.json())
      .then(data => setNumber(data.sorteado.number))
  }, [])
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1>{`El ganador es ${number}`}</h1>
      </div>
    </Container>
  )
}

export default IndexPage
