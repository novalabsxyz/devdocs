import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Helium Developer Portal" />
    <h1>Welcome</h1>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/device/">Device</Link>
    <p></p>
    <Link to="/blockchain/">Blockchain</Link>
    <p></p>
  </Layout>
)

export default IndexPage
