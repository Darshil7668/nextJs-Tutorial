import { useRouter } from 'next/router'
import React from 'react'

const postId = ({ post }) => {
    return (
        <div>
            <h3>
                {post.title}
            </h3>
        </div>
    )
}

export default postId

export async function getStaticPaths() {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respons.json()

// for api dynamic routing 

    const paths = data.slice(0,10).map((posts) => {
        return {
            params: {
                postId: `${posts.id}`
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
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}