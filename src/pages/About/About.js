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
                        Anti Plasti benefits people wishing to break into hydroponics with little to no prior knowledge
                        and with a low cost of entry. It’s remote monitoring capability reduces risk by providing
                        timely readings on their farm and notifies them if it has reached unsafe levels,
                        compensating for a farmer’s poor education in the field while allowing them to divert their
                        time on other tasks, such as marketing. In addition, we believe the PiDronics system is an
                        important educational tool to introduce young people into the world of agriculture in an
                        engaging environment, since it encapsulates the fields of agriculture, programming and the
                        ever-popular Raspberry Pi. The PiDronics system integrates seamlessly with a hydroponics farm,
                        and the modularity of the system allows various sensors to be integrated and viewable on
                        the app.
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
