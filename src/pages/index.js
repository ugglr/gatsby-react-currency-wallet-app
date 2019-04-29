import React, { Component } from "react"

import Layout from "../components/Layout/Layout"
import TotalWalletValue from "../components/TotalWalletValue/TotalWalletValue"
import CurrencyCard from "../components/CurrencyCard/CurrencyCard"
import LatestActivity from "../components/LatestActivity/LatestActivity"

export default class index extends Component {
  state = {
    addAmount: 0,
    activity: [],
    USD_wallet: 100,
    EUR_wallet: 500,
    CHF_wallet: 10000,
    totalValueUSD: null,
  }

  //THIS FUNCTION CALCULATES THE SUM OF CURRENCIES IN USD
  calculateTotalSumInDollars = () => {
    let { USD_wallet, EUR_wallet, CHF_wallet } = this.state
    let sum =
      USD_wallet +
      this.convertEURtoUSD(EUR_wallet) +
      this.convertCHFtoUSD(CHF_wallet)
    console.log("Sum in USD: " + sum)
    this.setState({ totalValueUSD: sum })
  }

  //THIS FUNCTION HANDLES CHANGE OF INPUT FIELDS AND ADDS IT TO THE STATE
  handleChange = async e => {
    e.preventDefault()
    let { name, value } = e.target

    await this.setState({ [name]: value })
    console.log(this.state)
  }

