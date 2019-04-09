import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td> 
              <div>
              <select id="1">
                <option value="0">APP</option>
                <option value="1">Mobile</option>
                <option value="2">Pc</option>
              </select>
            </div>
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
