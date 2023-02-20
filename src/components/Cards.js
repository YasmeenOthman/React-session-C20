import Card from "./card";
let cardsInfo = [
  {
    desc: "This is the first Image",
    title: "Card1",
    src: "https://i.pinimg.com/474x/24/ae/a5/24aea55775afe6ea1a244cce526885cf.jpg",
  },
  {
    title: "Card2",
    desc: "This is the second card",
    src: "https://i.pinimg.com/474x/3d/39/76/3d39769936f8fa39b67de4f0980ba3b0.jpg",
  },
  {
    title: "Card3",
    desc: "This is the third card",
    src: "https://i.pinimg.com/474x/04/ef/49/04ef497c4b42020d758978df87776124.jpg",
  },
  {
    title: "Card4",
    desc: "This is the fourth card",
    src: "https://i.pinimg.com/474x/14/e0/35/14e0350bec556b86e71df824dda42fff.jpg",
  },
  {
    title: "Card3",
    desc: "This is the third card",
    src: "https://i.pinimg.com/474x/2e/66/c7/2e66c7659eb849808b1674e06fb32e76.jpg",
  },
  {
    title: "Card4",
    desc: "This is the fourth card",
    src: "https://i.pinimg.com/474x/45/02/b6/4502b6a8530ef87e9135a9a5b91bb2b7.jpg",
  },
  {
    title: "Card3",
    desc: "This is the third card",
    src: "https://i.pinimg.com/474x/7f/c9/cd/7fc9cdc3aae702f2c74afba4fe7d5444.jpg",
  },
  {
    title: "Card4",
    desc: "This is the fourth card",
    src: "https://i.pinimg.com/474x/93/f8/67/93f8677597fbb96629e5c8428fc35c48.jpg",
  },
];
// map
function Cards() {
  // using map to iterate over the array and send different values for the props
  return (
    <div className="grid-container">
      {cardsInfo.map((card) => (
        <Card source={card.src} title={card.title} desc={card.desc} />
      ))}
    </div>
  );

  //Repeating the elements  with different values
  // return (
  //   <div className="grid-container">
  //     <Card
  //       source="https://i.pinimg.com/474x/93/f8/67/93f8677597fbb96629e5c8428fc35c48.jpg"
  //       title="Card1"
  //       desc="This is the first react session"
  //     />
  //     <Card
  //       source="https://i.pinimg.com/474x/24/ae/a5/24aea55775afe6ea1a244cce526885cf.jpg"
  //       title="Card2"
  //       desc="This is the second card"
  //     />
  //     <Card
  //       source="https://i.pinimg.com/474x/04/ef/49/04ef497c4b42020d758978df87776124.jpg"
  //       title="Card3"
  //       desc="This is the third  card"
  //     />
  //     <Card
  //       source="https://i.pinimg.com/474x/04/ef/49/04ef497c4b42020d758978df87776124.jpg"
  //       title="Card3"
  //       desc="This is the third  card"
  //     />
  //     <Card
  //       source="https://i.pinimg.com/474x/04/ef/49/04ef497c4b42020d758978df87776124.jpg"
  //       title="Card3"
  //       desc="This is the third  card"
  //     />
  //     <Card
  //       source="https://i.pinimg.com/474x/04/ef/49/04ef497c4b42020d758978df87776124.jpg"
  //       title="Card3"
  //       desc="This is the third  card"
  //     />
  //   </div>
  // );
}
export default Cards;
