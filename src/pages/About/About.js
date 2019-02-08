import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FAQPanel from "../../components/FAQPanel/FAQPanel";

const styles = {
    root: {
        // textAlign: 'center'
    },
    center: {
        textAlign: 'center'
    }
};

class About extends React.Component {



    render() {
        return (
            <div align='center'>
                <Typography component="h2" variant="display3" gutterBottom>
                    About
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <Divider />

                <Typography component="h3" variant="display3" gutterBottom>
                    FAQ
                </Typography>

                <FAQPanel question = "Question 1" answer = "Answer 1"/>
                <FAQPanel question = "Question 2" answer = "Answer 2"/>
                <FAQPanel question = "Question 3" answer = "Answer 3"/>
            </div>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
