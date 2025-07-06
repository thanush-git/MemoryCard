// SDK for fetching Pokemon cards
import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "dd1a83aa-43e6-4ce9-a825-e707193b8737" });
import { useState, useEffect } from "react";
//3D Card components
import Tilt from "react-parallax-tilt";

function CardItem({ score, setScore }) {
  //Defining states for the card, initialising with an empty object
  const [cards, setCards] = useState(null);

  //To generate unique sets of cards
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  //A flag for regenerating new cards when a player loses
  const [fresh, setFresh] = useState(false);

  //Making an API call using useEffect to get Pokemon cards set
  useEffect(() => {
    pokemon.card.where({ pageSize: 12, page: randomNumber }).then((result) => {
      setCards(result.data);
    });
  }, [fresh]);
 
  //Checks if your score is 12, which is the max you could get which triggers a won game scenario
  useEffect(() => {
    if (score === 12) {
      alert("Congratulations!! You have a good memory");
      setScore(0);
      setFresh((prev) => !prev);
    }
  }, [score]);

  function cardsRandomize(clickedId) {
    // Create a deep copy of cards with updated clicked flag
    const shuffled = cards.map((card) =>
      card.id === clickedId ? { ...card, clicked: true } : { ...card }
    );

    // Shuffle the copied array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setCards(shuffled);
  }

  function checkValid(clickedId) {
    const clickedCard = cards.find((card) => card.id === clickedId);
    if (!clickedCard.clicked) {
      cardsRandomize(clickedId);
      setScore(score + 1);
    } else {
      alert("You already clicked that!");
      setScore(0);
      fresh ? setFresh(false) : setFresh(true);
    }
  }

  return (
    <div className="cardContainer">
      {cards ? (
        cards.map((card) => {
          return (
            <Tilt>
              <img
                key={card.id}
                src={card.images.small}
                alt={card.name}
                onClick={() => {
                  checkValid(card.id);
                }}
              />
            </Tilt>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

function Card(props) {
  return <CardItem {...props} />;
}

export default Card;
