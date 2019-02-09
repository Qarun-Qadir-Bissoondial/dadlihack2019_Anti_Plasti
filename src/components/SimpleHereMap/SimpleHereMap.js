import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = {

};

const appID = "4aNJJLIpy51zKmIlsgGp";
const appCode = "OHROY1ANFX6PqyGerpHdYQ";
const tt_lat = 10.3927881;
const tt_long = -61.3339669;

class SimpleHereMap extends React.Component {

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
            // theme: props.theme,
            // style: props.style,
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
            <div id="here-map" style={{width: '100%', height: '500px', background: 'grey' }} />
        );
    }
}

SimpleHereMap.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleHereMap);