  //THIS FUNCTION HANDLES THE ADDITION OF CURRENCY TO RESPECTIVE WALLETS
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
        //PUSH THE ADDED AMOUNT TO DATABASE
        await this.setState({
          USD_wallet: parseInt(USD_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        this.calculateTotalSumInDollars()
        break
      case "EUR":
        //PUSH THE ADDED AMOUNT TO DATABASE
        await this.setState({
          EUR_wallet: parseInt(EUR_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        this.calculateTotalSumInDollars()
        break
      case "CHF":
        //PUSH THE ADDED AMOUNT TO DATABASE
        await this.setState({
          CHF_wallet: parseInt(CHF_wallet) + parseInt(addAmount),
          activity: [newActivityString, ...this.state.activity],
          AddAmount: 0,
        })
        this.calculateTotalSumInDollars()
        break
      default:
        //CREATE AN ERROR MESSAGE
        break
    }
  }

  //THIS FUNCTION HANDLES CONVERSION BETWEEN CURRENCIES
  handleConvert = (originalCurrency, originalCurrencyAmount, currency) => {
    console.log("We are now in the handleConvert function")
    console.log("We have received the following:")
    console.log("Convert From: " + originalCurrency)
    console.log("The amount to be converted: " + originalCurrencyAmount)
    console.log("Into: " + currency)

    let { USD_wallet, EUR_wallet, CHF_wallet } = this.state
    let date = Date()

    this.setState({
      activity: [
        date +
          ": Converted: " +
          originalCurrencyAmount +
          originalCurrency +
          " to " +
          currency,
        ...this.state.activity,
      ],
    })

    switch (originalCurrency) {
      case "USD":
        console.log("Starting to convert from USD")
        this.setState({ USD_wallet: USD_wallet - originalCurrencyAmount })
        if (currency === "EUR") {
          let newAmount = this.convertUSDtoEUR(originalCurrencyAmount)
          this.setState({
            EUR_wallet: EUR_wallet + newAmount,
          })
          //PUSH CHANGE TO DATABASE
        } else {
          let newAmount = this.convertUSDtoCHF(originalCurrencyAmount)
          this.setState({ CHF_wallet: CHF_wallet + newAmount })
          //PUSH CHANGE TO DATABASE
        }
        break
      case "EUR":
        console.log("Starting to convert from EUR")
        this.setState({ EUR_wallet: EUR_wallet - originalCurrencyAmount })
        if (currency === "USD") {
          let newAmount = this.convertEURtoUSD(originalCurrencyAmount)
          this.setState({ USD_wallet: USD_wallet + newAmount })
          //PUSH CHANGE TO DATABASE
        } else {
          let newAmount = this.convertEURtoCHF(originalCurrencyAmount)
          this.setState({ CHF_wallet: CHF_wallet + newAmount })
        }
        break
      case "CHF":
        console.log("Starting to convert from CHF")
        this.setState({ CHF_wallet: CHF_wallet - originalCurrencyAmount })
        if (currency === "USD") {
          let newAmount = this.convertCHFtoUSD(originalCurrencyAmount)
          this.setState({ USD_wallet: USD_wallet + newAmount })
        } else {
          let newAmount = this.convertCHFtoEUR(originalCurrencyAmount)
          this.setState({ EUR_wallet: EUR_wallet + newAmount })
        }
        break
      default:
        break
    }
    this.calculateTotalSumInDollars()
  }

  //###### FROM USD TO OTHER CURRENCIES FUNCTIONS##############
  convertUSDtoEUR = amount => {
    let USDtoEUR_Rate = 0.9
    let res = amount * USDtoEUR_Rate
    return res
  }

  convertUSDtoCHF = amount => {
    let USDtoCHF_Rate = 1.02
    let res = amount * USDtoCHF_Rate
    return res
  }

  //###### FROM EUR TO OTHER CURRENCIES FUNCTIONS ###############

  //THIS FUNCTION CONVERTS EUR TO USD
  convertEURtoUSD = amount => {
    //TODO: GET FRESH RATES FROM AN API
    let EURtoUSD_Rate = 1.12
    let res = amount * EURtoUSD_Rate
    console.log("Converted: " + amount + "EUR, to: " + res + "USD")
    return res
  }

  convertEURtoCHF = amount => {
    let EURtoCHF_Rate = 1.14
    let res = amount * EURtoCHF_Rate
    return res
  }

  //##### FROM CHF TO OTHER CURRENCIES FUNCTIONS

  //THIS FUNCTION CONVERTS CHF TO USD
  convertCHFtoUSD = amount => {
    //TODO: GET FRESH RATES FROM AN API
    let CHFtoUSD_Rate = 0.98
    let res = amount * CHFtoUSD_Rate
    console.log("Converted: " + amount + "CHF, to: " + res + "USD")
    return res
  }

  convertCHFtoEUR = amount => {
    let CHFtoEUR_Rate = 0.88
    let res = amount * CHFtoEUR_Rate
    return res
  }

  componentWillMount() {
    //FETCH USER DATA FROM DATABASE AND FEED INTO STATE

    //CALCULATE THE TOTAL AMOUNT IN USD WHICH UPDATES THE STATE VALUE
    this.calculateTotalSumInDollars()
  }

  render() {
    return (
      <div>
        <Layout>
          {/* THIS COMPONENT DISPLAYS THE SUM OF CURRENCIES IN USD AT THE TOP OF THE PAGE */}
          <TotalWalletValue sum={this.state.totalValueUSD} />

          {/*THIS IS THE CURRENCY CARD/WALLET DISPLAY FOR USD */}
          <CurrencyCard
            prefix={"USD"}
            currencyName={"US Dollars"}
            balance={this.state.USD_wallet}
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
            handleConvert={this.handleConvert}
          />

          {/*THIS IS THE CURRENCY CARD/WALLET DISPLAY FOR EUR */}
          <CurrencyCard
            prefix={"EUR"}
            currencyName={"EURO"}
            balance={this.state.EUR_wallet}
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
            handleConvert={this.handleConvert}
          />

          {/*THIS IS THE CURRENCY CARD/WALLET DISPLAY FOR CHF */}
          <CurrencyCard
            prefix={"CHF"}
            currencyName={"Swiss Franc"}
            balance={this.state.CHF_wallet}
            handleChange={this.handleChange}
            handleAddCurrency={this.handleAddCurrency}
            handleConvert={this.handleConvert}
          />

          {/*THIS COMPONENT MAPS THROUGH THE ACTIVITY ARRAY AND DISPLAYS
            THEM UNDER THE CURRENCY CARDS*/}
          <LatestActivity activity={this.state.activity} />
        </Layout>
      </div>
    )
  }
}
