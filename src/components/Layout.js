import React from 'react'
import Header from '../components/Header'
import BackgroundLines from '../components/BackgroundLines'
import ScrollToTop from '../components/ScrollToTop'

const Layout = props => (
  <div className="mi-wrapper">
    <ScrollToTop />
    <BackgroundLines />
    <Header />
    {props.children}
  </div>
)

export default Layout
