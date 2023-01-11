import React from 'react'

const Murgi = ({ Component, pageProps }) => {
  return (
    <div>Murgi</div>
  )

}

Murgi.getLayout = function PageLayout(page) {
    return(
        <>
        {page}
        </>
    )
}

export default Murgi