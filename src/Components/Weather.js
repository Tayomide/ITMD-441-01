import styled from "styled-components"
import { useState } from "react"
import { Loading } from "./Loading"
import { Error } from "./Error"
import { Link } from "react-router-dom"

export const Weather = ({data, display=false}) => {
  // const [data, setData] = useState()
  const [degree, setDegree] = useState("c")
  const [speed, setSpeed] = useState("km")

  // useEffect(() => {
  //   // const WeatherAPI = require("../API/WeatherAPI")
  //   // WeatherAPI.getWeather(location)
  //   // .then(response => response.json())
  //   // .then(response => setData(response))

  //   // if(localStorage["weatherData"]){
  //   //   setData(JSON.parse(localStorage["weatherData"]))
  //   // }else{
  //   //   const WeatherAPI = require("../API/WeatherAPI")
  //   //   WeatherAPI.getWeather(location)
  //   //   .then(response => response.json())
  //   //   .then(response => setData(response))
  //   // }

  //   // return () => {
  //   //   setData()
  //   // }
  // }, [location])

  // useEffect(() => {
  //   if(data && data["currentConditions"])localStorage["weatherData"] = JSON.stringify(data)
  // }, [data])

  return (
    data ? !data["status"]?
    <Container>
      <ul className="current">
        <li id="icon">
          <img src={data.currentConditions.iconURL} alt={data.currentConditions.comment}></img>
        </li>
        <li id="temperature">
          <p>{data.currentConditions.temp[degree]}</p>
          <button disabled={degree === "c"} onClick={() => setDegree("c")}>&#176;C</button>
          <span className="seperator"></span>
          <button disabled={degree === "f"} onClick={() => setDegree("f")}>&#176;F</button>
        </li>
        <li id="wind">
          <p>{data.currentConditions.wind[speed]}</p>
          <button disabled={speed === "km"} onClick={() => setSpeed("km")}>KM</button>
          <span className="seperator"></span>
          <button disabled={speed === "mile"} onClick={() => setSpeed("mile")}>Mile</button>
        </li>
        <li id="stats">
          <ul>
            <li>
              <p>Precipitation: {data.currentConditions.precip}</p>
            </li>
            <li>
              <p>Humidity: {data.currentConditions.humidity}</p>
            </li>
          </ul>
        </li>
        <li id="titles">
          <ul>
            <li id="location">
              <p>{data.region}</p>
            </li>
            <li>
              <p>{data.currentConditions.dayhour}</p>
            </li>
            <li>
              <p>{data.currentConditions.comment}</p>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="next-days">
        {data["next_days"].map((day, key) => {
          return (
            <li key={key} className={"list"+key}>
              <ul>
                <li className="day-name">
                  <p>{day.day}</p>
                </li>
                <li className="day-icon">
                  <img src={day.iconURL} alt={day.comment}></img>
                </li>
                <li className="day-comment">
                  <p>{day.comment}</p>
                </li>
                <li className="temp">
                  <p>{day["min_temp"][degree]}&#176;{degree.toUpperCase()} / {day["max_temp"][degree]}&#176;{degree.toUpperCase()}</p>
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
      {display && <Link to="/weather">Fancy. Can I play with it?</Link>}
    </Container> : <Error error={data} display={display}/> : <Loading display={display}/> 
  )
}

const Container = styled.div`
  .current{
    display: flex;
    flex-direction: row;
    width: 100%;
    #icon{
      padding-right: 0.4em;
    }
    #temperature, #wind{
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      padding-right: 0.4em;
      p{
        font-size: 2.7em;
      }
      button{
        font-size: 1em;
        padding: 0;
        font-weight: bold;
        color: #b7b7b7;
        &[disabled]{
          cursor: not-allowed;
          color: black;
        }
      }
      .seperator{
        height: 1em;
        width: 0;
        border-left: 2px solid #000000;
        margin: 0 0.2em
      }
    }
    #stats{
      flex: 1;
    }
    #stats, #titles{
      padding-left: 0.4em;
      >ul{
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 0.4em;
        li p{
          font-size: 1.01em;
          font-weight: bold;
        }
      }
    }
    #titles{
      >ul{
        align-items: flex-end;
        gap: 0.1em;
        li p{
          /* font-weight: normal; */
        }
      }
      #location p{
        font-size: 1.3em;
        font-weight: bold;
        text-align: end;
      }
    }
  }
  .next-days{
    display: flex;
    flex-direction: row;
    padding-top: 1em;
    li.list0{
      border-radius: 0.3em;
      border: 1px solid #e8e6e6;
    }
    >li{
      flex: 1;
      padding: 0.4em 0;
      > ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
          width: max-content;
        }
      }
    }
  }
  a{
    color: #609bdb;
    display: block;
    font-size: 1.3em;
    font-weight: bold;
    padding-top: 0.2em;
    text-decoration: underline;
  }
`
