import React from 'react'

const category = ({ articles, category }) => {
    return (
        <>
            Search Result for: {category} <br /> <hr />
            {
                articles.map((data) => {
                    return (
                        <> <h1>{data.id} {data.title} | {data.description}</h1> <hr />  </>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(contex) {
    const { params, req, res,query} = contex
    console.log(req.headers.cookie);
    const { category } = params
    console.log(query);
    res.setHeader(`Set-Cookie`, [`category=${category}`])
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}

export default category