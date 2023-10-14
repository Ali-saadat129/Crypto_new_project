import React from 'react'
// Hooks
import { useContext } from 'react'
 import { MyContext } from '../context/Contextprovider'


  const  Littletokens = () => {

    const data = useContext(MyContext)
    console.log(data)

    const test = (data) => {
        console.log(data)
    }

  return (
    <div><button onClick={() => test(data)}>show</button></div>
  )
}
export default Littletokens
