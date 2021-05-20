import React from 'react'
import { Link } from 'gatsby'
import Footer from './components/footer'
import Header from './components/header'

const about = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>Victor Koschel</p>
            <p><Link to="/contact">Work with me</Link></p>
            <Footer />
        </div>
    )
}

export default about
