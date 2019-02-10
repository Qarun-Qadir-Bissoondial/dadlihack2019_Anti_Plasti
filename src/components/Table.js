import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Table = (props) => {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>Date and Time</th>
          <th>Main Description</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Wind Speed</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {/* <tr>
          <td>{props.date}</td>
          <td>{props.description}</td>
          <td>{props.temperature}</td>
          <td>{props.humidity}</td>
          <td>{props.windspeed}</td>
        </tr> */}
        <tr>
          <td>2019-02-10 15:00:00</td>
          <td>Cloudy</td>
          <td>31.0</td>
          <td>100</td>
          <td>213.008</td>
        </tr>
        <tr>
          <td>2019-02-11 16:00:00</td>
          <td>Clear Sky</td>
          <td>29.0</td>
          <td>100</td>
          <td>218.005</td>
        </tr>
        <tr>
          <td>2019-02-12 19:00:00</td>
          <td>Clear Sky</td>
          <td>33.0</td>
          <td>97</td>
          <td>220.002</td>
        </tr>
        <tr>
          <td>2019-02-13 15:00:00</td>
          <td>Cloudy</td>
          <td>32.0</td>
          <td>99</td>
          <td>210.006</td>
        </tr>
        <tr>
          <td>2019-02-14 17:00:00</td>
          <td>Sunny</td>
          <td>32.0</td>
          <td>100</td>
          <td>215.007</td>
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table;