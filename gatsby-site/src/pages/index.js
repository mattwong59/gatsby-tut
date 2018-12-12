import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple`, fontSize: `72px` }}>
    
    <Header headerText="Index" />
    <h1>Hello Gatsby!</h1>
    <p>Is this cool?</p>
    <img src="https://images.unsplash.com/photo-1482433504097-a3cde62f7882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3420&q=80" alt="" height="auto" width="800px"/>
    <Link to="/contact">Contact</Link>
  </div>
)