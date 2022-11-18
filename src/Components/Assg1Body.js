import styled from "styled-components"
import { Weather } from "./Weather"
import { useState, useEffect } from "react"
import { Error } from "./Error"

export const Assg1Body = () => {
  const [location, setLocation] = useState("")
  const [data, setData] = useState()
  const [weatherError, setWeatherError] = useState(false)

  useEffect(() => {
    // Location API
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      const crd = pos.coords;
      setData()
      setWeatherError(false)
      setLocation(`${crd.latitude},${crd.longitude}`)
    }
    
    function error(err) {
      setData()
      setData({message:"Please allow us to use your location", error:err})
      setWeatherError(true)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  useEffect(() => {
    const error = (err) => {
      setData({message:"Please allow us to use your location", error:err})
      setWeatherError(true)
    }
    if(weatherError){
      setTimeout(() => {if(location === "")error("Not working")}, "5000")
    }
  }, [location, weatherError])


  useEffect(() => {
    const WeatherAPI = require("../API/WeatherAPI")
    WeatherAPI.getWeather(location)
    .then(response => response.json())
    .then(response => setData(response))
    return () => {
      setData()
    }
  }, [location])
  

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
            <a target="_blank" rel="noreferrer" className="button" href="./Tomiwa_Resume.pdf" download="Tomiwa's_Resume">Download CV</a>
        </article>
        {
          weatherError ? <Error error={data} display={true}/> : <Weather data={data} display={true}/>
        }
    </Container>
  )
}

const Container = styled.section`
    display:grid;
    grid-template-columns: 8fr 8fr;
    padding-top: 3em;
    @keyframes placeHolderShimmer{
      0%{
          background-position: -468px 0
      }
      100%{
          background-position: 468px 0
      }
    }
    article{
        @media screen and (max-width: 50em){
            grid-column: 1 / span 2;
        }
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
        .button{
            background-color: #249de1;
            border-radius: 0.3em;
            color: #fff;
            font-size: 1.1em;
            padding: 0.8em 2em;
            width: fit-content;
        }
    }
`
