import React, { useState } from 'react'

const Events = ({ data }) => {
  const [searchText, setSearchText] = useState()
  const [fetchedData, setFetchedData] = useState(data)

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

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearch} placeholder='search here' />
      <button onClick={handleFetch}>search category</button>
      {
        fetchedData.map((val) => {
          return (<>
            <h2>{val.id} {val.title} | {val.category}</h2>
          </>)
        })
      }
    </div>
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