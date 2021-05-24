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
            <p>Computer Engineering student! My goal is to become a high skilled and versatile Developer!</p>
            <p><Link to="/contact">Join me!</Link></p>
            </Layout>
        </div>
    )
}

export default about
