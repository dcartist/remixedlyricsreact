import React from 'react'
import { Col } from 'react-bootstrap';
import { AllCategoryApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { Link } from 'react-router-dom';
export default function Home() {

    const categories = AllCategoryApi();
    console.log(categories);

  return (
    <PageContainer title="Remixed Lyrics" rowClassName="text-left" noHeaders>
<Col></Col>
<Col>
<ul>
{categories.map((category) => <li>{category.name}</li>)}
</ul>
</Col>

        
        



    </PageContainer>

  )
}
