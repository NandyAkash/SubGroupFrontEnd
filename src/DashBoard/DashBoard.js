import React, { Component } from 'react'
import MainBody from './Body/MainBody'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './SideBar/Sidebar'

export default class DashBoard extends Component {
  render() {
    return (
      <div>
          <Header />
          <Sidebar />
          <MainBody />
          <Footer />
      </div>
    )
  }
}
