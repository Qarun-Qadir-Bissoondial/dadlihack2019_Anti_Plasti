import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

class About extends React.Component {

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <Typography variant="display1"> About Anti-Plasti </Typography>
                    <p>
                        Solving world hunger one step at a time.
                    </p>
                </div>

                <Divider/>

                <p style={{textAlign: 'center', marginTop: 10}}>
                    <img src="/img/1.jpg" className="z-depth-1 img-fluid" alt="Sample avatar"/>
                </p>

                <div>
                    <p style={{textAlign: 'center', padding: 10}}>
                        Anti Plasti benefits tourists, who are looking to vacation in these Caribbean islands and not be affected by pollution and bad weather, fishermen, looking for prime weather and an effective catch and marine life.

                        The economy and society as a whole. Fishermen with nets containing more fish than garbage, and beaches unmarred by litter provide a boon to a country's finances through the fishing and tourism industry. Furthermore, citizens feel greater pride and overall satisfaction by this potential reduction in waste.

                        We aim to have an all-in-one cloud web app solution that detects plastics out in the ocean which will lead to the eradication of plastics, as well as weather forecasting to warn citizens of upcoming storms, hurricanes and bad weather. 
                    </p>
                </div>

                <Divider/>

                <div style={{textAlign: 'center', marginTop: 10}}>
                    <Typography variant="display1"> We need your help!</Typography>
                    <p>
                        Removing plastics in the ocean is a really difficult task and the world needs all the help it
                        can get. But we need your help too! This application needs to be actively maintained so we can
                        continue to detect and remove plastics in the ocean.
                    </p>

                    <p>
                        If you're interested, check out the link below to take a look at our code on Github. Help us to
                        help make the world a better place :D
                    </p>

                    <Button>
                        Check out our code here :D
                    </Button>
                </div>
            </div>
        );
    }
}

export default About;
