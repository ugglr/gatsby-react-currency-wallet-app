import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"

import AddCurrencyForm from "./AddCurrencyForm/AddCurrencyForm"
import SendCurrencyForm from "./SendCurrencyForm/SendCurrencyForm"
import ConvertCurrencyForm from "./ConvertCurrencyForm/ConvertCurrencyForm"

const styles = {
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, title, prefix } = this.props
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          {title}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {title}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <div
            style={{ marginTop: "2rem", marginLeft: "2rem", maxWidth: "960px" }}
          >
            {title[0] === "A" ? (
              <AddCurrencyForm
                handleChange={this.props.handleChange}
                handleAddCurrency={this.props.handleAddCurrency}
                handleClose={this.handleClose}
                prefix={prefix}
              />
            ) : title[0] === "S" ? (
              <SendCurrencyForm />
            ) : (
              <ConvertCurrencyForm
                prefix={prefix}
                handleClose={this.handleClose}
                handleConvert={this.props.handleConvert}
              />
            )}
          </div>
        </Dialog>
      </div>
    )
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullScreenDialog)
