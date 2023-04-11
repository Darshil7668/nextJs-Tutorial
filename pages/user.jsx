import React from 'react'

const user = ({data}) => {
    console.log(data);
    return (
        <div>user</div>
    )
}


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            data
        }
    }
}

export default user