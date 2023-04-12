// dynamic search routing through API using getStaticPath

import React from 'react'

const PageId = ({ post }) => {
    console.log(post)
    return (
        <div>
            {
                post.map((data) => {
                    return (
                        <>
                            <div>{data.id} | {data.title} | {data.category} </div>
                        </>
                    )
                })
            }
        </div >
    )
}

export default PageId



export async function getStaticPaths() {
    const response = await fetch(`http://localhost:4000/news/`)
    const data = await response.json()
    const paths = data.map((val) => {
        return {
            params: {
                pageId: `${val.category}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(contex) {
    const { params } = contex
    const response = await fetch(`http://localhost:4000/news?category=${params.pageId}`)
    const data = await response.json()
    return {
        props: {
            post: data,
        }
    }
}