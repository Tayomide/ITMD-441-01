import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

export const Assg1Header = () => {
  return (
    <Container>
        <nav className="github">
            <Link to="https://github.com/Tayomide"><GitHubIcon /> Github</Link>
        </nav>
        <nav className="page-nav">
            <ul>
                <li>
                    <NavLink to="/" className={isActive => (isActive ? "selected" : "")}>Home</NavLink>
                </li>
                <li className="disabled">
                    <NavLink to="/" >Courses</NavLink>
                </li>
                <li className="disabled">
                    <NavLink to="/">About</NavLink>
                </li>
                <li  className="disabled">
                    <NavLink to="/">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    </Container>
  )
}

const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    a{
        color: rgba(0,0,0,0.6);
        font-weight: bold;
        :hover{
            color: #000
        }
    }
    .github{
        grid-column: 0 / span 3;
        a{
            display: flex;
            flex-direction: row;
            align-items: center;
            svg{
                margin-right: 0.2em;
            }
        }
    }
    .page-nav{
        grid-column: 5 / -1;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .disabled{
                cursor: not-allowed;
                a{
                    pointer-events: none;
                    color: rgba(0,0,0,0.5);
                }
                
            }
            a.selected{
                color: #000;
            }
        }
    }
` 