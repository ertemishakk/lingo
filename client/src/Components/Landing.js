import React, { Component } from 'react'
import {
    Col,
    Row,
    Button

} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Landing extends Component {
    render() {
        return (
            <div className='position-relative bg'>
                <div className="masthead">
                    <Fade>
                        <Row>
                            <Col>
                                <h1 className='text-light motto'>
                                    We build amazing websites and
                                    robust software applications
                                <br />
                                    <Button className='text-light portfolio-button border-0 shadow-lg' >View Our Portfolio</Button>
                                </h1>
                            </Col>
                        </Row>
                    </Fade>
                </div>
            </div>
        )
    }
}
export default Landing