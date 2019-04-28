import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

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
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Sorry this Function is not yet implemented!</h1>
        <p>But stay tuned!</p>
      </React.Fragment>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
