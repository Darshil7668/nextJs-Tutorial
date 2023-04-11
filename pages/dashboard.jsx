import React from 'react'
import useSWR from 'swr'

const Dashboard = () => {
    const fetcher = async () => {
        const response = await fetch('http://localhost:4000/dashboard')
        const data = response.json()
        return data
    }
    const { data, error, isLoading } = useSWR('/api/user', fetcher)
    console.log(isLoading);
    console.log(error);
    return (
        <>
            {
                isLoading && (
                    <h1>data is Loading</h1>
                )
            }
            {
                error && (
                    <h1>There is an Error while fetchin a data </h1>
                )
            }
            {
                error == null & !isLoading && (
                    <h1>Likes:{data.likes}</h1>
                )
            }
        </>
    )
}

export default Dashboard