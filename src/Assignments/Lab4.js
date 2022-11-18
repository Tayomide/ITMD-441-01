import styled from "styled-components"
import { Weather } from "../Components/Weather"
import { useState } from "react"
import { useEffect } from "react"

export const Lab4 = () => {
  const [endpointType, setEndpointType] = useState("Coordinates")
  const endpointList = ["Coordinates", "Location"]
  const [updateEndpoint, setUpdateEndpoint] = useState(false)
  const [location, setLocation] = useState([])
  const [coordinates, setCoordinates] = useState(["", ""])
  const [weather, setWeather] = useState("London, UK")
  const [data, setData] = useState()

  const updateEndpointType = (type) => {
    setUpdateEndpoint(false)
    setEndpointType(type)
  }

  const getWeather = () => {
    if(endpointType === "Location"){
      setWeather(location)
    }else{
      let latitude = coordinates[0]
      let longitude = coordinates[1]
      if(!latitude.includes("."))latitude+= ".0"
      if(!longitude.includes("."))longitude += ".0"
      let ans = latitude+","+longitude
      console.log(ans)
      setWeather(ans)
    }
  }

  useEffect(() => {
    const WeatherAPI = require("../API/WeatherAPI")
    WeatherAPI.getWeather(weather)
    .then(response => response.json())
    .then(response => setData(response))
    return () => {
      setData()
    }
  }, [setData, weather])

  useEffect(() => {
    if(weather){
      const WeatherAPI = require("../API/WeatherAPI")
      WeatherAPI.getWeather(weather)
      .then(response => response.json())
      .then(response => setData(response))
    }
    return () => {
      setData()
    }
  }, [weather, setData])

  return (
    <Container>
      <Weather data={data}/>
      <div className="input-section">
        <div className="endpoint-type-dropdown" onClick={() => setUpdateEndpoint(!updateEndpoint)} tabIndex="1" onBlur={() => setUpdateEndpoint(false)}>
          <p>{endpointType}</p>
          <button></button>
          {updateEndpoint && 
            <ul>
              {endpointList.map((type, idx) => <li key={idx} onClick={() => updateEndpointType(type)}><p>{type}</p></li>)}
            </ul>
          }
        </div>
        {endpointType === "Location" ? 
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="London"/>:
        <>
          <label htmlFor="latitude">
            <input type="number" id="latitude" value={coordinates[0]} onChange={(e) => setCoordinates([e.target.value, coordinates[1]])} placeholder="12.000" />
          </label>
          <label htmlFor="longitude">
            <input type="number" value={coordinates[1]} onChange={(e) => setCoordinates([coordinates[0], e.target.value])} placeholder="-84.050" />
          </label>
        </>
        }
        <button onClick={getWeather}>Get Weather Stats</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  >div:not(.input-section){
    padding-top: 2em;
  }
  .input-section{
    padding-top: 2.3em;
    display: flex;
    flex-direction: row;
    gap: 0.4em;
    
    label{
      position: relative;
      :before{
        display: block;
        font-size: 1em,;
        left: 0;
        position: absolute;
        top: -1.3em;
      }
      &[for="latitude"]:before{
        content: "Latitude";
      }
      &[for="longitude"]:before{
        content: "Longitude";
      }
    }
    input[type="text"], input[type="number"]{
      background-color: #efefef;
      border-radius: 0.2em;
      font-size: 1em;
      height: 2.3em;
      padding: 0 0.3em;
      width: 10em;
    }
    > button{
      align-items: center;
      background-color: #dbdbdb;
      border-radius: 0.2em;
      display: inline-flex;
      font-size: 1em;
      font-weight: bold;
      height: 2.3em;
      justify-content: center;
      padding: 0 0.6em 0 0.6em;
      :hover{
        background-color: #d3d2d2;
      }
    }
  }
  .endpoint-type-dropdown{
    align-items: center;
    background-color: #efefef;
    border-radius: 0.2em;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 2.3em;
    justify-content: space-between;
    padding: 0 1em;
    position: relative;
    width: 10em;
    ul{
      background-color: inherit;
      border-radius: 0.2em;
      height: max-content;
      position: absolute;
      right: 0;
      top: 3em;
      width: inherit;
      li{
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 2.3em;
        p{
          padding: 0 0 0 1em;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        :hover{
          background-color: #d4d3d3;
        }
      }
    }
    p{
      height: max-content;
      text-transform: capitalize;
    }
    button {
      width: 0.8em;
      height: 0.5em;
      background-color: black;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }
`