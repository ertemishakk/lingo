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
            <div className='position-relative'>
                <div className="masthead">
                    <Fade>
                        <Row>
                            <Col>
                                <h1 className='text-light motto'>
                                    We build amazing websites and
                                    robust software applications.
                                <br />
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