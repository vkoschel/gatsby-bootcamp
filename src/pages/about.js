import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const about = () => {
    return (
        <div>
            <Layout>
            <h1>About</h1>
            <p>Victor Koschel</p>
            <p><Link to="/contact">Work with me</Link></p>
            </Layout>
        </div>
    )
}

export default about
