import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/MDAFSARALI`)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data=useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-3xl p-4 text-white'>
      Name : {data.name} <br />Bio : {data.bio}
      <img src={data.avatar_url} alt="Avatar" className='text-center m-auto pt-2 h-[300px] w-[300px]' />
    </div>
  )
}

export default Github


export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/MDAFSARALI')
    return response.json()
}