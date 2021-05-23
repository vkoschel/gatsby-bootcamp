import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const about = () => {
    return (
        <div>
            <Layout>
                <Head title ="About" />
            <h1>About</h1>
            <p>Victor Koschel</p>
            <p><Link to="/contact">Work with me</Link></p>
            </Layout>
        </div>
    )
}

export default about
