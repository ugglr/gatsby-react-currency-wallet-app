import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TotalWalletValue from "./TotalWalletValue"
import RadioButtons from "./RadioButtons"

const styles = theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

class SimpleExpansionPanel extends Component {
  state = {
    selectedValue: "USD",
  }

  handleChange = async e => {
    await this.setState({ selectedValue: e.target.value })
    console.log(this.state)
  }

  render() {
    const { classes, sum } = this.props

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <TotalWalletValue sum={sum} />
            <Typography
              variant="caption"
              style={{
                marginLeft: "2rem",
                marginTop: "0.5rem",
                fontSize: "0.7rem",
              }}
              className={classes.heading}
            >
              expand to select default currency
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RadioButtons
              selectedValue={this.state.selectedValue}
              handleChange={this.handleChange}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleExpansionPanel)
