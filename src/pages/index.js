import React, { Component } from "react"

import Layout from "../components/Layout/Layout"
import CurrencyCard from "../components/CurrencyCard/CurrencyCard"

export default class index extends Component {
  state = {
    amount: 0,
    USD_wallet: 100,
    EUR_wallet: 500,
    CHF_wallet: 10000,
    totalValueUSD: null,
  }

  handleChange = async e => {
    e.preventDefault()
    let { name, value } = e.target

    await this.setState({ [name]: value })
    console.log(this.state)
  }

  handleAddCurrency = e => {
    e.preventDefault()
    console.log("The ADD button was pressed")
  }

  render() {
    return (
      <div>
        <Layout>
          <CurrencyCard
            prefix={"USD"}
            currencyName={"US Dollars"}
            balance={this.state.USD_wallet}
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
          />
          <CurrencyCard
            prefix={"EUR"}
            currencyName={"EURO"}
            balance={this.state.EUR_wallet}
            handleAddCurrency={this.handleAddCurrency}
          />
          <CurrencyCard
            prefix={"CHF"}
            currencyName={"Swiss Franc"}
            balance={this.state.CHF_wallet}
            handleAddCurrency={this.handleAddCurrency}
          />
        </Layout>
      </div>
    )
  }
}
