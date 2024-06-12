
import React from 'react';
function UI({handleCityChange,search,searchCity, weatherData,loading}) {
  
  return (
    <main className="container">
      <div className="row">
        <div className="col-4 position-absolute top-50 start-50 translate-middle">
          <h3 className='text-center mb-4'>Weather App</h3>
          <div className=" d-flex gap-2 ">
            <input type="text" className='form-control' placeholder='Enter City Name' onChange={handleCityChange}/>
            <button className='btn btn-primary' onClick={search}>Search</button>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h3 className='text-center'>Weather of: {loading ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                
                ) : (
                  <span className="text-danger">{weatherData?.location?.name}</span>
                )}</h3>
              {weatherData.current && !loading && (
                <div className="text-center">
                  <h2 className='mt-4'>{weatherData.current.temp_c} °C</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UI;
