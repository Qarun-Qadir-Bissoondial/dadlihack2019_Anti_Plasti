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
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

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

    forceReload() { window.location.reload(true); }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <div className="nav_info" style={{paddingTop: 15, paddingBottom: 15}}>
                    <Typography variant="display1">
                        Anti-Plasti
                    </Typography>
                    <Typography variant="caption">
                        v1.0.0
                    </Typography>
                </div>

                <Divider/>

                <List>
                    <Link style={{textDecoration: "none"}} to={"/"}>
                        <ListItem button key="Home">
                            <Icon style={{ marginBottom: 2, color: 'black'}}>star</Icon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link style={{textDecoration: "none"}}  to={"/about"}>
                        <ListItem button key="About">
                            <Icon style={{ marginBottom: 2, color: 'black'}} >info</Icon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>

                </List>
                <Divider/>
                <Typography style={{margin: 10}} variant="body1">
                    Page not working as it should? Click below to receive the latest version of the web page (this
                    will clear your cache for this page).
                </Typography>
                <Button onClick = {this.forceReload}>Force Refresh</Button>
                <Divider/>
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

                <Drawer style={{textAlign: 'center'}} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
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
