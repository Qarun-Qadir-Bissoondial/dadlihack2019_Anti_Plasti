import React from 'react';
import PropTypes from "prop-types";
import { withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography";
import BuoyCard from "../BuoyCard/BuoyCard";
import FirebaseInstance from "../Firebase/Firebase";

const styles = {

};

const appID = "4aNJJLIpy51zKmIlsgGp";
const appCode = "OHROY1ANFX6PqyGerpHdYQ";
// const weatherAPIkey = "5e8a3f47b6ba4a57126eec42c7f9ef6c";
// Sample request:
// https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5e8a3f47b6ba4a57126eec42c7f9ef6c
// https://api.openweathermap.org/data/2.5/forecast?lat=LATITUDE_OF_BUOY&lon=LONGITUDE_OF_BUOY&appid=APP_ID

// const weather_request = "https://api.openweathermap.org/data/2.5/forecast?lat=" + LATITUDE + "&lon=" + LONGITUDE + "&appid=" + weatherAPIkey;
// use the above expression to help make the requests easier
const tt_lat = 10.3927881;
const tt_long = -61.3339669;

class SimpleHereMap extends React.Component {

    app = new FirebaseInstance();

    constructor(props) {
        super(props);

        let zoom = this.set_zoom();
        this.platform = null;
        this.map = null;

        this.state = {
            app_id: appID,
            app_code: appCode,
            useHTTPS: true,
            useCIT: true,
            center: {
                lat: tt_lat,
                lng: tt_long,
            },
            zoom: zoom,
            infoPresent: false,
            card: {
                title: 'Buoy Title',
                lat: 10.1234,
                long: -61.1234,
            }
        }
    }

    set_zoom() {
        if (window.innerWidth <= 500) {
            return 9.0;
        }
        if (window.innerWidth > 500 && window.innerWidth <= 768) {
            return 9.2;
        }
        return 9.4;
    }

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var layer = this.platform.createDefaultLayers();
        var container = document.getElementById('here-map');

        this.map = new window.H.Map(container, layer.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        });

        var svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">' +
            '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>' +
            '<path d="M0 0h24v24H0z" fill="none"/>' +
            '</svg>';

        const group = new window.H.map.Group();
        const marker_icon = new window.H.map.Icon(svgMarkup);

        // The following markers are dummy data
        // The data from firebase will be used to create these objects
        // Only the lat and long from the firebase object is needed to create the marker, but all the
        // other info is needed to create a Buoy Object

        // 1. Get a collection of Buoy objects from firebase
        // 2. Create a marker for each fetched Buoy Object using the lat and long
        // 3. Create a mapping between the Buoy Object and the marker that was created for it
        // (continued on the group.addEventListener function)

        const marker_n = new window.H.map.Marker({lat: 10.81, lng: -61.3339669}, {icon: marker_icon});
        const marker_s = new window.H.map.Marker({lat: 10.0, lng: -61.3339669}, {icon: marker_icon});
        const marker_w = new window.H.map.Marker({lat: 10.4398967, lng: -61.5339669}, {icon: marker_icon});
        const marker_e = new window.H.map.Marker({lat: 10.4398967, lng: -60.9739669}, {icon: marker_icon});

        group.addObject(marker_n);
        group.addObject(marker_s);
        group.addObject(marker_e);
        group.addObject(marker_w);

        this.map.addObject(group);

        // this.app.get_db().ref('dummy/B-E-001').set({
        //     buoy_id: 'B-E-001',
        //     lat: 10.4398967, lng: -60.9739669,
        //     image_link: "none-yet"
        // }).then(() => {
        //     console.log('written');
        // });

        // "buoy_id": {
        //     "buoy_id": "B-001",
        //         "lat": 10.000,
        //         "long": 10.000,
        //         "pH": 7,
        //         "alt": 1,
        //         "image_link": "Link for firebase storage bucket"
        // }

        group.addEventListener('tap', (event) => {
            console.log(event.target); // event.target is the marker that was clicked on

            // In addition to infoPresent being set to true in the state, the card object in the state also
            // has to be updated. The marker that is clicked on will correspond to a Buoy Object. The data
            // from this Buoy Object will be used to set the state. This is automatically passed to the JSX below.

            // 1. When a marker is clicked, use the mapping from 3 to determine which Buoy Object it corresponds to
            // 2. Pass the Buoy Object from 4 into the card state
            // this.setState({infoPresent: true, card: this_buoy_object});
            this.setState({infoPresent: true});
        });

        var events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        var ui = new window.H.ui.UI.createDefault(this.map, layer)
        this.re_render();
    }

    re_render() {
        window.addEventListener('resize', () => {
            this.map.getViewPort().resize();
            this.setState({
                zoom: this.set_zoom()
            });
            // this.state.zoom = this.set_zoom();
        })
    }

    render() {
        return (
            <div>
                <Divider/>

                <div id="here-map" style={{width: '100%', height: '500px', background: 'grey' }} > </div>

                <Divider style={{marginTop: 15}}/>

                <Typography style={{marginTop: 10 }} component="h2" variant="display2" gutterBottom>
                    Buoy Info
                </Typography>

                <BuoyCard data={this.state.card} infoPresent={this.state.infoPresent}/>

            </div>


        );
    }
}

SimpleHereMap.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleHereMap);
