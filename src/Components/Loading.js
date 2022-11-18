import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Loading = ({display=false}) => {
  const arr = new Array(7).fill(0)
  return (
    <Container className="user-placeload">
      <ul className='current'>
        <li className='placeload first'></li>
        <li className='placeload second'></li>
        <li className='placeload third'></li>
        <li className="placeload fourth"></li>
      </ul>
      <div className='placeload div first'></div>
      <ul className='next-days'>
        {arr.map((day, key) =>{
          return (
            <li key={key}>
              <ul className='day-container'>
                <li className='placeload'></li>
                <li className="day-name">
                  <div className='placeload first'></div>
                  <div className='placeload second'></div>
                </li>
                <li className='placeload'></li>
                <li className="day-icon">
                  <div className='placeload first'></div>
                  <div className='placeload second'></div>
                </li>
                <li className='placeload'></li>
                <li className="day-comment">
                  <div className='placeload first'></div>
                  <div className='placeload second'></div>
                </li>
                <li className='placeload'></li>
                <li className="temp">
                  <div className='placeload first'></div>
                  <div className='placeload second'></div>
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
      {display && <Link to="/weather">Fancy. Can I play with it?</Link>}
    </Container>
  )
}

const Container = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: max-content;
  position: relative;
  overflow: hidden;
  .placeload{
    height: 100%;
    background-color: #ffffff;
  }
  .current{
    display: grid;
    grid-template-columns: 8fr 0.8fr 8fr 0.8fr 13.8fr 1.6fr 33.9fr 0.8fr 32.2fr;
    flex-direction: row;
    height: 64px;
    .first{
      grid-column: 2;
    }
    .second{
      grid-column: 4;
    }
    .third{
      grid-column: 6;
    }
    .fourth{
      grid-column: 8;
    }
  }
  .div.first{
    height: 1em;
  }
  .next-days{
    display: flex;
    flex-direction: row;
    height: 7.5em;
    margin: 0.3em;
    gap: 0.3em;
    >li{
      height: inherit;
      width: 14.2857%;
      >ul{
        height: inherit;
        display: grid;
        grid-template-rows: 0.1fr 1fr 0.1fr 5fr 0.1fr 1fr 0.1fr 1fr;
        >li{
          display: grid;
          width: 100%;
        }
      }
    }
    .first{
      grid-column: 0;
    }
    .second{
      grid-column: 3;
    }
    .day-name{
      grid-template-columns: 1fr 5fr 1fr;
    }
    .day-icon{
      grid-template-columns: 1fr 5fr 1fr;
    }
    .day-comment{
      grid-template-columns: 1fr 5fr 1fr;
    }
    .day-temp{
      grid-template-columns: 1fr 5fr 1fr;
    }
  }
  a{
    background-color: #ffffff;
    color: #609bdb;
    display: block;
    font-size: 1.3em;
    font-weight: bold;
    padding-top: 0.2em;
    text-decoration: underline;
  }
`