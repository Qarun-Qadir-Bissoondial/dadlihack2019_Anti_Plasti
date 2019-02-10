import React from 'react';
import {Collapse, Card, CardBody, Container, Row, Fa, Button} from 'mdbreact';

class Support extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
  
      this.state = {
          collapseID: 'collapse1',
        collapse: false,
      };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
  
    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

    render() {
        const {collapseID} = this.state;
        return (
        <div className = "container-fluid">

        <Container>
            <Row className="align-items-center mt-5">
                <h2 className="grey-text" style={{margin: "0px"}}>
                    Frequently Asked Questions
                </h2>
                <span className="click border grey-text px-1 border-light rounded ml-2"><Fa icon="question-circle" className="mr-2"/>FAQ</span>
            </Row>
            <hr className="mb-5" />
            <h5>Click below for responses to frequently asked questions.</h5>
    
            <Row className="align-items-center mt-5">
                <h5 className="grey-text" style={{margin: "5px"}}>
                <Button href="#basics">
                Importance</Button>
                </h5>
                <h5 className="grey-text" style={{margin: "5px"}}>
                <Button href="#product">
                    Product</Button>
                </h5>
            </Row>
    
            <Container className="md-accordion mt-5">
                <div id = "basics">
                    <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                        Importance
                    </h2>
                    <Card className=" transparent border-0 border-light">
                    <span onClick={this.toggleCollapse('collapse1')} className=" click d-flex p-2 transparent blue-text border-bottom border-light "><h5>How does climate change affect plastics in the sea? </h5><i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down ml-3'}></i> </span>
                    
                        <Collapse id="collapse1" isOpen={collapseID}>
                            <CardBody>
                            Climate change causes more storms, and more severe weather conditions such as heavy rainfalls and stronger winds along with increased heating up of the surfaces of the planet. This causes not only more plastic waste to be transported into the ocean but it also causes the breakdown of these plastics in the water, releasing toxic chemicals and micro plastics into the ocean.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                    <span onClick={this.toggleCollapse('collapse0')} className=" click d-flex p-2 transparent blue-text border-bottom border-light "><h5>What are micro-plastics and why should we care? </h5><i className={collapseID === 'collapse0' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down ml-3'}></i> </span>
                    
                        <Collapse id="collapse0" isOpen={collapseID}>
                            <CardBody>
                            Micro-plastics are very tiny pieces of plastic that we cannot see with the naked eye because they are about the size of plankton!They are formed when the sunlight shines on plastics in the sea and causes them to disintegrate. Since these plastics are so tiny, they can easily enter the food chain and not only kill the organisms in it but also cause severe health defects and reduce the quality of life of all organisms.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                    <span onClick={this.toggleCollapse('collapse123')} className=" click d-flex p-2 transparent blue-text border-bottom border-light "><h5>What are harmful effects of micro-plastics? </h5><i className={collapseID === 'collapse123' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down ml-3'}></i> </span>
                    
                        <Collapse id="collapse123" isOpen={collapseID}>
                            <CardBody>
                            Micro-plastics have a wide range of harmful effects from causing food poisoning, suffocation, appetite loss since they cannot be digested and they are very difficult to pass out of the body, starvation, blood poisoning and other diseases and symptoms. Since bacteria and viral bacteria can also be attached to micro-plastics, ingesting them can lead to a range of infections.
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>

                <div id = "product">
                    <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                        Product - Anti Plasti
                    </h2>
                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse2')} className="click d-flex p-2 transparent blue-text border-bottom border-light"><h5>Do I require an internet connection for AntiPlasti?</h5>
                            <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse2" isOpen={collapseID}>
                            <CardBody className = "grey-text">
                                Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse3')} className="click d-flex p-2 transparent blue-text border-bottom border-light"><h5>Can I upgrade my my setup with additional sensors?</h5>
                            <i className={collapseID === 'collapse3' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse3" isOpen={collapseID}>
                            <CardBody>
                                Yes, our modular design allows sensors to be added and removed with ease.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light"> 
                        <span onClick={this.toggleCollapse('collapse5')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Will I receive updates and improvements that are released? Will my Raspberry Pi also receive updates?</h5>
                            <i className={collapseID === 'collapse5' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse5" isOpen={collapseID}>
                            <CardBody>
                                Yes, improvements to our database will be received live and great care has been taken to ensure updates can be made to the Raspberry Pi server without disrupting service.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse6')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>My area is prone to power outages. How will this affect the performance of my monitoring system?</h5>
                            <i className={collapseID === 'collapse6' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse6" isOpen={collapseID}>
                            <CardBody>
                                Our system is designed to restart autonomously and resume data capture and pushing once power has been restores. However, keep in mind that a consistent internet connection is required and disruptions to internet connectivity will affect remote monitoring. Data is still captured and logged during this time.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse7')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Am I liable for any damages to the system? </h5>
                            <i className={collapseID === 'collapse7' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse7" isOpen={collapseID}>
                            <CardBody>
                                As per the contract signed before installation, the equipment (Raspberry Pi, sensors and any relevant housing and connections) are the sole property of PiSynthesis, and are on loan as such. Any damages caused by incorrect handling, storage or negligence will incur costs for replacement and/or repairs.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse8')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>What is included in my PiDronics package?</h5>
                            <i className={collapseID === 'collapse8' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse8" isOpen={collapseID}>
                            <CardBody>
                                Packages include basic, mid-tier and deluxe. The basic package assumes you already have your own sensors and simply require the Raspberry Pi server to connect to, and begin remote monitoring. The mid-tier package includes the Raspberry Pi server, two sensors and includes on-site installation. The deluxe package includes everything found in the mid-tier package, in addition to every relevant sensors to fully monitor and analyse your farm. Every package allows access to our mobile and web app as well as onsite installation.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse9')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>I don't know how to use my system or how to install it.</h5>
                            <i className={collapseID === 'collapse9' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse9" isOpen={collapseID}>
                            <CardBody>
                                No need to worry, on-site installation and training is available for free with the mid-tier and above packages. The basic package will be subject to additional fees for these services.
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
            </Container>
        </Container>
        </div>
        );
    }
}

export default Support;