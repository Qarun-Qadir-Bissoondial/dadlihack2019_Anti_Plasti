import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";

const styles = {
    root: {
        width: '100%',
    },
};

function FAQPanel(props) {
    return (
        <div className={styles.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Typography variant='headline' >{props.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant='subheading'>
                        {props.answer}
                        {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
                        {/*sit amet blandit leo lobortis eget.*/}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

FAQPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQPanel);
