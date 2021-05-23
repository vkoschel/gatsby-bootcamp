import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const contact = () => {
    return (
        <div>
             <Layout>
                 <Head title="Contact" />
            <h1>Contact Info</h1>
            <p>Call me maybe?: <a href="https://br.linkedin.com/in/victor-koschel-493b581b9" target="_blank">Linkedin</a></p>
            <p>Projects: <a href="https://github.com/vkoschel" target="_blank"> @vkoschel</a></p>
            <p>Follow me! <a href="https://instagram.com/victorkoschel" target="_blank"> @victorkoschel</a></p>
            </Layout>
        </div>
    )
}

export default contact
