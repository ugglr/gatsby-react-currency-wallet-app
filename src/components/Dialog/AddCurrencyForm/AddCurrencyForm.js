import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
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

class OutlinedTextFields extends React.Component {
  state = {
    amount: 0,
  }

  handleChange = async e => {
    e.preventDefault()
    //Add the information from the form to the state
    let { name, value } = e.target

    await this.setState({ [name]: value })
    console.log(this.state)
  }

  render() {
    const { classes, handleAddCurrency, prefix } = this.props
    const { amount } = this.state

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleAddCurrency(prefix, amount)}
      >
        <TextField
          id="outlined-number"
          label={"Amount of " + prefix + " to be added"}
          onChange={this.handleChange}
          type="number"
          name="amount"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <br />
        <Button
          style={{ marginLeft: "0.5rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
