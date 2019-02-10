import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

class About extends React.Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="display1"> About Anti-Plasti </Typography>
          <p>Solving world hunger one step at a time.</p>
        </div>

        <Divider />

        <p style={{ textAlign: "center", marginTop: 10 }}>
          <img
            src="/img/1.jpg"
            className="z-depth-1 img-fluid"
            alt="Sample avatar"
          />
        </p>

        <div>
          <p style={{ textAlign: "center", padding: 10 }}>
            Anti Plasti impacts coastal communites through environmental
            awareness and weather prediction. Our project incorporates two main
            features, solar powered bouys and weather prediction. We deploy
            solar powered bouys, which detects and collects plastics on the sea
            surface.Our bouys are equppied with cameras which has the features
            to be live streamed as the bouys are out at sea. The other feature
            is weather that can be predicted days in advance which gives
            precautions for given activites, and in some cases residents. This
            information is available online and is updated in realtime. The
            predictions can prepare persons who have routine activites at sea
            and persons who live near the coast to be better resilient to the
            changes in climate. This project actively engages communities
            through environmental awareness, that pollution negatively impacts
            our oceans and everything within our greenhouse is affected. Our
            bouy's remote monitoring capability reduces risk by providing timely
            readings of plastics,sustainable energy through solar and notifies
            persons of unsafe weather reading levels. In addition, we believe
            that by our weather resilience incentive, and monitoring of
            pollution. We are involving communities and impacting younger
            generations for a better climate and a better future.
          </p>
        </div>

        <Divider />

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Typography variant="display1"> We need your help!</Typography>
          <p>
            Removing plastics in the ocean is a really difficult task and the
            world needs all the help it can get. But we need your help too! This
            application needs to be actively maintained so we can continue to
            detect and remove plastics in the ocean.
          </p>

          <p>
            If you're interested, check out the link below to take a look at our
            code on Github. Help us to help make the world a better place :D
          </p>

          <Button>Check out our code here :D</Button>
        </div>
      </div>
    );
  }
}

export default About;
