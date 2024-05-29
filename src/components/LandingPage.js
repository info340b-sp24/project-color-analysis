import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
// import BasicExample from "./Nav";


const cardContentList = [{ card: 1, color: 'card1', stepText: 'step1', title: 'Quiz', text: 'Take the color analysis quiz, answering the questions to the best of your abilities.', step: '01' },
{ card: 2, color: 'card2', stepText: 'step2', title: 'Results', text: 'Get your results for your best color season.', step: '02' },
{ card: 3, color: 'card3', stepText: 'step1', title: 'Filter', text: 'Filter through products and clothing that will work best with your features.', step: '03' },
{ card: 4, color: 'card4', stepText: 'step2', title: 'Upload', text: 'Upload products that work for you.', step: '04' }]

const imgCardContent = [{ card: 1, img: "img/Oil-drop.png", alt: "oil drops on a yellow background" },
{ card: 2, img: "img/Oil-dropper.png", alt: "oil dropper with oil on white background" },
{ card: 3, img: "img/cream.png", alt: "zoom in of lotion" },
{ card: 4, img: "img/hand-with-lotion.png", alt: "putting lotion on a hand" }]

function Introduction() {

    return (
        <div className="color-analysis-text">
            <p className="color-analysis-question">What is a color analysis?</p>
            <p className="color-analysis-answer">A <strong class="highlight">color analysis</strong> is an examination
                that
                is
                meant to determine which colors best
                <strong className="highlight">harmonize</strong> with an individual’s skin tone, <strong
                    className="highlight">enhancing</strong> their features and drawing attention away from wrinkles
                and blemishes.
            </p>
        </div>
    )
}

function HeroContent() {
    return (
        <div className="flex">
            <div className="col hero-text">
                <div className="title-hero-text">
                    <h1>Get your <strong>color</strong><span class="block"><strong>analysis</strong> today</span>
                    </h1>
                </div>
                <div className="body-hero-text">
                    <p>Interested in figuring out what colors best suit your features?
                        Take the quiz to see your perfect color palette and the
                        products that go along with it.</p>
                </div>
                <div className="quiz-hero-button">
                    <Link to="quiz"><button class="quiz-button" aria-label="take quiz"><strong
                        className="button-text">Take
                        quiz</strong><span className="material-icons arrow">north_east</span></button></Link>
                </div>
            </div>
            <div className="md:col">
                <img src="img/hero.png" className="hero-img"
                    alt="smiling woman on a brown background with pink tear drop and circle decorations" />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div className='home'>
            <header>
                {/* <BasicExample /> */}
                <Nav />
                <HeroContent />
            </header>
        </div>
    )
}

function StepCard(props) {

    return (
        <div className="flex-col col-xl-3">
            <div className={`card ${props.color}`}>
                <div className="card-content card-body d-flex flex-column">
                    <div className="card-content-top">
                        <h2 className="card-title"><strong>{props.title}</strong></h2>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-content-bottom">
                        <h2 className={props.stepText}>{props.step}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImgCard(props) {

    return (
        <div className="flex-col col-xl-3">
            <div>
                <div>
                    <img src={props.img} className="card card-img" alt={props.alt} />
                </div>
            </div>
        </div>
    );
}

function CardList(props) {

    const cardContent = props.cardContent;
    const cardContentImg = props.cardContentImg;

    const cardArray = cardContent.map((content) => {
        return <StepCard key={content.card} title={content.title} text={content.text} step={content.step} color={content.color} stepText={content.stepText} />
    })

    const cardArrayImg = cardContentImg.map((content) => {
        return <ImgCard key={content.card} img={content.img} alt={content.alt} />
    })

    const finalArray = [];

    for (let i = 0; i < cardArray.length / 2; i++) {
        finalArray.push(cardArray[i]);
        finalArray.push(cardArrayImg[i]);
    }

    for (let i = 2; i < cardArray.length; i++) {
        finalArray.push(cardArrayImg[i]);
        finalArray.push(cardArray[i]);
    }

    return (
        <div className="home card-instructions flex">
            <div className="flex-row card-container">
                {finalArray}
            </div>
        </div>

    );

}



export function LandingPage() {

    return (
        <div>
            <Hero />
            <Introduction />
            <CardList cardContent={cardContentList} cardContentImg={imgCardContent} />
            <Footer />
        </div>
    );
}
