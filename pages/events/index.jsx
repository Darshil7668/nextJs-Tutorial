import Head from 'next/head'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
const Events = ({ data }) => {
  const [searchText, setSearchText] = useState()
  const [fetchedData, setFetchedData] = useState(data)
  const { theme, setTheme } = useTheme()

  const handleFetch = async () => {

    const response = await fetch(`http://localhost:4000/events?category=${searchText}`)
    const datas = await response.json()
    setFetchedData(datas)
    if (searchText === undefined | searchText === '') {
      setFetchedData(data)
    }
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }

  const handleUi = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className='bg-slate-50 dark:bg-gray-800 text-black dark:text-white'>
        <button onClick={handleUi}>toggle UI</button> <br />
        <input type="text" value={searchText} onChange={handleSearch} placeholder='search here' className='placeholder:text-black text-black shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded m-1 bg-slate-300 dark:bg-white' />
        <button onClick={handleFetch}  >search category</button>
        {
          fetchedData.map((val) => {
            return (<>
              <h2>{val.id} {val.title} | {val.category}</h2>
            </>)
          })
        }
      </div>
    </>
  )
}

export default Events

export async function getServerSideProps(contex) {
  const response = await fetch(`http://localhost:4000/events`)
  const data = await response.json()

  return {
    props: {
      data,
    }
  }
}