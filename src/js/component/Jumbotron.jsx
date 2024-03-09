import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-light px-3 pb-5 mx-2 mt-3">
            <h1 className="display-4">A Warm Welcome!</h1>
            
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
            </p>
        </div>
    )
}

export default Jumbotron;