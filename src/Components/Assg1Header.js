import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';

export const Assg1Header = () => {
  return (
    <Container>
        <nav className="github">
        <a target="_blank" rel="noreferrer"
            href='https://github.com/Tayomide'><GitHubIcon /> Github</a>
        </nav>
        <nav className="page-nav">
            <ul>
                <li>
                    <NavLink to="/" className={isActive => (isActive ? "selected" : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/weather" >Weather</NavLink>
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
    @media screen and (max-width: 50em){
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.2em;
        gap: 0.2em;
        .page-nav ul{
            flex-direction: column;
            align-items: center;
            gap: 0.2em;
        }
    }
` 