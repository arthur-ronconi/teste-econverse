import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <h1>
          Venha conhecer nossas <br />
          promoções
        </h1>
        <h2>
          <span>50% Off</span> nos produtos
        </h2>
      </div>
      <button>Ver produto</button>
    </div>
  );
}
