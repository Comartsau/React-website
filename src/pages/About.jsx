import React from 'react'
import { Container } from '../styles/laoutStyled'
import { useState,useEffect } from 'react'
import axios from 'axios'

function About() {

    const [data,setData] = useState([]) 

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => setData(res.data))
    },[])

  return (
    <Container>
        <h1>About</h1>
        <hr/>
        <h3>My name is {data.name} </h3>
        <ul>
            <li>Email : {data.email}</li>
            <li>Phone : {data.phone}</li>
            <li>Website : {data.website}</li>
        </ul>
    
    </Container>
  )
}

export default About