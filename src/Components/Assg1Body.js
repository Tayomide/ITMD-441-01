import styled from "styled-components"

export const Assg1Body = () => {
  return (
    <Container>
        <article>
            <h1 className="hello">Hey!</h1>
            <h2 className="name">I'm Tomiwa Ibrahim.</h2>
            <h2 className="title">Student and Web developer</h2>
            <p>I make websites for fun and I'm excited to be in a class that teaches me how to do just that!
                You can check out my github for some cool projects I've worked on, but you're better off checking
                my resume for completed projects, my <a target="_blank" rel="noreferrer"
                href='https://github.com/Tayomide'>Github</a> screams commitment issues.</p>
            <p>I love the fact that I can use any framework cos I've been warming up to React
                for a while now and not being able to use it in my previous dev classes was no different from
                torture. I'm really excited to be here and can't wait to see what I'll learn from this class!</p>
            <button>Download CV</button>
        </article>
    </Container>
  )
}

const Container = styled.section`
    display:grid;
    grid-template-columns: 9fr 8fr;
    padding-top: 3em;
    article{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .hello, .title{
            font-weight: 400;
            font-size: 1.25em;
            padding-bottom: 1em;
            color: rgba(0,0,0,0.8);
        }
        .name{
            color: #249de1;
            font-size: 2.5em;
            padding-bottom: 0.5em;
        }
        p{
            font-size: 1.2em;
            line-height: 1.25em;
            padding-bottom: 1em;
            word-spacing: 0.11em;
            a{
                color: #249de1;
                text-decoration: underline;
            }
        }
        button{
            background-color: #249de1;
            border-radius: 0.3em;
            color: #fff;
            font-size: 1.1em;
            padding: 0.8em 2em;
            width: fit-content;
        }
    }
`
