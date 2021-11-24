import React, {useEffect,useState} from 'react'
import {Layout} from '../components/index'
import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* commonly known as children of the layout and redirects to index.js*/}
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default MyApp
