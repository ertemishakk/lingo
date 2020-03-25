import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CountUp from 'react-countup';


class About extends Component {
    render() {
        return (
            <div className=' mt-5 container' id='about'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Our Company </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='mt-3 mx-3' >
                            Born in Melbourne’s Docklands, Lingo is one of the pioneers in providing end-to-end web solutions for businesses in Australia. Over the last 15 years, we have transformed businesses by combining our strong technical ability with our deep understanding of the digital landscape.
                            Over time, the digital landscape has transformed, and the way businesses use online technology has changed. Lingo has also evolved, mastering new skills, developing new products and continuing to provide cutting-edge web design, application development, and ecommerce solutions to our clients.
                            Our customer-oriented approach has been a staple of the company over the years, and we’ll continue to measure our success by the accomplishments of our clients.
                </p>
                    </Col>
                </Row>

                <Row className='my-5'>
                    <Col className='text-center'>
                        <h1><CountUp end={15} />+</h1><br />
                        <h3>Years of Experience</h3>
                    </Col>
                    <Col className='text-center'>
                        <h1>1000+</h1><br />
                        <h3>Successful Projects</h3>
                    </Col>
                    <Col className='text-center'>
                        <h1>100%</h1><br />
                        <h3>On Time Delivery</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default About