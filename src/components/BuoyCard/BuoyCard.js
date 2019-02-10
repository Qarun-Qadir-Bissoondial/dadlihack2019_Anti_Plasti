import './BuoyCard.css';
import React from 'react';
import ModalInfo from '../modal/ModalInfo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';

const styles = {

};

class BuoyCard extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            modal: {
                modal: false,
                // title: props.title,
                date: undefined,
                description: undefined,
                temperature: undefined,
                humidity: undefined,
                windspeed: undefined,
                error: undefined,
            }
        }
    }

    render(){
        if (!this.props.infoPresent) {
            return (
                <Card className="card">
                    <CardContent>
                        <Typography variant="headline">
                            No Info present! Click on a map marker to view its information
                        </Typography>
                    </CardContent>
                </Card>
            )
        }

        return (
            <Card className="card">
                <CardContent>
                    <Typography variant="headline">
                        {this.props.data.title}
                    </Typography>
                    <div className="data">
                        <Button>Latitude: {this.props.data.lat} </Button>
                        <Button>Longitude: {this.props.data.long} </Button>
                    </div>

                    <Divider/>

                    <p>Buoy View</p>
                    <img id = "live_view" src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Buoy View" />

                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    {/* <Button id = "toggleBtn" color="info" onClick={this.toggle}>Learn More</Button> */}
                    <Button size="small">Learn More</Button>
                </CardActions>

                <ModalInfo data={this.state.modal}/>
            </Card>

            
        )
    }


}

BuoyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuoyCard);
