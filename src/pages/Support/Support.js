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

                    <Card className=" transparent border-0 border-light">
                    <span onClick={this.toggleCollapse('collapse123')} className=" click d-flex p-2 transparent blue-text border-bottom border-light "><h5>What is the problem we are dealing with? </h5><i className={collapseID === 'collapse123' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down ml-3'}></i> </span>
                    
                        <Collapse id="collapse123" isOpen={collapseID}>
                            <CardBody>
                            Due to climate change, recent weather has proven extremely vicious and unpredictable. To compound this, storms and hurricanes tend to cause massive deposits of oceanic garbage on the shores. 
                            This garbage also poses a treat to fishermen, where it can damage their boats and fill their nets.
                            The toll this garbage has on marine life, is terrible beyond belief.
                            Tourists and citizens looking for a relaxing swim in our country's beaches, find it marred with disgusting refuse.
                            Some plastics releases gases at the highest rate: low-density polyethylene (or LDPE).

                            Over time, plastics give off more and more gas. Light (and to a lesser extent heat) are the primary catalysts for this gaseous release. This leads to an alarming feedback loop: as the climate changes, the planet gets hotter, the plastic gives off more methane, increasing the rate of climate change and the circle continues. 
                            
                            The oceans and humanity, both, would greatly benefit from a more effective way of reducing and raising awareness for the sheer scale of garbage in our beautiful seas.

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
                        <span onClick={this.toggleCollapse('collapse3')} className="click d-flex p-2 transparent blue-text border-bottom border-light"><h5>What Exactly is Anti Plasti?</h5>
                            <i className={collapseID === 'collapse3' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse3" isOpen={collapseID}>
                            <CardBody>
                                All-in-one cloud web app solution that detects plastics out in the ocean which will lead to the eradication of plastics, as well as weather forecasting to warn citizens of upcoming storms, hurricanes and bad weather. 
                                A buoy is used to house the device that will be responsible for detecting the garbage in the ocean.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light"> 
                        <span onClick={this.toggleCollapse('collapse5')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>What will happen to the garbage that is detected?</h5>
                            <i className={collapseID === 'collapse5' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse5" isOpen={collapseID}>
                            <CardBody>
                                Once the plastics are detected, they will be removed. The removal of plastics from the ocean will be sent for recycling. This will allow less methane gases to be released upon the breakdown of plastics. 
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse6')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>My area is prone to power outages. How will this affect the performance of Anti Plasti?</h5>
                            <i className={collapseID === 'collapse6' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse6" isOpen={collapseID}>
                            <CardBody>
                                No, it is going to be solar powered with capacitors.
                            </CardBody>
                        </Collapse>
                    </Card>

                    <Card className=" transparent border-0 border-light">
                        <span onClick={this.toggleCollapse('collapse9')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>How is this system installed?</h5>
                            <i className={collapseID === 'collapse9' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                        </span>
                    
                        <Collapse id="collapse9" isOpen={collapseID}>
                            <CardBody>
                                The raspberry pis with the cameras would already be trained via an image recogntion model on the cloud. This Pi will be placed inside a buoy and will be solar powered with capacitors. The data will be sent live to the Anti Plasti App.
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