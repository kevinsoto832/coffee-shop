import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const SecondPage = ({ data }) => (
//   <Layout>
//     <h1>Hi from the second page</h1>
//     <p>{data.posts.nodes.title}</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

const SecondPage = ({ data }) => (
  <Layout>
    <h1>Hi from the second pafge</h1>
    {data.allWpPost.nodes.map(post => (
      <div key={post.title}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query MyQuery2 {
    allWpPost {
      nodes {
        title
        content
      }
    }
  }
`

export const Head = () => <Seo title="Page two" />

export default SecondPage
