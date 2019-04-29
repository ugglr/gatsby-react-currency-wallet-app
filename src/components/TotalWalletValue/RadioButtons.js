import React from "react"
import Radio from "@material-ui/core/Radio"
import { Typography } from "@material-ui/core"

class RadioButtons extends React.Component {
  render() {
    return (
      <div>
        <Typography>Select USD as default value</Typography>
        <Radio
          checked={this.props.selectedValue === "USD"}
          onChange={this.props.handleChange}
          value="USD"
          aria-label="USD"
        />
        <Typography>Select EUR as default value</Typography>
        <Radio
          checked={this.props.selectedValue === "EUR"}
          onChange={this.props.handleChange}
          value="EUR"
          aria-label="EUR"
        />
        <Typography>Select CHF as default value</Typography>
        <Radio
          checked={this.props.selectedValue === "CHF"}
          onChange={this.props.handleChange}
          value="CHF"
          aria-label="CHF"
        />
      </div>
    )
  }
}

export default RadioButtons
