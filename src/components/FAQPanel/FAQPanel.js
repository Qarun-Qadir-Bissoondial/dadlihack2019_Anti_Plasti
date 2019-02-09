import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";

function FAQPanel(props) {
    return (
        <div style={{width: '100%;'}}>
            <ExpansionPanel style={{borderRadius: 0}}>
                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Typography variant='headline' >{props.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant='subheading'>
                        {props.answer}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

FAQPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FAQPanel;
