import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {
    Row, Col
} from 'reactstrap';
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'


class Portfolio extends Component {
    render() {
        return (
            <div className='container py-2' id='portfolio'>
                <Fade>
                    <Row className="pricing-header px-3 py-2 pt-md-3 pb-md-4 mx-auto text-center ">
                        <Col>
                            <h1 className="display-4 ">Our Portfolio</h1>
                        </Col>

                    </Row>
                    <Row className='my-5'>

                        <Col md='4' className='text-center py-3'>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/steelcorp.git'>
                                <img className='portfolio-img  shadow-lg img-fluid' src={image1} alt='lingo portfolio project 1' />
                                <div className="overlay">
                                    <div className="text-dark pt-2">SteelCorp Infrastructure Services</div>
                                </div>
                            </a>

                        </Col>
                        <Col md='4' className='text-center py-3'>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/lodos.git'>
                                <img className='portfolio-img  shadow-lg img-fluid' src={image2} alt='lingo portfolio project 2' />
                                <div className="overlay">
                                    <div className="text-dark pt-2">Lodos Fullstack Application</div>
                                </div>
                            </a>

                        </Col>
                        <Col md='4' className='text-center py-3'>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/resume-mern.git'>
                                <img className='portfolio-img  shadow-lg img-fluid' src={image3} alt='lingo portfolio project 3' />
                                <div className="overlay">
                                    <div className="text-dark pt-2">Personal Resume</div>
                                </div>
                            </a>

                        </Col>
                    </Row>

                </Fade>

            </div >
        )
    }
}
export default Portfolio
