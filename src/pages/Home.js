import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { AllCategoryApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import IntroHeader from "../components/Headers/IntroHeader";
import {GlitchButton} from "../components/Buttons/Buttons"

export default function Home() {

    const categories = AllCategoryApi();

  return (
    <PageContainer title="Remixed Lyrics" rowClassName="text-left" noHeaders>
<Col className="d-flex justify-content-center align-items-center">
<IntroHeader />
</Col>
<Row>
    <h3 className="text-center pb-3"> Warping lyrics 1 song at a time</h3>
    <div className="d-flex justify-content-center"><GlitchButton text="View Remixed Songs" link="/songs" /></div>
</Row>
    </PageContainer>

  )
}
