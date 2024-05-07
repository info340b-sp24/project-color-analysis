import React from "react";


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
                    <img src={props.img} className="card card-img" alt="putting lotion on a hand" />
                </div>
            </div>
        </div>
    );
}

export function CardList(props) {

    const cardContent = props.cardContent;
    const cardContentImg = props.cardContentImg;

    const cardArray = cardContent.map((content) => {
        return <StepCard key={content.card} title={content.title} text={content.text} step={content.step} color={content.color} stepText={content.stepText} />
    })

    const cardArrayImg = cardContentImg.map((content) => {
        return <ImgCard key={content.card} img={content.img} />
    })

    const finalArray = [];

    for (let i = 0; i < cardArray.length/2; i++){
        finalArray.push(cardArray[i]);
        finalArray.push(cardArrayImg[i]);
    }

    for (let i = 2; i < cardArray.length; i++){
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

