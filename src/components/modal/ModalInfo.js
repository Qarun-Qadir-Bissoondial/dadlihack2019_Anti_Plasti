import React from 'react';
import Button from "../button"
import Table from "../Table"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import FirebaseInstance from "../Firebase/Firebase";

const weatherAPIkey = "5e8a3f47b6ba4a57126eec42c7f9ef6c";
const tt_lat = 10.1234;
const tt_long = -61.1234;

class ModalInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            // title: props.title,
            date: new Date().toISOString().substring(0, 23),
            description: undefined,
            temperature: undefined,
            humidity: undefined,
            windspeed: undefined,
            error: undefined
            // successMsg: "",
        };

        this.getweather = this.getweather.bind(this);
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    getweather = async (e) =>{
        e.preventDefault();
        const api_call = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + tt_lat + "&lon=" + tt_long + "&appid=" + weatherAPIkey + "&units=metric");
        const data = await api_call.json();
        console.log(data);

        this.setState({
            date: data.list[0].dt_txt,
            description: data.list[0].weather[0].description,
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            windspeed: data.list[0].wind.speed,
            error: ""
        });
    }
    
        render(){
            return (
                <MDBContainer>

                    {/* <MDBBtn onClick={this.submit.bind(this)}> More Info </MDBBtn> */}
                    <div onClick={this.getweather}>

                    {/* {this.getweather} */}

                    <MDBBtn onClick={this.toggle}> More Info</MDBBtn>
                    {/* {this.getweather} */}
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Weather Forecast for the next 5 Days</MDBModalHeader>
                        {/* {this.getweather()} */}
                        <MDBModalBody>
                            {/* <Button getweather={this.getweather}/>  */}
                            <Table
                                date={this.state.date}
                                description={this.state.description}
                                temperature={this.state.temperature}
                                humidity={this.state.humidity}
                                windspeed={this.state.windspeed}
                                error={this.state.error}
                            />
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                    </div>
                    
                    </MDBContainer>
                    

            );
        }
      };
    
      export default ModalInfo;