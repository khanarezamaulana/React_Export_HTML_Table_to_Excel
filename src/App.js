import React from 'react';
import ReactToExcel from 'react-html-table-to-excel'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <table border='1' id='table-to-xls'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Khana</td>
              <td>Reza</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Khana</td>
              <td>Reza</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Khana</td>
              <td>Reza</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>

        <ReactToExcel 
          className='download-table-xls-button'
          table='table-to-xls'
          filename='excelFile'
          sheet='sheet 1'
          buttonText='Download as XLS'
        />
      </div>
    );
  }
}

export default App;
