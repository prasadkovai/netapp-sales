import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <table>
        <tr>
          <td> 
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </td>
          <td> <div>This is test app2</div></td>
          <td> <div>This is test app3</div></td>
          <td> <div>This is test app4</div></td>
        </tr>
        <tr>
        <td> <div>This is test app11</div></td>
          <td> <div>This is test app12</div></td>
          <td> <div>This is test app13</div></td>
          <td> <div>This is test app14</div></td>
        </tr>
        <tr>
        <td> <div>This is test app21</div></td>
          <td> <div>This is test app22</div></td>
          <td> <div>This is test app23</div></td>
          <td> <div>This is test app24</div></td>
        </tr>
        <tr>
        <td> <div>This is test app31</div></td>
          <td> <div>This is test app32</div></td>
          <td> <div>This is test app33</div></td>
          <td> <div>This is test app34</div></td>
        </tr>
      </table>
      
      
      </div>
    );
  }
}

export default App;
