import React, { Component } from 'react'

class Pricing extends Component {
    render() {
        return (
            <div className='mx-5' id='pricing'>
                <hr />

                <div className="pricing-header px-3 py-2 pt-md-3 pb-md-4 mx-auto text-center ">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead px-4">
                        Choose from our range of web design
                         packages within your budget. All-inclusive,
                          professional website design to suit your needs
                           - a starting point, a small business web design
                            package, or a complete e-commerce solution</p>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm position-relative">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Professional Package</h4>
                            </div>
                            <div className="card-body ">
                                <h1 className="card-title pricing-card-title">$34.99 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Custom responsive website design</li>
                                    <li>Up to 10 content pages designed</li>
                                    <li>Unlimited Content Update for 1 year</li>
                                    <li>Domain linking, email, accounts etc</li>
                                    <li>1 year hosting incl SSL certificate</li>
                                    <li>Up to 5 email addresses</li>
                                    <li>24/7 Online Support</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block text-light mx-auto " style={{ backgroundColor: 'rgb(0,120,130)' }}>$2499</button>
                            </div>
                        </div>

                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal"> Standard Package  </h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$24.99 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Custom responsive website design</li>
                                    <li>Up to 5 content pages designed</li>
                                    <li>Unlimited Content Update for 6 months</li>
                                    <li>1 email address</li>
                                    <li>Domain name registration</li>
                                    <li>24/7 Online Support</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block text-light" style={{ backgroundColor: 'rgb(0,120,130)' }}>$1499</button>
                            </div>
                        </div>

                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">E-commerce Package</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$44.99 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Custom responsive website design</li>
                                    <li>Up to 20 content pages designed</li>
                                    <li>Unlimited Content Update for 18 months</li>
                                    <li>Search engine optimised pages</li>
                                    <li>Google analytics</li>
                                    <li>Up to 5 email addresses</li>
                                    <li>1 year advanced hosting incl SSL certificate</li>
                                    <li>Domain name registration</li>
                                    <li>24/7 Online Support</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block text-light" style={{ backgroundColor: 'rgb(0,120,130)' }}>$3499</button>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
            </div >
        )
    }
}
export default Pricing