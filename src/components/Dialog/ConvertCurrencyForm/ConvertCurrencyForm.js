import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
})

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "CHF",
    label: "CHF",
  },
]

class OutlinedTextFields extends React.Component {
  state = {
    currency: "EUR",
    originalCurrencyAmount: 0,
  }

  handleChange = name => async event => {
    await this.setState({
      [name]: event.target.value,
    })
    console.log(this.state)
  }

  render() {
    const { classes, prefix } = this.props

    return (
      <form
        type="submit"
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        {/* HOW MUCH FROM THE PREFIX CURRENCY SHALL BE CONVERTED */}
        <TextField
          id="outlined-number"
          label={"Amount in " + prefix}
          onChange={this.handleChange("originalCurrencyAmount")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        <label>To:</label>
        <br />
        {/* INTO WHAT CURRENCY SHALL THE AMOUNT BE CONVERTED TO */}
        <TextField
          id="outlined-select-currency"
          select
          label=""
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={this.props.handleClose}
        >
          Convert
        </Button>
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
