import styled from "styled-components"

export const Assg1Card = ({ icon, title, desc }) => {
  return (
    <Container>
        {icon}
        <h3>{title}</h3>
        <p>{desc}</p>
    </Container>
  )
}

const Container = styled.li`
    background-color: #cbe0ea;
    padding: 5em 0.8em 1.5em 0.8em;
    width: 33.33333%;
    svg{
        color: #249de1;
    }
    h3{
        font-size: 1.2em;
        padding: 0.7em 0; 
    }
    p{
        line-height: 1.25em;
        padding-bottom: 1em;
        word-spacing: 0.11em;
    }
`