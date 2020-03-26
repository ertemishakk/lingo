import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let date = new Date();

        return (
            <footer className="page-footer font-small mdb-color pt-4 text-light ">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Lingo Tech</h6>
                            <p> Lingo is serving over 100 companies in web and app development.</p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p>
                                <a href="/" className='text-light'>Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="/" className='text-light'>Help</a>
                            </p>
                        </div>


                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>
                                <i className="fas fa-home mr-3 text-light"></i> 172 Hilton Street Glenroy 3046</p>
                            <p>
                                <i className="fas fa-envelope mr-3 text-light"></i> admin@lingo.com.au</p>
                            <p>
                                <i className="fas fa-phone mr-3 text-light"></i> + 0476 574 771</p>
                            <p>
                                <i className="fas fa-print mr-3 text-light"></i> + 01 234 567 89</p>
                        </div>


                    </div>
                    <hr />
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-center text-md-left">© {date.getFullYear()} Copyright:
                      <a href="https://lingo.com.au/">
                                    <strong className='text-light'> lingo.com.au</strong>
                                </a>
                            </p>

                        </div>



                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://lingo.com.au/" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f text-light"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://lingo.com.au/" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-twitter text-light"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://lingo.com.au/" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus-g text-light"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://lingo.com.au/" className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in text-light"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer