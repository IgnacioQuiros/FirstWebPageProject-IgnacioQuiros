import React from "react";

const Card = (props) => {
    //JS Logic
    let title = "Titulo tarjeta"
    return (
        //Html & Js 
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-3 bg-warning bg-gradient">
            <div className="card bg-info bg-gradient" style={{ aspectRatio: "2/5" }}>
                <img src={props.imgSrc} className="card-img-top" alt="..."
                    style={{ width: "100%", height: "40%" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <hr></hr>
                        <h5 className="card-title bg-light border border-warning rounded-pill p-1"
                            style={{ width: "80px", margin: '0 auto' }}>{props.title}</h5>
                        <p className="card-text mt-4 bg-light border border-warning rounded-pill p-4">
                            {props.description}</p>
                    </div>
                    <div style={{ margin: '0 0' }}>
                        <hr></hr>
                        <a href="#" className="btn btn-primary mt-auto">Go Top</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;