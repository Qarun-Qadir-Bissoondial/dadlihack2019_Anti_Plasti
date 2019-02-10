import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Table = props => {
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
          <td>{this.props.date}</td>
          <td>{this.props.description}</td>
          <td>{this.props.temperature}</td>
          <td>{this.props.humidity}</td>
          <td>{this.props.windspeed}</td>
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