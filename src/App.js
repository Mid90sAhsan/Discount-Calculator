import React, { Fragment } from 'react';
import './css/Fonts.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import Calculator from './components/Calculator';

function App() {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className="col-md-4 offset-md-4 mt-5 text-center">
                    <h1 className="fw-bold">Discount Calculator</h1>
                </div>

                <Calculator />
            </div>
        </React.Fragment>
    );
}

export default App;
