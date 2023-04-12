import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr';

const News = ({ data }) => {
    const [searchText, setSearchText] = useState()
    const [formData, setFormData] = useState({});

    const handleSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log(data)
    }

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:4000/news/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <div>news</div>
            <input type="text" placeholder='search Category' onChange={handleSearchText} /> <br />
            <Link href={`/news/${searchText}`}>Search</Link> <br /> <br />
            <form action="/blogs" onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleInputChange} placeholder='Name' />
                <input type="text" name="category" onChange={handleInputChange} placeholder='category' />
                <input type="text" name="description" onChange={handleInputChange} placeholder='description' />
                <button type='submit'>Add New News</button> <br /><br />
            </form>
            {
                data.map((data) => {
                    return (<><h1 key={data.id}>{data.id} {data.title} | {data.category}</h1> <button onClick={()=>handleDelete(data.id)}>Delete</button></>)
                })
            }
        </>
    )
}
export default News

export async function getServerSideProps() {

    const response = await fetch(`http://localhost:4000/news`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}

