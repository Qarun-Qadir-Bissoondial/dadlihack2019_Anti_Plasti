import React from 'react';
import {Card, CardBody, Container, Row, MDBIcon, MDBBtn } from 'mdbreact';
// import PropTypes from "prop-types";
// import {withStyles} from "@material-ui/core";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
// import FAQPanel from "../../components/FAQPanel/FAQPanel";

// const styles = {
//     root: {
//         // textAlign: 'center'
//     },
//     center: {
//         textAlign: 'center'
//     }
// };

class About extends React.Component {

    render() {
        return (
        <div className = "container-fluid">
        <Container>
          <Row className="align-items-center mt-5">
              <h1 className="grey-text" style={{margin: "0px"}}>
                  Anti Plasti
              </h1>
              <span className="click border grey-text px-1 border-light rounded ml-2"><MDBIcon icon="tasks" className="grey-text" /></span>
          </Row>
          <hr className="mb-5" />

            {/* About Our Product */} 
            <Card className="my-5 px-3 pb-5 text-center">
                <CardBody>
                    <h2 className="h1-responsive font-weight-bold">
                    Our Product - Anti Plasti
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                    Solving world hunger one step at a time.
                    </p>
                    <img
                    src="/img/1.jpg"
                    className="z-depth-1 img-fluid"
                    alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">About our product</h5>
                    <p className="text-uppercase blue-text">How we can help you.</p>
                    <p className="grey-text">
                    Anti Plasti benefits people wishing to break into hydroponics with little to no prior knowledge and with a low cost of entry. It’s remote monitoring capability reduces risk by providing timely readings on their farm and notifies them if it has reached unsafe levels, compensating for a farmer’s poor education in the field while allowing them to divert their time on other tasks, such as marketing. In addition, we believe the PiDronics system is an important educational tool to introduce young people into the world of agriculture in an engaging environment, since it encapsulates the fields of agriculture, programming and the ever-popular Raspberry Pi. The PiDronics system integrates seamlessly with a hydroponics farm, and the modularity of the system allows various sensors to be integrated and viewable on the app.
                    </p>
                    <ul className="list-unstyled mb-0">

                    <MDBBtn outline floating size="lg" color="white" className="z-depth-1" >
                    <a href="https://github.com/PiDronics" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                        See our Code <MDBIcon icon="github" className="blue-text" />
                    </a>
                    </MDBBtn>
                    </ul>
                </CardBody>
            </Card>
        </Container>
        </div>
        );
    }
}

// const faq = [
//     {
//         "id": 1,
//         "question": "How does climate change affect plastics in the sea?",
//         "answer": "Climate change causes more storms, and more severe weather conditions such as heavy rainfalls and " +
//             "stronger winds along with increased heating up of the surfaces of the planet. This causes not only more " +
//             "plastic waste to be transported into the ocean but it also causes the breakdown of these plastics in " +
//             "the water, releasing toxic chemicals and micro plastics into the ocean"
//     },
//     {
//         "id": 2,
//         "question": "What are micro-plastics and why should we care?",
//         "answer": "Micro-plastics are very tiny pieces of plastic that we cannot see with the naked eye because they" +
//             " are about the size of plankton!They are formed when the sunlight shines on plastics in the sea and " +
//             "causes them to disintegrate. Since these plastics are so tiny, they can easily enter the food chain " +
//             "and not only kill the organisms in it but also cause severe health defects and reduce the quality of " +
//             "life of all organisms."
//     },
//     {
//         "id": 3,
//         "question": "What are harmful effects of micro-plastics?",
//         "answer": "Micro-plastics have a wide range of harmful effects from causing food poisoning, suffocation, " +
//             "appetite loss since they cannot be digested and they are very difficult to pass out of the body, " +
//             "starvation, blood poisoning and other diseases and symptoms. Since bacteria and viral bacteria " +
//             "can also be attached to micro-plastics, ingesting them can lead to a range of infections."
//     }

// ];


// class About extends React.Component {

//     render() {
//         const panels = faq.map((item, key) => {
//                 return <FAQPanel key={item.id} question={item.question} answer={item.answer}/>
//         });

//         return (
//             <div align='center'>
//                 <Typography component="h2" variant="display3" gutterBottom>
//                     About
//                 </Typography>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//                     culpa qui officia deserunt mollit anim id est laborum.
//                 </p>

//                 <Divider />

//                 <Typography component="h3" variant="display3" gutterBottom>
//                     FAQ
//                 </Typography>

//                 {panels}

//                 {/*<FAQPanel question = "Question 1" answer = "Answer 1"/>*/}
//                 {/*<FAQPanel question = "Question 2" answer = "Answer 2"/>*/}
//                 {/*<FAQPanel question = "Question 3" answer = "Answer 3"/>*/}
//             </div>
//         )
//     }
// }

// About.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(About);

export default About;