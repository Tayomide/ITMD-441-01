import styled from "styled-components"
import { Assg1Header } from "../Components/Assg1Header"
import { Assg1Body } from "../Components/Assg1Body"
import { Assg1Interest } from "../Components/Assg1Interest"

export const Assg1 = () => {
  return (
    <Container>
      <Assg1Header />
      <main>
        <Assg1Body />
        <Assg1Interest />
      </main>
    </Container>
  )
}

const Container = styled.section`
  padding: 1em 3em;
`
