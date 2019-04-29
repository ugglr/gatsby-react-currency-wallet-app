import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"

import Dialog from "../Dialog/Dialog"
import { Link } from "gatsby"

const styles = theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
})

function DetailedExpansionPanel(props) {
  const { classes, prefix, currencyName, balance } = props
  return (
    <div className={classes.root}>
      {/* REMOVE DEFAULT EXPAND {defaultExpanded} AFTER DEVELOPMENT */}
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {/* TITLE OF THE CARD */}
          <div className={classes.column}>
            {/* ######################TITLE OF THE CARD####################### */}
            <Typography
              className={classes.heading}
              style={{ fontSize: "1.3rem" }}
            >
              <strong>
                {balance}
                {prefix}
              </strong>
            </Typography>
            <Typography variant="caption" style={{ fontSize: "1rem" }}>
              {currencyName}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Expand for details
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          {/* ######################FIRST COLUMN#################################### */}
          <div className={classes.column}>
            {/*ACCOUNT HOLDER FIELD */}
            <Typography variant="caption">Account Holder:</Typography>
            <Typography>Savvi.io FBO John Doe</Typography>

            {/*BANK CODE FIELD */}
            <Typography variant="caption" style={topMargin}>
              Bank Code (SWIFT / BIC):
            </Typography>
            <Typography>XXXXXXXXXX</Typography>

            {/*ADRESS NUMBER FIELD */}
            <Typography variant="caption" style={topMargin}>
              Adress:
            </Typography>
            <Typography>
              Savvi.io
              <br />
              16W Street, Geneva, Switzerland
            </Typography>
          </div>
          {/* #####################SECOND COLUMN######################################### */}
          <div className={classNames(classes.column, classes.helper)}>
            {/*ACCOUNT NUMBER FIELD */}
            <Typography variant="caption">Account Number:</Typography>
            <Typography>XXXXXXXXXX</Typography>
            {/*WIRE TRANSFER NUMBER FIELD */}
            <Typography variant="caption" style={topMargin}>
              Wire Transfer Number:
            </Typography>
            <Typography>XXXXXXXXXX</Typography>
            {/*ROUTING NUMBER FIELD */}
            <Typography variant="caption" style={topMargin}>
              Routing Number (ACH or ABA):
            </Typography>
            <Typography>XXXXXXXXXX</Typography>
            <br />
            <Typography variant="caption">
              How do I use these?
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {/* ################BUTTONS############################ */}

          <div style={rightMargin}>
            <Dialog
              title={"Add " + prefix}
              prefix={prefix}
              handleChange={props.handleChange}
              handleAddCurrency={props.handleAddCurrency}
            />
          </div>

          <div style={rightMargin}>
            <Dialog title={"Send " + prefix} prefix={prefix} />
          </div>

          <Dialog
            title={"Convert " + prefix}
            prefix={prefix}
            handleConvert={props.handleConvert}
          />
          <Link to="/faq">
            <Button size="small">More</Button>
          </Link>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

const topMargin = {
  marginTop: "0.5rem",
}

const rightMargin = {
  marginRight: "0.5rem",
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DetailedExpansionPanel)
