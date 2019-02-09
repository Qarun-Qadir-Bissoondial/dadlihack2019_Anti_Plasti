import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Link from "react-router-dom/es/Link";

const styles = {
    list: { width: 250, },
    fullList: { width: 'auto', },
    root: { flexGrow: 1, },
    menuButton: {
        marginLeft: -12,
        marginRight: 5,
    },
};


class TemporaryDrawer extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key="Home">
                        <Icon style={{marginRight: 20, marginBottom: 2}}>star</Icon>
                        <Link style={{textDecoration: "none"}} to={"/"}><ListItemText primary="Home" /></Link>
                    </ListItem>
                    <ListItem button key="About">
                        <Icon style={{marginRight: 20, marginBottom: 2}} >info</Icon>
                        <Link style={{textDecoration: "none"}}  to={"/about"}><ListItemText primary="About" /></Link>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color = "inherit">
                            <Icon>menu</Icon>
                        </IconButton>

                        <Typography variant="h6" color="inherit">
                            Anti Plasti
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
