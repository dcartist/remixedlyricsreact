import React from 'react'
import { AllCategoryApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { Link } from 'react-router-dom';
export default function Categories() {
    const CategoryList = AllCategoryApi();
    console.log(CategoryList);
    console.log("test")
  return (
    <PageContainer title="Categories" rowClassName="text-left">
        <p>Coming soon... active listing by categories</p>
    <ul className="ml-0 pl-0">
        {/* {CategoryList.map((category, index) => <li key={index}><Link to={`/categories/${cat
        egory.id}`}>{category.name}</Link></li>)} */}
        {CategoryList.map((category, index) => <li key={index}>{category.name}</li>)}
    </ul>
    </PageContainer>
  )
}
