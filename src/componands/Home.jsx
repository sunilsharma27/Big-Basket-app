import React, { Component, useState } from 'react';
import "../css/bigbas.css"
let Home = () => {
    return (
        <>
            <div className="home">
                <div className="container py-5 ">
                    <div className="row ">
                        <div className='col '>
                            <div className="card-body py-5">
                                <div className='col mt-5'>
                                    <div id="home" className='body p-5'>
                                        <h1 className='text-center'> <i className='fa fa-shopping-cart ' />
                                            <span> Big Basket</span></h1>
                                        <p id="home" className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ab error repellat deserunt repellendus nostrum recusandae odio perspiciatis, laborum quo saepe itaque dolore similique enim commodi? Assumenda vel veniam reiciendis?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;

