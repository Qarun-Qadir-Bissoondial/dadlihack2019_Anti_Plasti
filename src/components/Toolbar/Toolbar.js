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

                    <Link style={{textDecoration: "none"}}  to={"/support"}>
                        <ListItem button key="Support">
                            <Icon style={{ marginBottom: 2, color: 'black'}} >info</Icon>
                            <ListItemText primary="Support" />
                        </ListItem>
                    </Link>

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
