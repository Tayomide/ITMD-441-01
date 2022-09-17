import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import emailjs from "emailjs-com"

export const Assg1Footer = () => {
  //Check if localStorage is available. Use Session storage if it isn't
  localStorage.setItem("test", "works")
  const storage = localStorage.getItem("test") ? localStorage : sessionStorage
  storage.removeItem("test")

  // Set variables and get input and text area as variables
  const input = useRef()
  const text = useRef()
  const button = useRef()
  const form = useRef()
  const [sentBool, setSentBool] = useState(false)
  const [bool, setBool] = useState(true)
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  // Validate email function
  const validateEmail = (e) => {
    if(/\S+@\S+\.\S+/.test(e.target.value)){
      setEmail()
    } else if(e.target.value === ''){
      setEmail()
    } else{
      setEmail("This email format is not accepted.")
    }
  }

  // Handling what happens on reload
  useEffect(() => {
    // Define functions
    const sendEmail = (e) => {
      e.preventDefault();
      if(!email && text.current.value !== ''){
        emailjs.sendForm('service_mf80wp7', 'template_0gxu52s', form.current, 'AxPxZbeBlBHCGYuHi')
        storage.removeItem(text.current)
        setMessage('')
        setSentBool(true)
      }
      else{
        setBool(false)
      }
    }

    // Setting item in local storage to make sure it doesnot get deleted on reload
    const setItem = (e) => {
      storage.setItem(e.target, e.target.value)
    }

    // Setting item in local storage to make sure it doesnot get deleted on reload
    const removeError = (e) => {
      sentBool && setSentBool(false)
      if(message && e.target === text.current)setMessage()
      if(email && e.target === input.current)setEmail()
    }

    // Getting a reference of each form element
    const buttonCopy = button.current
    const inputCopy = input.current
    const textCopy = text.current

    // Check if the user has previously typed anything. If they haven't set the input as ''
    input.current.value = storage.getItem(input.current) || ''
    setMessage(storage.getItem(text.current) || '')

    setBool(true)

    //Add event listeners for validating emails and setting items
    inputCopy.addEventListener('focusout', validateEmail)
    inputCopy.addEventListener('focusin', removeError)
    inputCopy.addEventListener('input', setItem)
    textCopy.addEventListener('focusin', removeError)
    buttonCopy.addEventListener('click', sendEmail)
    return () => {
      // Remove event listener on reload to prevent previous event listeners to be with current event listiners
      inputCopy?.removeEventListener('focusout', validateEmail)
      inputCopy?.removeEventListener('focusin', removeError)
      inputCopy?.removeEventListener('input', setItem)
      textCopy?.removeEventListener('focusin', removeError)
      buttonCopy?.removeEventListener('click', sendEmail)
    }
  }, [email, message, storage, sentBool])
  
  return (
    <Footer>
        <h2>Connect With me</h2>
        <form ref={form}>
            <input type="text" name="from_name" defaultValue="ITMD-441 Website" hidden></input>
            <input type="email" placeholder="tayi@hawk.iit.edu" ref={input} required name="to_name"></input>
            {email && <p className="error">{email}</p>}
            <textarea placeholder="Hey Tomiwa! Cool Assignment" ref={text} name="message" value={message}
            onChange={e => {setMessage(e.target.value);storage.setItem(e.target, e.target.value)}}></textarea>
            {(message === undefined || message === '') && !bool && <p className="error">Type a message to connect!</p>}
            {sentBool && <p className="sent">Sent! Thanks for connecting.</p>}
            <button ref={button} >Stay Connected!</button>
        </form>
    </Footer>
  )
}

const Footer = styled.footer`
  h2{
    font-size: 1.9em;
    font-weight: 400;
    padding: 1.5em 0 1em 0;
  }
  form{
    display: flex;
    flex-direction: column;
    max-width: 30em;
    input, textarea{
      font-size: 1.1em;
      padding: 0.7em 0 0.7em 1em;
      background-color: #e3f2f8;
      margin-bottom: 0.5em;
      border-radius: 0.1em;
    }
    textarea{
      height: 7em;
    }
    p.error{
      color: #ff8282;
      padding: 0 0 0.7em 0;
    }
    p.sent{
      color: #249de1;
    }
    button{
      background-color: #27aee8;
      border-radius: 0.1em;
      color: #fff;
      font-size: 1.1em;
      padding: 0.8em 2em;
      width: fit-content;
      margin-top: 1.1em;
    }
  }
`
