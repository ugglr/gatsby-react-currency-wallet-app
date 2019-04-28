import React, { Component } from "react"

import Layout from "../components/Layout/Layout"
import CurrencyCard from "../components/CurrencyCard/CurrencyCard"

export default class index extends Component {
  state = {
    USD: {
      prefix: "USD",
      currencyName: "US Dollars",
      balance: 100,
    },
    EUR: {
      prefix: "EUR",
      currencyName: "Euro",
      balance: 500,
    },
    CHF: {
      prefix: "CHF",
      currencyName: "Swiss Francs",
      balance: 10000,
    },
    totalValueUSD: null,
  }

  handleAddCurrency = e => prefix => amount => {
    e.preventDefault()
    let tmp = { ...this.state.prefix }
    tmp.balance = tmp.balance + amount
    console.log("prefix is: " + prefix)
    console.log("amount is: " + amount)
    this.setState({ tmp })
    console.log("The ADD button was pressed")
  }

  render() {
    return (
      <div>
        <Layout>
          <CurrencyCard
            prefix={this.state.USD.prefix}
            currencyName={this.state.USD.currencyName}
            balance={this.state.USD.balance}
            handleAddCurrency={this.handleAddCurrency}
          />
          <CurrencyCard
            prefix={this.state.EUR.prefix}
            currencyName={this.state.EUR.currencyName}
            balance={this.state.EUR.balance}
            handleAddCurrency={this.handleAddCurrency}
          />
          <CurrencyCard
            prefix={this.state.CHF.prefix}
            currencyName={this.state.CHF.currencyName}
            balance={this.state.CHF.balance}
            handleAddCurrency={this.handleAddCurrency}
          />
        </Layout>
      </div>
    )
  }
}
