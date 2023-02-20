import "./card.css";

function Card(props) {
  // props is a js object responsible about rendering and updating the UI
  //   console.log(props);
  return (
    <div className="card-container">
      <h3 className="card-title">{props.title}</h3>
      <img className="card-image" src={props.source} />
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
