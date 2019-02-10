import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}



class ForecastTable extends React.Component{

    state = {
        dataPresent: false,
        rows: []

    };

    constructor(props) {
        super(props);
        this.getweather().then((data) => {
            console.log(data);
            console.log(this.state);
        });

    }

    async getweather () {

        const weatherAPIkey = "5e8a3f47b6ba4a57126eec42c7f9ef6c";
        const tt_lat = 10.1234;
        const tt_long = -61.1234;
        // e.preventDefault();
        const api_call = await fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + tt_lat + "&lon=" + tt_long + "&appid=" + weatherAPIkey + "&units=metric");
        const data = await api_call.json()
        // console.log(data.list);

        this.setState({dataPresent: true});
        data.list[0].id = 0;
        data.list[7].id = 7;
        data.list[15].id = 15;
        data.list[23].id = 23;
        data.list[31].id = 31;
        data.list[39].id = 39;

        this.setState({rows: [data.list[0], data.list[7], data.list[15], data.list[23], data.list[31], data.list[39]]});
        return [data.list[0], data.list[7], data.list[15], data.list[23], data.list[31], data.list[39]];

        // description: element[num].weather[0].description
        // take 0, 7, 15, 23, 31, 39

        // this.setState({
        //     date: data.list[0].dt_txt,
        //     description: data.list[0].weather[0].description,
        //     temperature: data.list[0].main.temp,
        //     humidity: data.list[0].main.humidity,
        //     windspeed: data.list[0].wind.speed,
        //     error: ""
        // });
    }

    render() {
        return (
            <Paper className={styles.root}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date and Time</TableCell>
                            <TableCell align="right">Weather Description</TableCell>
                            <TableCell align="right">Temperature (C)</TableCell>
                            <TableCell align="right">Humidity (%)</TableCell>
                            <TableCell align="right">Wind Speed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.dt_txt}
                                </TableCell>
                                <TableCell align="right">{row.weather[0].description}</TableCell>
                                <TableCell align="right">{row.main.temp}</TableCell>
                                <TableCell align="right">{row.main.humidity}</TableCell>
                                <TableCell align="right">{row.wind.speed}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );

        return (<p>hello</p>)

    }

}

ForecastTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForecastTable);
