import styled from "styled-components"

export const Assg1Card = ({ icon, title, desc, mid }) => {
  return (
    <Container mid={mid}>
        {icon}
        <h3>{title}</h3>
        <p>{desc}</p>
    </Container>
  )
}

const Container = styled.li`
    background-color: ${props => props.mid? "#93daf8" : "#cbe0ea"};
    border-radius: 0.3em;
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