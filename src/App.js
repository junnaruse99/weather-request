import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';


function App() {

  // Helps keep track of user input
  const [ search, saveSearch ] = useState({
    city: "",
    country: ""
  });

  // Helps keep track if the user has submit the request
  const [ consult, updateConsult ] = useState(false);

  // Save the result of the API
  const [ result, saveResult ] = useState({});

  const { city, country } = search;

  useEffect( () => {
    const consultAPI = async () => {

      if(consult) {
        const appId = '031060562914963cedcb8bd4d33826ed';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      
        const response = await fetch(url);
        const result = await response.json();
  
        saveResult(result);

        updateConsult(false);

      }
    }
    consultAPI();

  }, [ consult ])


  return (
    <>
      <Header
        title="Weather App"
      />
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Form 
                search={search}
                saveSearch={saveSearch}
                updateConsult={updateConsult}
              />
            </div>
            <div className="col-md-6">
              <Weather result={result} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
