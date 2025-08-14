import "./Departments.scss";

type Data = {
  img: string;
  text: string;
  selected?: boolean;
};

const data: Data[] = [
  {
    img: "/img/Tech.png",
    text: "Tecnologia",
    selected: true,
  },
  {
    img: "/img/Supermarkets.png",
    text: "Supermercado",
  },
  {
    img: "/img/Drinks.png",
    text: "Bebidas",
  },
  {
    img: "/img/Tools.png",
    text: "Ferramentas",
  },
  {
    img: "/img/Health.png",
    text: "Saúde",
  },
  {
    img: "/img/Fitness.png",
    text: "Esportes e Fitness",
  },
  {
    img: "/img/Fashion.png",
    text: "Moda",
  },
];

export default function Departments() {
  return (
    <div className="departments">
      {data.map((item) => (
        <div key={item.text} className="department">
          <a href="#" className={item.selected ? "selected" : ""}>
            <div>
              <img src={item.img} alt={item.text} />
            </div>
            <span>{item.text}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
