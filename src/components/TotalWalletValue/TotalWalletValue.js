import React from "react"
import { Typography } from "@material-ui/core"

const TotalWalletValue = props => {
  const USD_SUM = props.sum

  return (
    <Typography align="center" color="primary" style={{ fontSize: "1.2rem" }}>
      {"Total value: " + USD_SUM + "USD"}
    </Typography>
  )
}

export default TotalWalletValue
