import React from "react";
import { Link } from "react-router-dom";
import shamim from "../../assets/shamim.JPG";

const Portfolio = () => {
  return (
    <div>
      <div class="card card-side bg-base-100 shadow-xl my-12 mx-6">
        <figure>
          <img
            src={shamim}
            style={{ width: "400px", height: "500px" }}
            alt="Shamim Bhuiyan"
          />
        </figure>
        <div class="card-body">
          <h1 class="card-title">Name: Shamim Bhuiyan</h1>
          <h2 className="text-xl">Bsc On CSE</h2>
          <h3 className="text-xl">Daffodil Institute of IT</h3>
          <h2 className="text-2xl font-bold">Technologies I Learned: </h2>
          <p>
            <span className="font-bold">Expert :</span> HTML5, CSS3,
            Bootstrap,Tailwind,React Router, Core Javascript.
            <span>
              <p>
                {" "}
                <span className="font-bold">Good:</span> React js,Node
                js,Express js,
              </p>
            </span>
            <span>
              <p>
                <span className="font-bold">Deployment:</span>{" "}
                Netlify,Heroku,Firebase
              </p>
            </span>
            <h2 className="text-xl font-bold mt-8">
              Following Three Projects I complete & With Links:{" "}
            </h2>
            <ul>
              <li>
                1.{" "}
                <a href="https://moneyup.netlify.app/" target="_blank">
                  MoneyUp
                </a>
              </li>
              <li>
                {" "}
                2.{" "}
                <a href="https://e-learning-3406e.web.app/" target="_blank">
                  Online Education
                </a>
              </li>
              <li>
                3.{" "}
                <a
                  href="https://emamnuel-convention-centre.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  Emmanuelle's Convention Center
                </a>{" "}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
