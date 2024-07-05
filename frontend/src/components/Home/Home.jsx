import React from 'react'
import './Home.css'
import ContentArea from '../ContentArea/ContentArea'
import Sidebar from '../Sidebar/Sidebar'


export default function Home() {
  return (
    <>
    <main>
        <Sidebar/>
        <ContentArea/>
        
    </main>
    <footer></footer>
    </>
  )
}
