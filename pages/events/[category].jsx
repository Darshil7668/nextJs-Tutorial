import Head from 'next/head';
import React from 'react'

const Events = ({ articles, category }) => {
    console.log(articles);
    return (
        <>
            <Head>

                <title>Events</title>
            </Head>
            Events for {category} category <br />
            {
                articles.map((data) => {
                    return (
                        <> <h1 key={data.id}> {data.title} <br />{data.description}<br /> Category: {category} </h1> <hr /> </>
                    )
                })
            }
        </>
    )
}

export default Events
export async function getServerSideProps(contex) {
    const { params } = contex
    const { category } = params
    const response = await fetch(`http://localhost:4000/events?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}