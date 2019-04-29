import React, { Component } from "react"

import Layout from "../components/Layout/Layout"
import CurrencyCard from "../components/CurrencyCard/CurrencyCard"
import LatestActivity from "../components/LatestActivity/LatestActivity"

export default class index extends Component {
  state = {
    addAmount: 0,
    convertAmount: 0,
    activity: [],
    USD_wallet: 100,
    EUR_wallet: 500,
    CHF_wallet: 10000,
    totalValueUSD: null,
  }

  calculateTotalSumInDollars = () => {
    let { USD_wallet, EUR_wallet, CHF_wallet } = this.state
    let sum =
      USD_wallet +
      this.convertEURtoUSD(EUR_wallet) +
      this.convertCHFtoUSD(CHF_wallet)
    console.log("Sum in USD: " + sum)
    this.setState({ totalValueUSD: sum })
  }

  convertEURtoUSD = amount => {
    let EURtoUSD_Rate = 1.12
    let res = amount * EURtoUSD_Rate
    console.log("Converted: " + amount + "EUR, to: " + res + "USD")
    return res
  }

  convertCHFtoUSD = amount => {
    let CHFtoUSD_Rate = 0.98
    let res = amount * CHFtoUSD_Rate
    console.log("Converted: " + amount + "CHF, to: " + res + "USD")
    return res
  }

  handleChange = async e => {
    e.preventDefault()
    let { name, value } = e.target

    await this.setState({ [name]: value })
    console.log(this.state)
  }

  handleAddCurrency = async (e, prefix) => {
    let { USD_wallet, EUR_wallet, CHF_wallet, addAmount } = this.state
    e.preventDefault()
    console.log(prefix)
    console.log("The ADD button was pressed")
    let date = Date()
    let newActivityString = date + ": Added: " + addAmount + prefix
    console.log(newActivityString)
    switch (prefix) {
      case "USD":
        await this.setState({
          USD_wallet: parseInt(USD_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        console.log(this.state.activity)
        break
      case "EUR":
        await this.setState({
          EUR_wallet: parseInt(EUR_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        break
      case "CHF":
        await this.setState({
          CHF_wallet: parseInt(CHF_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        break
      default:
        break
    }
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
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
          />
          <CurrencyCard
            prefix={"CHF"}
            currencyName={"Swiss Franc"}
            balance={this.state.CHF_wallet}
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
          />
          <LatestActivity activity={this.state.activity} />
        </Layout>
      </div>
    )
  }
}
