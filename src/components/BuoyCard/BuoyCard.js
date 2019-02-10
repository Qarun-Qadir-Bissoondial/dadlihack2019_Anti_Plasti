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
import ForecastTable from "../ForecastTable/ForecastTable";

const styles = {

};

class BuoyCard extends React.Component {

    constructor(props) {
        super(props);
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
                        <Button>Latitude: <br/> {this.props.data.lat} </Button>
                        <Button>Longitude: {this.props.data.long} </Button>
                    </div>

                    <Divider/>

                    <p style={{marginTop: 10}}>Buoy View</p>
                    <p>Plastic Index: {this.props.data.result}</p>
                    <img id = "live_view" src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Buoy View" />


                </CardContent>

                {/*<div style={{padding: 10}}>*/}
                    {/*<Typography variant="headline">*/}
                        {/*Weather Forecast for the next 5 days*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="caption">*/}
                        {/*Mobile users may have to scroll from left to right*/}
                    {/*</Typography>*/}
                {/*</div>*/}



                {/*<ForecastTable/>*/}
                <ModalInfo/>
                {/* <ModalInfo date={this.props.date} description={this.props.description} temperature={this.props.temperature} humidity={this.props.humidity} windspeed={this.props.windspeed}/> */}
            </Card>

            
        )
    }


}

BuoyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuoyCard);
