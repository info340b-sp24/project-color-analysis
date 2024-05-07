import React from "react";
import { CardList } from "./components/CardLists";

const cardContentList = [{ card: 1, color: 'card1', stepText: 'step1', title: 'Quiz', text: 'Take the color analysis quiz, answering the questions to the best of your abilities.', step: '01' },
{ card: 2, color: 'card2', stepText: 'step2', title: 'Results', text: 'Get your results for your best color season.', step: '02' },
{ card: 3, color: 'card3', stepText: 'step1', title: 'Filter', text: 'Filter through products and clothing that will work best with your features.', step: '03' },
{ card: 4, color: 'card4', stepText: 'step2', title: 'Upload', text: 'Upload products that work for you.', step: '04' }]

const imgCardContent = [{card: 1, img: "img/Oil-drop.png"},
{card: 2, img: "img/Oil-dropper.png"},
{card: 3, img: "img/cream.png"},
{card: 4, img: "img/hand-with-lotion.png"}]

function App() {

  return (
    <div>
      <CardList cardContent={cardContentList} cardContentImg={imgCardContent} />
      {/* <ImgCardList cardContent={imgCardContent} /> */}
    </div>
  );
}

export default App;
