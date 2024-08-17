import Header from "../components/header.jsx";
import { useState } from "react";

import CORE_CONCEPTS from "./data.js";
import { EXAMPLES } from "./data.js";

import CoreConcepts from "../components/CoreStyles.jsx";
import Btn1 from "../components/MenuBot.jsx";
({ babel: true });

function RUN() {
  const [Aa, Bb] = useState();

  function handleSelect(name) {
    Bb(name);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section className="BtnList">
          <h2>examples</h2>
          <menu>
            <Btn1 isSelect={Aa === "php"} selected={() => handleSelect("php")}>
              php
            </Btn1>
            <Btn1 isSelect={Aa === "jsx"} selected={() => handleSelect("jsx")}>
              jsx
            </Btn1>
            <Btn1 isSelect={Aa === "asp"} selected={() => handleSelect("asp")}>
              asp
            </Btn1>
          </menu>
          <div className="tab-content">
            {!Aa && <p>Select some tab</p>}
            {Aa && (
              <>
                <h3>{EXAMPLES[Aa].title}</h3>
                <p>{EXAMPLES[Aa].description}</p>
                <code>{EXAMPLES[Aa].code}</code>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default RUN;
