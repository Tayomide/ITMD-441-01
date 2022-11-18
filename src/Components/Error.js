import { useEffect } from 'react'
import { useState} from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Error = ({error, display=true}) => {
  const [message, setMessage] = useState("This is a generic 404 message")
  useEffect(() => {
    if(error.message === "invalid query")setMessage([`Seems like the location "${error.query}" is not in our database :/.`,
    <br key="1"></br>,`We'll reach out to our provider for an explanation user-san (︶︹︺).`,<br key="2"></br>,
    <Link to="./weather" className={display?"display":""}>Still skeptical? Check out our API!</Link>])
    else if(error.message === "Rejected characters in query")setMessage([`We found this in your query "${error.rejected}".`,<br key="3"></br>,
    `...you aren't trying to hurt us are you user-san (つ﹏<。)?`,<br key="4"></br>,
    <Link to="./weather" className={display?"display":""}>Still skeptical? Check out our API!</Link>])
    else if(error.message === "Search by coordinates not available due to excessive use of this feature. Try after sometime or avail other methods available"){
      setMessage(["Phew (Ｔ▽Ｔ)! I'll be resting for a while user-san. That took a toll on me.",<br key="5"></br>,
      <Link to="./weather" className={display?"display":""}>Still skeptical? Check out our API!</Link>])
    }
    else if(error.message === "Please allow us to use your location")setMessage(["We've got a new cool api to show you user-san ＼（＾▽＾）／.",<br key="6"></br>,
    <Link to="./weather" className={display?"display":""}>Still skeptical? Check out our API!</Link>])
  }, [error])
  return (
    <Container>
      <img src="./404.png" alt="404" />
      <div>
        <h1>404</h1>
        <h2>{error.message}</h2>
        <p>{message}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img{
    height: 300px;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      padding-bottom: 0.2em;
      font-size: 1.8em;
    }
    h2{
      padding-bottom: 0.2em;
      text-align: center;
      text-transform: capitalize;
    }
    p{
      font-size: 1.1em;
      line-height: 1.2em;
      text-align: center;
      a{
        background-color: #ffffff;
        color: #609bdb;
        display: none;
        font-weight: bold;
        padding-top: 0.3em;
        text-decoration: underline;
      }
      a.display{
        display: block;
      }
    }
  }
`