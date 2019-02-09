import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

class SimpleSnackbar extends React.Component {
    state = {
        open: false,
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            window.reload(true);
            return;
        }
        window.reload(true);
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">A new update is available! Get the latest version here :D</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            Reload
                        </Button>
                    ]}
                />
            </div>
        );
    }
}

SimpleSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
