import React from "react";
import "./treecard.css";

 const TreeCard = ({img,name,sname,description}) => {
  
  return (
    <main className="mainContent">
      <section className="imgSection section">
        <img src={img} alt="img"/>
      </section>
      <section className="infoSection section">
        <div>
          <h3>
            Name :{name}
          </h3>
        </div>
        <div>
          <h3>
            Scientific Name :{sname}
          </h3>
        </div>
        <div className="infoSection__description">
          <i>{description}</i>
        </div>
      </section>
    </main>
  );
};

export default TreeCard