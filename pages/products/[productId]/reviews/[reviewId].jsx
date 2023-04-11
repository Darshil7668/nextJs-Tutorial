import { useRouter } from 'next/router'
import React from 'react'
const reviewId = () => {
    const Router = useRouter()
    const {productId,reviewId} = Router.query
    return (
        <div>page is {productId} and review no. is {reviewId}</div>
    )
}

export default reviewId