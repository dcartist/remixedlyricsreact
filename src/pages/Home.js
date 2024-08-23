import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { AllCategoryApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { Link } from 'react-router-dom';
import IntroHeader from "../components/Headers/IntroHeader";

export default function Home() {

    const categories = AllCategoryApi();

  return (
    <PageContainer title="Remixed Lyrics" rowClassName="text-left" noHeaders>
<Col className="d-flex justify-content-center align-items-center">
<IntroHeader />
</Col>
<Row>
    <p className="text-center"> Warping lyrics 1 song at a time</p>
</Row>
    </PageContainer>

  )
}
