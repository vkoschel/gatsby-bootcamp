import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
  query {
    site{
      siteMetadata{
        description
      }
    }
  }  

`)

    return (
        <footer>
            <p>{data.site.siteMetadata.description}</p>
        </footer>
    )
}

export default Footer
