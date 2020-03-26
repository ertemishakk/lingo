import React, { Component } from 'react'
import {
    Row, Col
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Services extends Component {
    render() {
        return (
            <div>
                <div className='container py-2'>
                    <Fade>
                        <Row className='my-5'>
                            <Col className='text-center'>
                                <i className="fas fa-code fa-3x "></i>
                                <h5 className='pt-3' >Development</h5>
                                <p className='text-muted'> Partner with our experienced
                                team and develop robust software application, whether
                                you’re a start-up or an established business looking to
                                outshine with innovative ideas!</p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-ruler-combined fa-3x"></i>
                                <h5 className='pt-3' >Website</h5>
                                <p className='text-muted'> Looking to build a new website
                                or transform an existing one that isn’t performing? We
                                create engaging websites that offer the very best in user
                                experience and drive enquiries.</p>
                            </Col>
                            <Col className='text-center'>
                                <i className="fas fa-shopping-cart fa-3x"></i>
                                <h5 className='pt-3' >Ecommerce</h5>
                                <p className='text-muted'>  Feature-rich and conversion-optimised,
                                 our eCommerce websites along with our industry leading experience
                                  give you the control needed to grow your business. </p>
                            </Col>
                        </Row>
                    </Fade>

                    <hr />
                </div>
            </div>
        )
    }
}
export default Services