import { React, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const productsList = [{ link: "https://www.ulta.com/p/naked2-basics-eyeshadow-palette-xlsImpprod11151037?sku=2278485", img: 'img/Naked2.png', alt: 'naked2 basics eyeshadow palette', title: 'Naked2 Basics Eyeshadow Palette', price: '$35.00', filters: ['Neutral', 'Muted', 'Light', 'Product', 'Autumn', 'Dark'] },
{ link: "https://www.ulta.com/p/9t-neutral-territory-artistry-palette-pimprod2022883?sku=2578256&sku=2578256", img: 'img/9T-Neutral-Territory-Artistry-Palette.png', alt: '9T Neutral Territory Artistry Palette', title: '9T Neutral Territory Artistry Palette', price: '$9.80', filters: ['Neutral', 'Light', 'Product', 'Autumn', 'Dark'] },
{ link: "https://www.ulta.com/p/retro-eyeshadow-palette-pimprod2037977?sku=2606186", img: 'img/Retro.png', alt: 'Retro Eyeshadow Palette', title: 'Retro Eyeshadow Palette', price: '$69.00', filters: ['Cool', 'Light', 'Product', 'Winter', 'Dark'] },
{ link: "https://www.ulta.com/p/golden-hour-eyeshadow-palette-pimprod2043129?sku=2620700", img: 'img/Golden-Hour-Eyeshadow-Palette.png', alt: 'Golden Hour Eyeshadow Palette', title: 'Golden Hour Eyeshadow Palette', price: '$24.00', filters: ['Warm', 'Light', 'Product', 'Spring', 'Dark'] },
{ link: "https://www.ulta.com/p/original-pure-serum-radiant-natural-liquid-foundation-mineral-spf-20-pimprod2040524?sku=2611600&sku=2611600", img: 'img/Serum-light.png', alt: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20', title: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20', price: '$44.00', filters: ['Cool', 'Light', 'Product', 'Summer', 'Bright'] },
{ link: "https://www.ulta.com/p/original-pure-serum-radiant-natural-liquid-foundation-mineral-spf-20-pimprod2040524?sku=2611600&sku=26116006", img: 'img/Serum-Dark.png', alt: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20 Dark', title: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20', price: '$44.00', filters: ['Warm', 'Dark', 'Product', 'Autumn', 'Spring'] },
{ link: "https://www.ulta.com/p/original-pure-serum-radiant-natural-liquid-foundation-mineral-spf-20-pimprod2040524?sku=2611603", img: 'img/Serum-light2.png', alt: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20 Neutral', title: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20', price: '$24.00', filters: ['Neutral', 'Light', 'Product', 'Summer', 'Autumn', 'Bright'] },
{ link: "https://www.ulta.com/p/original-pure-serum-radiant-natural-liquid-foundation-mineral-spf-20-pimprod2040524?sku=2611813", img: 'img/Serum-MedDark.png', alt: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20 Neutral Dark', title: 'Original Pure Serum Radiant Natural Liquid Foundation Mineral SPF 20', price: '$44.00', filters: ['Neutral', 'Dark', 'Product', 'Summer', 'Autumn'] },
{ link: "https://www.quince.com/women/mongolian-cashmere-mock-neck-sweater?color=raspberry&g_network=x&g_productchannel=online&g_adid=&g_acctid=978-058-8398&g_keyword=&g_adtype=pla&g_keywordid=&g_ifcreative=&g_adgroupid=&g_productid=44880494133418&g_merchantid=128669708&g_partition=&g_campaignid=20497894231&g_ifproduct=product&g_campaign=&utm_source=google&utm_medium=paid_search&utm_campaign=&utm_term=44880494133418&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH51Wuvx_u9RaBjjWJavOLOLnS-M6h8d5fWn2QkqNku_demjFxnLM0J0aAhK_EALw_wcB", img: 'img/Mongolian-sweater.png', alt: 'Mongolian Cashmere Mock Neck Sweater', title: 'Mongolian Cashmere Mock Neck Sweater', price: '$79.90', filters: ['Cool', 'Light', 'Clothing', 'Winter', 'Summer', 'Bright'] },
{ link: "https://www.quince.com/women/100-organic-cotton-boyfriend-crew?color=rust&g_network=x&g_productchannel=online&g_adid=&g_acctid=978-058-8398&g_keyword=&g_adtype=pla&g_keywordid=&g_ifcreative=&g_adgroupid=&g_productid=43441704108202&g_merchantid=128669708&g_partition=&g_campaignid=20656732069&g_ifproduct=product&g_campaign=&utm_source=google&utm_medium=paid_search&utm_campaign=&utm_term=43441704108202&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH518A18LtnCJY3c8eLeeY7hbs_uOWlRZe5BwUd9cUAXVpmkVmagGDKsaAhAwEALw_wcB", img: 'img/Organic-Cotton-Boyfriend-Crew-Sweater.png', alt: '100% Organic Cotton Boyfriend Crew Sweater', title: '100% Organic Cotton Boyfriend Crew Sweater', price: '$49.90', filters: ['Warm', 'Light', 'Clothing', 'Autumn', 'Muted'] },
{ link: "https://www.shopcider.com/product/detail?pid=1036728&style_id=141099&sku_id=193534&currency=USD&local=en&country=US&utm_source=google_shopping&utm_campaign=AdTiger_PLA_US_1_mia_0704&link_id=7001c7f1ab7d435ab832881bd57ad010&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH50n6ouXVwN5xnavhxPnW2QrNPJmRMHJnhzkSyVZ39SC8bE_tIenCOsaAjIzEALw_wcB", img: 'img/v-neck.png', alt: 'Santorini Beach Vacation V-Neck Ruffle Knotted Crop Tank Top', title: 'Santorini Beach Vacation V-Neck Ruffle Knotted Crop Tank Top', price: '$24.00', filters: ['Cool', 'Light', 'Clothing', 'Summer', 'Muted'] },
{ link: "https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=8888370310001&vid=1&tid=bfpl000032&kwid=1&ap=7&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH53zGJnsS0TpOiVuLYR844vcBBSt4TgMH1YqEzZ8dvZeTSSOFlyk8GsaAn9iEALw_wcB&gclsrc=aw.ds#pdp-page-content", img: 'img/Chiffon-Pleated-Maxi-Dress.png', alt: 'Chiffon Pleated Maxi Dress', title: 'Chiffon Pleated Maxi Dress', price: '$102.00', filters: ['Warm', 'Bright', 'Clothing', 'Spring', 'Light'] }]

const filtArray = [{ title: 'Season', filters: ['Autumn', 'Winter', 'Spring', 'Summer'] },
{ title: 'Temperature', filters: ['Cool', 'Warm', 'Neutral'] },
{ title: 'Value', filters: ['Light', 'Dark'] },
{ title: 'Chroma', filters: ['Bright', 'Muted'] }]

function ProductCard(props) {

    const { link, img, alt, title, price, filters } = props;

    const filtersArray = filters.map((filter) => {
        return <p className="filter">{filter}</p>
    })

    // Ask about target='_blank' to open links on another page
    return (

        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <a href={link}>
                <div className="card">
                    <div>
                        <img className="card-img" src={img}
                            alt={alt} />
                        <div className="card-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="align-baseline">{title}
                                        </td>
                                        <td className="align-bottom price">{price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="filters">
                            <div>
                                {filtersArray}
                            </div>
                            <div className="heart-box">
                                <span className="material-icons heart">favorite_border</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}

function ProductsCardList(props) {

    const products = props.products;
    const [sortFilter, setSortFilter] = useState('null');

    const handleClick = (event) => {
        setSortFilter(event.currentTarget.name);
        console.log(event.currentTarget.name);
        console.log(sortedArray.length);
    }

    const sortedArray = products;

    for (let i = 0; i < products.length; i++) {
        if (products[i].filters.includes(sortFilter)) {
            sortedArray.push(products[i]);
        }
    }

    const productsArray = sortedArray.map((product, index) => {
        return <ProductCard key={index} link={product.link} img={product.img} alt={product.alt} title={product.title} price={product.price} filters={product.filters} />
    })

    return (
        <div>
            <div className="flex-filters">
                <div className="col">
                    <ButtonFilter name='Products' onClick={handleClick} label={'Products'}/>
                    <ButtonFilter name='Clothing' onClick={handleClick} label={'Clothing'}/>
                </div>
            </div>
            <div className="row">
                <FiltersList filters={filtArray} />
                <div className="col-xl-10 col-lg-10 products-col">
                    <div className="row">
                        {productsArray}
                    </div>
                </div>
            </div>
        </div>

    )
}

function Filter(props) {

    const title = props.title;
    const filters = props.filters;

    const filtersArray = filters.map((filter) => {
        return (
            <div className="element-checkbox">
                <input type="checkbox" id="fall" name="fall" />
                <label for="fall">{filter}</label>
            </div>
        )
    })

    return (
        <div className="col-xl-12 col-lg-12 col-sm-6  seasons">
            <h1 className="title-filter">{title}</h1>
            {filtersArray}
        </div>
    )
}

function FiltersList(props) {

    const filters = props.filters;

    const filtersArray = filters.map((filter, index) => {
        return <Filter key={index} title={filter.title} filters={filter.filters} />
    })

    return (

        <div className="col-xl-2 col-lg-2">
            <div className="row">
                {filtersArray}
            </div>
        </div>
    )
}

function ButtonFilter(props) {

    const callback = props.onClick;
    const label = props.label;

    return (
        <button name={props.name} className="quiz-button" aria-label="products" onClick={callback}>{label}<span
            className="material-icons add">add</span></button>
    )
}



export function ProductsPage() {

    return (
        <div>
            <Nav />
            <div className="products">
                <div className="content">
                    <ProductsCardList products={productsList} />
                </div>
            </div>
            <Footer />
        </div>
    )
}