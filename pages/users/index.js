import React from 'react'

import Dashboard from './Dashboard'

const Users = ({ Component, pageProps }) => {
    return (
        <>
            <Dashboard/>
        </>
    )

}

Users.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>

    )
}



export default Users