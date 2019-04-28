import React, { Component } from "react"

import Layout from "../components/Layout/Layout"
import CurrencyCard from "../components/CurrencyCard/CurrencyCard"

export default class index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CurrencyCard />
        </Layout>
      </div>
    )
  }
}
