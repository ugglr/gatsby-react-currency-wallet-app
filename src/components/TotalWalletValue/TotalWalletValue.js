import React from "react"
import { Typography } from "@material-ui/core"

const TotalWalletValue = props => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        borderStyle: "solid",
        borderColor: "#3F51B5",
        borderWidth: "0.6px",
      }}
    >
      <Typography align="center" color="primary" style={{ fontSize: "1.2rem" }}>
        {"Total value: " + props.sum + "USD"}
      </Typography>
    </div>
  )
}

export default TotalWalletValue
