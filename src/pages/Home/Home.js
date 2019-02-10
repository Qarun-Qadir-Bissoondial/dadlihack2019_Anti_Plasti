import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
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
                Climate change resilience through computer vision and cloud computing, to reduce the devastating effects of volatile weather and oceanic refuse.


                </p>

                <p>
                    Click on a Buoy to view plastics detected and the weather forecast for that location.
                </p>

                <SimpleHereMap/>

            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
