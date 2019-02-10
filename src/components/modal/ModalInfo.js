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

    // Sample request:
// https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5e8a3f47b6ba4a57126eec42c7f9ef6c
// https://api.openweathermap.org/data/2.5/forecast?lat=LATITUDE_OF_BUOY&lon=LONGITUDE_OF_BUOY&appid=APP_ID

// const weather_request = "https://api.openweathermap.org/data/2.5/forecast?lat=" + LATITUDE + "&lon=" + LONGITUDE + "&appid=" + weatherAPIkey;

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
        // else{
        // this.setState({
        //     temperature: undefined,
        //     city: undefined,
        //     country: undefined,
        //     humidity: undefined,
        //     description: undefined,
        //     error: "No Data Available"
        // });
        // }

        render(){
            return (
                <MDBContainer>
                    <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                        <MDBModalBody>
                            <Button getweather={this.getweather}/> 
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
                        <MDBBtn color="primary">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                    </MDBContainer>

                // <div className="d-flex justify-content-around">
                //     <Button id = "toggleBtn" color="info" onClick={this.toggle}>Weather</Button>

                //     <Button getweather={this.getweather}/> 
                //     <Table
                //         date={this.state.date}
                //         description={this.state.description}
                //         temperature={this.state.temperature}
                //         humidity={this.state.humidity}
                //         windspeed={this.state.windspeed}
                //         error={this.state.error}
                //     />
                // </div>
                
                       

            );
        }
      };
    
      export default ModalInfo;