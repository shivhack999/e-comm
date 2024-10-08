import React from 'react';
import Card from '../../components/card/card';
import Card1 from '../../components/productCards/Card1/Card1';
import './viewItemsStyle.css';

const ViewItems = () => {
  return (
    <>
        <section id="view-items-container" className="w-100" style={{marginTop: "4.1rem"}}>
            <h1 className='text-center' style={{padding: "16px"}}>Top Deals on Shoes</h1>
            <article className='view-items mx-auto p-4'>
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              {/* <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/> */}
            </article>
        </section>
    </>
  )
}

export default ViewItems;