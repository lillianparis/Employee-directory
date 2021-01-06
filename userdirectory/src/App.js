import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Navbar from "./component/Navbar.js";
import Table from "./component/Table.js";
import API from "./utils/API.js"
import React, { useState, useEffect } from "react"
import Content from "./component/Content.js"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello! <code>src/App.js</code> and save to reload.
//        </p>
//         <Hello />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

function App() {
  // Getter and Setter for results & search
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState(true)

  // API call and setting the results to the API call
  // Only one scope for this function 
  useEffect(() => {
    API.getRandomUser().then(res => {
      console.log(res)
      setResults(res.data.results)
    })

  }, [])

  // a-z
  let alphaSort = function (prop, arr) {
    arr.sort(function (a, b) {
      if (a.name[prop] < b.name[prop]) {
        return -1;
      } else if (a.name[prop] > b.name[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  // z-a
  let betaSort = function (prop, arr) {
    arr.sort(function (a, b) {
      if (a.name[prop] < b.name[prop]) {
        return 1;
      } else if (a.name[prop] > b.name[prop]) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    if (sort) {
      alphaSort("first", results)
    }
    else {
      betaSort('first', results)
    }

  }, [sort])


  return (
    <div className="App" >
      <Navbar></Navbar>
      <Hello>
        <input placeholder="Search for employee" type="text" className='searchBar' value={search} onChange={(event) => { setSearch(event.target.value) }}>
        </input>
        {/* console.log in ternary operator similar to if/then*/}
        {/* condtional ? = true : = false */}
        <div width="50%" style={{ margin: '0 auto', alignContent: 'center', textAlign: 'center' }}>
          <Table sort={sort} setSort={setSort}>
            {/* Less than one because it goes through the true conditional */}
            {search.length < 1 ? results.map((result, i) => {
              console.log(result)
              return (
                <Content
                  name={result.name.first + " " + result.name.last}
                  number={i}
                  email={result.email}
                  phone={result.phone}
                  picture={result.picture.large} >
                </Content>
              )
            }) :
              results.map((result, i) => {
                console.log(results)
                if (result.name.first.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <Content
                      name={result.name.first + " " + result.name.last}
                      number={i}
                      email={result.email}
                      phone={result.phone}
                      picture={result.picture.large} >
                    </Content>)
                }
              })
            }
          </Table>
        </div>
      </Hello>
    </div>
  )
}

export default App;
