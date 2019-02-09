import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SimpleHereMap from "../../components/SimpleHereMap/SimpleHereMap";

const styles = {
    root: {
        // textAlign: 'center'
    },
    center: {
        textAlign: 'center'
    }
};

class Home extends React.Component {

    render() {
        return (
            <div align='center'>
                <Typography component="h2" variant="display3" gutterBottom>
                    Home
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <Divider />


                {/*<SimpleHereMap/>*/}

                <Divider />



                <Typography style={{marginTop: 10 }} component="h2" variant="display2" gutterBottom>
                    Buoy Info
                </Typography>





            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
