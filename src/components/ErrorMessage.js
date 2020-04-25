import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
    return (
        <div className="not-found">
            <p>There is nothing here. Go back home, please:</p>
            <Link to="/">
                <button>Volver</button>
            </Link>
        </div>
    )
}



export default ErrorMessage