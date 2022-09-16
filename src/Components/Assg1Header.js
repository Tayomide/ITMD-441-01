import styled from "styled-components"
import { Link } from 'react-router-dom'


export const Assg1Header = () => {
  return (
    <Container>
        <nav>
            <Link to="https://github.com/Tayomide">Github</Link>
        </nav>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Courses</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contacts</Link>
                </li>
            </ul>
        </nav>
    </Container>
  )
}

const Container = styled.header`` 