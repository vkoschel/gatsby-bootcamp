import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'


import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: published,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            published(formatString:"MMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                    <li className={blogStyles.post}>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.published}</p>
                        </Link>
                    </li>
                )

            })
            }
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
