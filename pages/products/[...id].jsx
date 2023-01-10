import React from 'react'
import { useRouter } from 'next/router'

const products = () => {
    const router = useRouter();
    const {pid} = router.query;
    console.log(pid);
    return (
        <h1>page id {pid}</h1>
    )
}

export default products