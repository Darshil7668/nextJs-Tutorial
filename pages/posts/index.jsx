import Link from 'next/link'
import React from 'react'

const postList = ({ data }) => {
    console.log(data)
    return (
        <>
            <h3 className='text-3xl'>postList</h3>
            {
                data.slice(0, 10).map((data) => (<><Link href={`posts/${data.id}`}><h1>{data.id} {data.title} <hr /></h1></Link></>))
            }

        </>
    )
}
export default postList
export async function getStaticProps() {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respons.json()
    return {
        props: {
            data
        }
    }
}