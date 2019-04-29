import React from "react"
import { Typography } from "@material-ui/core"

const TotalWalletValue = props => {
  const USD_SUM = props.sum
  //Converter functions are passed down from index.js to keep conversion the same
  const EUR_SUM = props.convertUSDtoEUR(USD_SUM)
  const CHF_SUM = props.convertUSDtoCHF(USD_SUM)
  //----------------------------------------------------------------

  //Easy access to change the string being displayed
  const USD_display = "Total value: " + USD_SUM + "USD"
  const EUR_display = "Total value: " + EUR_SUM + "EUR"
  const CHF_display = "Total value: " + CHF_SUM + "CHF"

  return (
    <Typography align="center" color="primary" style={{ fontSize: "1.2rem" }}>
      {console.log("val:" + props.selectedValue)}
      {props.selectedValue === "USD"
        ? USD_display
        : props.selectedValue === "EUR"
        ? EUR_display
        : CHF_display}
    </Typography>
  )
}

export default TotalWalletValue
