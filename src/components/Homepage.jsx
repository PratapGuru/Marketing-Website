import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="container">
      <h1>Porsche Automobile</h1>

      <header className="header-img">
        <img
          src="https://images.unsplash.com/photo-1471479917193-f00955256257?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Porsche Img"
        />
      </header>
      <h2>Company Overview</h2>
      <p>
        Porsche Automobil Holding SE (“Porsche SE”) is a European Company
        (Societas Europaea) and is headquartered at Porscheplatz 1 in 70435
        Stuttgart, Germany. Porsche SE is a holding company with investments in
        the areas of mobility and industrial technology. In particular, it holds
        the majority of the ordinary shares in Volkswagen AG, one of the leading
        automobile manufacturers in the world. As the parent company of the
        Volkswagen Group, Volkswagen AG directly and indirectly holds
        investments in AUDI AG, SEAT S.A., ŠKODA AUTO a.s., Dr. Ing. h.c. F.
        Porsche AG (“Porsche AG”), TRATON SE (“TRATON”), Volkswagen Financial
        Services AG, Volkswagen Bank GmbH as well as in numerous other companies
        in Germany and abroad. In addition to the investment in Volkswagen, the
        Porsche SE Group holds 25 percent plus one share of the ordinary shares
        in Porsche AG. In addition to these two core investments, the Porsche SE
        Group holds non-controlling interests in more than ten technology
        companies based in North America, Europe and Israel. The investment
        strategy of Porsche SE aims to create sustainable value for its
        shareholders. This is based on the increase in value of assets under
        management as well as dividend distributions. The investments of Porsche
        SE fall into two categories. The first category includes the long-term
        core investment in Volkswagen AG and Porsche AG. The second category
        comprises portfolio investments that Porsche SE generally holds for a
        temporary period of time. Typically, such investments are characterized
        by their high potential for growth and for increasing value during the
        holding period. The sector focus in both investment categories is on
        mobility and industrial technology.
      </p>
      <div className="cars">
        <div className="car-one">
          <Link to="/911-GT3-RS">
            <h2>911-GT3-RS</h2>
          </Link>

          <img
            src="https://www.wsupercars.com/thumbnails/Porsche/2023-Porsche-911-GT3-RS-001.jpg"
            alt=""
          />
        </div>
        <div className="car-two">
          <Link to="/911-GT3">
            <h2>911 GT3</h2>
          </Link>

          <img
            src="https://www.wsupercars.com/thumbnails/Porsche/2022-Porsche-911-GT3-017.jpg"
            alt=""
          />
        </div>
        <div className="car-two">
          <Link to={"/911-Turbo"}>
            <h2>911 Turbo S</h2>
          </Link>

          <img
            src="https://www.wsupercars.com/thumbnails/Porsche/2020-Porsche-911-Turbo-S-011.jpg"
            alt=""
          />
        </div>
      </div>
      <Link to="/ContactUs">
        <button>Contact Us</button>
      </Link>
    </div>
  );
}

export default Homepage;
