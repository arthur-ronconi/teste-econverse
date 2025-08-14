import { useState, type FormEvent } from "react";
import "./Header.scss";
import HeaderSearchInput from "../components/HeaderSearchInput";

export default function Header() {
  const [searchString, setSearchString] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url =
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
      alert("Libera o CORS pra localhost 😊");
    }
  }

  return (
    <header>
      {/* TOP */}
      <div className="header-top">
        <div>
          <img src="/img/ShieldCheck.png" alt="" />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div>
          <img src="/img/Truck.png" alt="" />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div>
          <img src="/img/CreditCard.png" alt="" />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="header-middle">
        <div className="logo">
          <img src="/img/Logo.png" alt="Econverse" />
        </div>
        <HeaderSearchInput
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onSubmit={handleSubmit}
        />
        <div className="misc-buttons">
          <button>
            <img src="/img/ShippingBox.png" alt="" />
          </button>
          <button>
            <img src="/img/Heart.png" alt="" />
          </button>
          <button>
            <img src="/img/UserCircle.png" alt="" />
          </button>
          <button>
            <img src="/img/ShoppingCart.png" alt="" />
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul>
          <li>
            <a href="#">Todas as categorias</a>
          </li>
          <li>
            <a href="#">Supermercado</a>
          </li>
          <li>
            <a href="#">Livros</a>
          </li>
          <li>
            <a href="#">Moda</a>
          </li>
          <li>
            <a href="#">Lançamentos</a>
          </li>
          <li>
            <a href="#" className="sale">
              Ofertas do dia
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/CrownSimple.png" alt="Coroa" />
              <span>Assinatura</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
