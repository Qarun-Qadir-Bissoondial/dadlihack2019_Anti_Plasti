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
        <tr>
          <td>{props.date}</td>
          <td>{props.description}</td>
          <td>{props.temperature}</td>
          <td>{props.humidity}</td>
          <td>{props.windspeed}</td>
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