import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>Welcome to my first Gatsby experience!</h2>
      <p>If you have any questions, please<Link to="/contact"> contact me. </Link></p>
    </Layout>
  )
}

export default IndexPage