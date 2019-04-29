import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/green"
import Radio from "@material-ui/core/Radio"

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500],
    },
  },
  checked: {},
}

class RadioButtons extends React.Component {
  state = {
    selectedValue: "USD",
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === "USD"}
          onChange={this.handleChange}
          value="USD"
          name="radio-button-demo"
          aria-label="USD"
        />
        <Radio
          checked={this.state.selectedValue === "EUR"}
          onChange={this.handleChange}
          value="EUR"
          name="radio-button-demo"
          aria-label="EUR"
        />
        <Radio
          checked={this.state.selectedValue === "CHF"}
          onChange={this.handleChange}
          value="CHF"
          name="radio-button-demo"
          aria-label="CHF"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      </div>
    )
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RadioButtons)
