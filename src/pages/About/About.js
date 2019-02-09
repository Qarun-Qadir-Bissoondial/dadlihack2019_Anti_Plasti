import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FAQPanel from "../../components/FAQPanel/FAQPanel";

const styles = {
    root: {
        // textAlign: 'center'
    },
    center: {
        textAlign: 'center'
    }
};

const faq = [
    {
        "id": 1,
        "question": "How does climate change affect plastics in the sea?",
        "answer": "Climate change causes more storms, and more severe weather conditions such as heavy rainfalls and " +
            "stronger winds along with increased heating up of the surfaces of the planet. This causes not only more " +
            "plastic waste to be transported into the ocean but it also causes the breakdown of these plastics in " +
            "the water, releasing toxic chemicals and micro plastics into the ocean"
    },
    {
        "id": 2,
        "question": "What are micro-plastics and why should we care?",
        "answer": "Micro-plastics are very tiny pieces of plastic that we cannot see with the naked eye because they" +
            " are about the size of plankton!They are formed when the sunlight shines on plastics in the sea and " +
            "causes them to disintegrate. Since these plastics are so tiny, they can easily enter the food chain " +
            "and not only kill the organisms in it but also cause severe health defects and reduce the quality of " +
            "life of all organisms."
    },
    {
        "id": 3,
        "question": "What are harmful effects of micro-plastics?",
        "answer": "Micro-plastics have a wide range of harmful effects from causing food poisoning, suffocation, " +
            "appetite loss since they cannot be digested and they are very difficult to pass out of the body, " +
            "starvation, blood poisoning and other diseases and symptoms. Since bacteria and viral bacteria " +
            "can also be attached to micro-plastics, ingesting them can lead to a range of infections."
    }

];


class About extends React.Component {

    render() {
        const panels = faq.map((item, key) => {
                return <FAQPanel key={item.id} question={item.question} answer={item.answer}/>
        });

        return (
            <div align='center'>
                <Typography component="h2" variant="display3" gutterBottom>
                    About
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <Divider />

                <Typography component="h3" variant="display3" gutterBottom>
                    FAQ
                </Typography>

                {panels}

                {/*<FAQPanel question = "Question 1" answer = "Answer 1"/>*/}
                {/*<FAQPanel question = "Question 2" answer = "Answer 2"/>*/}
                {/*<FAQPanel question = "Question 3" answer = "Answer 3"/>*/}
            </div>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
