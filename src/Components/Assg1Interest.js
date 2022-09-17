import styled from "styled-components"
import { Assg1Card } from "./Assg1Card"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


export const Assg1Interest = () => {
  return (
    <Container>
        <h2>Interest and Skill-set</h2>
        <ul>
            <Assg1Card
            icon={<GitHubIcon sx={{ fontSize: 40 }}/>} 
            title="Git Version Control"
            desc="With 2 semester worth of lecture on git,
            20+ repositories and 6 achievements I
            have no idea how I got. I'd say I'm pretty
            decent in git."
            />

            <Assg1Card
            icon={<LanguageIcon sx={{ fontSize: 40}}/>}
            title="Web Developement"
            desc="I've been developing websites for 2 years now.
            I am confident in making gorgeous websites in a day.
            This is an example."
            mid={true}
            />

            <Assg1Card
            icon={<DesignServicesIcon sx={{ fontSize: 40}}/>}
            title="Front-End Developement"
            desc="I never really liked data structures, algorithms and
            other big names but I really loved the idea of putting my work
            out for literally anyone to give feedback on, designing and making art."
            />
        </ul>
    </Container>
  )
}

const Container = styled.section`
    padding-top: 4em;
    h2{
        font-size: 1.9em;
        font-weight: 400;
        padding-bottom: 1.5em;
    }
    ul{
        display: flex;
        flex-direction: row;
        gap: 2em;
        @media screen and (max-width: 50em){
            flex-direction: column;
            li{
                align-items: end;
                display: grid;
                grid-template-columns: max-content 1fr;
                width: 100%;
                padding-top: 1.5em;
                svg{
                    grid-column: 1/2;
                }
                h3{
                    grid-column: 2/3;
                }
                p{
                    grid-column: 2/3;
                }
            }
        }
    }
`