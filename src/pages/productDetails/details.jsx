import React from "react";
import {useRef, useState} from 'react';
import ProductObj from "./productObj";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import ProductImages from "../../components/p_images/pImages";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductReview from "../../components/ProductReview/ProductReview";
import Pcolors from "../../components/Pcolors/Pcolors";
import ProductSizes from "../../components/ProductSizes/ProductSizes";
import ChatBoxFeature from '../../components/chatbox/chatBox';
import BuyCart from "../../components/BuyCart/BuyCart";
import './detailsStyle.css';
import Card2 from "../../components/productCards/Card2/Card2";
import NotifyMe from "../../components/NotifyMe/NotifyMe";

const eachProductObj = ProductObj.categories.tShirt['#12345'];

const Details = () => {
    const [colorClicked, setColorClicked] = useState(0);
    const title = eachProductObj.title; 
    const eachProductPrice = eachProductObj.maxPrice;
    const shippingCharges = eachProductObj.shippingCharges;
    const cntOfProductSelled = eachProductObj.productSelled;
    const pColorsObj = eachProductObj['colors'];
    const listOfColors = Object.keys(pColorsObj);
    const [isSizeChartTrue, setIsSizeChartTrue] = useState(false);
    const imagesList = pColorsObj[listOfColors[colorClicked]].imagesList;
    const availableSizeList = pColorsObj[listOfColors[colorClicked]].availableSize;
    const minSize = Math.min(...availableSizeList);
    const productSizeArray = [];
    const [sizeSelected, setSizeSelected] = useState(null);
    const StylesObject = {
        ReviewStyle: {},
    };

    for( let size = minSize; size <= 12; size += 0.5 ){
        productSizeArray.push(size);
    }

    const openSizeChartFn = () => {
        setIsSizeChartTrue(true);
    }

    const closeSizeChatFn = () => {
        setIsSizeChartTrue(false);
    }
    
    const checkSizeAvailability = (size) => {
        return availableSizeList.has(size);
    }

    const handleColorChanged = (event) => {
        const getNewColorClickedIndex = event.target.getAttribute('data-value');
        if(getNewColorClickedIndex !== colorClicked){   
            setColorClicked(() => getNewColorClickedIndex - 1);
        }
    }

    const handleSizeSelected = (event) => {
        const getCurrentSizeIndex = event.target.getAttribute("data-value");
        // if(checkSizeAvailability(productSizeArray[getCurrentSizeIndex])){
        console.log(event.target.tagName)
        if(event.target.tagName === 'DIV' || event.target.tagName === 'HR'){
            console.log("size selected");
            setSizeSelected(() => getCurrentSizeIndex);
        }
        // }
    }

    const pInfoClassNameRef = useRef(null);
    const [showSectionList, setShowSectionList] = useState([false, false, false, false, false]);

    const handleToOpenForIndex = (key) => () => {
        setShowSectionList(previousList => previousList.map((value, index) => (index === key ? !value : false)) );
    }

    return(
        <>
            <ChatBoxFeature />
            <div className="details-container">

                <div className="details">
                    
                    <div className="p-info-container">
                        
                        <ProductImages imagesList={imagesList} />
                        
                        <table className="p-highlights-container">
                            <thead>
                                <tr>
                                    <th>Tree Runner Go Highlights</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='spec-1'>
                                    <td>Seamless one-piece upper provides maximum comfort</td>
                                </tr>
                                <tr className='spec-1'>
                                    <td>Lightly padded heel collar locks ankle in place</td>
                                </tr>
                                <tr className='spec-1'>
                                    <td>Flexible, cushioned midsole offers a smoother ride</td>
                                </tr>
                            </tbody>
                        </table>

                        <article className="p-info" ref={pInfoClassNameRef}>
                            {/* <div> */}
                            {console.log(showSectionList)}
                                <section className='p-details' onClick={handleToOpenForIndex(0)}>
                                    <div className="p-info-heading">
                                        <span>DETAILS</span>
                                        <span>
                                            <IoIosArrowDown className='updown' style={{transform: showSectionList[0]? 'rotate(180deg)' : 'rotate(360deg)'}}/>
                                        </span>
                                    </div>
                                    <div className={`p-info-description`} style={{display: showSectionList[0]? 'block' : 'none' }}>
                                        <span className="one-liner-info">
                                            Made to Go with the flow, our fan-fave sneaker keeps its signature breathable comfort while hitting the refresh button 
                                            with a new elevated aesthetic and more springy support.
                                        </span>
                                        <div className="explained-info">
                                            <div>
                                                <span>Best For: </span><span>Warm weather, everyday wear, socks optional</span>
                                            </div>
                                            <div>
                                                <span>Breezy Quality: </span><span>Lightweight, breathable tree fiber in the upper material delivers airy, next-level comfort</span>
                                            </div>
                                            <div>
                                                <span>Versatile Design: </span><span>Wear-with-everything style, great for travel</span>
                                            </div>
                                            <div>
                                                <span>Where It's Made: </span><span>Made in India</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='p-specs' onClick={handleToOpenForIndex(1)}>
                                    <div className="p-info-heading">
                                        <span>TESTING & SPECS </span>
                                        <span>
                                            <IoIosArrowDown className='updown' style={{transform: showSectionList[1]? 'rotate(180deg)' : 'rotate(360deg)'}} />
                                        </span>
                                    </div>
                                    <div className="p-info-description" style={{display: showSectionList[1]? 'block' : 'none' }}>
                                        <div className="explained-info">
                                            <div>
                                                <span>Heel Drop: </span><span>7mm (Forefoot: 18.0 mm, Heel: 25.0 mm)</span>
                                            </div>
                                            <div>
                                                <span>Weight: </span><span>9.99oz</span>
                                            </div>
                                            <div>
                                                <span>Outsole: </span><span>Multidirectional 4mm outsole lugs</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='p-durability' onClick={handleToOpenForIndex(2)}>
                                    <div className="p-info-heading">
                                        <span>SUSTAINABILITY</span>
                                        <span>
                                            <IoIosArrowDown className='updown' style={{transform: showSectionList[2]? 'rotate(180deg)' : 'rotate(360deg)'}} />
                                        </span>
                                    </div>
                                    <div className="p-info-description" style={{display: showSectionList[2]? 'block' : 'none' }}>
                                        <span className="one-liner-info">
                                            Our Trail Runner SWTs has a carbon footprint of 9.37 kg CO2e. 
                                        </span>
                                        <h6 style={{margin: '10px 0px -5px 0px'}}>Sustainable Materials:</h6>
                                        <ul className="explained-info">
                                            <li>
                                                FSC-certified TENCEL™ Lyocell (eucalyptus tree fiber) and ZQ Merino Wool blend upper
                                            </li>
                                            <li>
                                                ZQ Merino wool and recycled polyester ripstop 
                                            </li>
                                            <li>
                                                SweetFoam® midsole made with sugarcane-based green EVA
                                            </li>
                                            <li>
                                                FSC-certified natural rubber outsole
                                            </li>
                                            <li>
                                                Bio-based TPU seam tape and heel counter
                                            </li>
                                            <li>
                                                Shoe laces made from recycled plastic bottles
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <section className='p-guide' onClick={handleToOpenForIndex(3)}>
                                    <div className="p-info-heading">
                                        <span>CARE GUIDE</span>
                                        <span>
                                            <IoIosArrowDown className='updown' style={{transform: showSectionList[3]? 'rotate(180deg)' : 'rotate(360deg)'}} />
                                        </span>
                                    </div>
                                    <div className="p-info-description" style={{display: showSectionList[3]? 'block' : 'none' }}>
                                        <ul className="explained-info">
                                            <li>Remove the laces and insoles.</li>
                                            <li>Place shoes in a delicates bag (pro tip: a pillowcase works too).</li>
                                            <li>Choose a gentle cycle with cold water & mild detergent.</li>
                                            <li>Shake out any excess water & set aside to air dry.</li>
                                            <li>Shoes will regain their original shape with one or two wears.</li>
                                        </ul>
                                        <p style={{padding: '5px 0px'}}>Handy tips: Don't put them in the dryer. They'll go back to their original shape in no time. 
                                            You can hand wash your laces and insoles on their own.
                                        </p>
                                    </div>
                                </section>
                                <section className='p-ship-return' onClick={handleToOpenForIndex(4)}>
                                    <div className="p-info-heading">
                                        <span>SHIPPING & RETURNS</span>
                                        <span>
                                            <IoIosArrowDown className='updown' style={{transform: showSectionList[4]? 'rotate(180deg)' : 'rotate(360deg)'}} />
                                        </span>
                                    </div>
                                    <div className="p-info-description" style={{display: showSectionList[4]? 'block' : 'none' }}>
                                        <div className="explained-info">
                                            <div>
                                                Free shipping on orders over 500Rs, and free returns accepted within 30 days. Lightly worn shoes get donated to Soles4Souls.
                                            </div>
                                            <div>
                                                Final Sale items cannot be returned or exchanged. Final Sale items include: gift cards, insoles, and items tagged 
                                                final sale on our website and in OnePrice retail stores.
                                            </div>
                                            <div>
                                                Need it sooner? See if the style you want is available at a store near you.
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            {/* </div> */}
                        </article>
                    </div>


                    <div className="p-user-selection-container">

                        <ProductTitle title={title} />
                        <ProductPrice price={eachProductPrice} shippingCharges={shippingCharges} />
                        <ProductReview cntOfProductSelled={cntOfProductSelled} rating={3.4} />
                        <Pcolors listOfColors={listOfColors} 
                            handleColorChanged={handleColorChanged} 
                            colorClicked={colorClicked} 
                        />
                        <ProductSizes openSizeChartFn={openSizeChartFn} 
                                productSizeArray={productSizeArray}
                                handleSizeSelected={handleSizeSelected}
                                checkSizeAvailability={checkSizeAvailability}
                                sizeSelected={sizeSelected}
                        />
                        {
                            sizeSelected === null ? <BuyCart sizeSelected={sizeSelected} /> : 
                            checkSizeAvailability(productSizeArray[sizeSelected]) ? <BuyCart sizeSelected={sizeSelected} /> :
                            <NotifyMe />
                        }

                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', padding: '64px 0px'}}>
                            <h4 style={{fontWeight: '700'}}>
                                Also Try These
                            </h4>
                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
                                <Card2 />
                                <Card2 />
                            </div>
                        </div>
                    </div>
                    
                    <div className="review-banner">
                        <h1>Women's Trail Runners SWT Reviews</h1>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <h2>3.2</h2>
                            <ProductReview cntOfProductSelled={50} rating={4.2} />
                        </div>
                        
                    </div>
                </div>
            </div>
        
            {isSizeChartTrue && <div className={`check-size-chart ${isSizeChartTrue ? 'pop-up-size-chart' : null}`}>
                <h2 className="title">One Price Chart</h2>
                <div className="content">
                    The One price comes in half sizes to ensure the perfect fit. They fit true to size for most customers. 
                    If you have wide feet or prefer a roomier fit to accommodate toe splay, we suggest going up a half size. For extra wide feet, go up a whole size.
                    Did you know that our shoes are actually unisex? You can easily cross over to find shoes in your size.
                    <div style={{padding: "12px 0px"}}>
                        Did you know that our shoes are actually unisex? You can easiy cross ove to find
                        shoes in your sizes.
                    </div>
                    <div className="size-working">
                        <span style={{fontWeight: "700"}}>Here's how it works:</span>
                        <span>If you wear a men's size 7-7.5, try a women's size 8-8.5.</span>
                        <span>If you wear a women's size 11.5-12, try a men's size 10.5-11.</span>
                    </div>
                    <div className="model-name">TREE RUNNER GO</div>
                    <table className={`size-table`}>
                        <thead>
                            <tr>
                                <th>US</th>
                                <th>UK</th>
                                <th>EU</th>
                                <th>cm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='spec-1'>
                                <td>8</td>
                                <td>7</td>
                                <td>41</td>
                                <td>26</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>8.5</td>
                                <td>7.5</td>
                                <td>41.5</td>
                                <td>26.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>9</td>
                                <td>8</td>
                                <td>42</td>
                                <td>27</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>9.5</td>
                                <td>8.5</td>
                                <td>42.5</td>
                                <td>27.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>10</td>
                                <td>9</td>
                                <td>43</td>
                                <td>28</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>10.5</td>
                                <td>9.5</td>
                                <td>43.5</td>
                                <td>28.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>11</td>
                                <td>10</td>
                                <td>44</td>
                                <td>29</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>11.5</td>
                                <td>10.5</td>
                                <td>44.5</td>
                                <td>29.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>12</td>
                                <td>11</td>
                                <td>45</td>
                                <td>30</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>12.5</td>
                                <td>11.5</td>
                                <td>45.5</td>
                                <td>30.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>13</td>
                                <td>12</td>
                                <td>46</td>
                                <td>31</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>13.5</td>
                                <td>12.5</td>
                                <td>46.5</td>
                                <td>31.5</td>
                            </tr>
                            <tr className='spec-1'>
                                <td>14</td>
                                <td>13</td>
                                <td>47</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="return-policy">Still debating? No worries—our hassle-free 30-day return policy allows you to try us on for size and find the perfect pair.</div>
                </div>
                
                <MdOutlineClose className="close-size-chart" onClick={closeSizeChatFn} />
            </div>}
        </>
    )
}

export default Details;