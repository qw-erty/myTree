import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import TreeCard from "./component/TreeCard";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      name: "Pride of India",
      scientificname: "Lagerstroemia Speciosa",
      img: "https://images.squarespace-cdn.com/content/v1/59a019287131a5635ebb93af/1617724819531-035IX77W5DF40DB11FMV/mateus-campos-felipe-gNjsoTgxZuI-unsplash.jpg?format=1000w",
      desc: "A large tree blooms in hot summer with pink flowers. A postal stamp was issued by the Indian Postal Department to commemorate this flower",
    },
    {
      id: 2,
      name: "Banyan Tree",
      scientificname: "Ficus Benghalensis",
      img: "https://media.istockphoto.com/photos/the-king-tree-picture-id489035466?k=20&m=489035466&s=612x612&w=0&h=-Zlcab0MKmTtY__fUk19232EklmKL9IYOEUvVxD2j8c=",
      desc: "A banyan, also spelled 'banian', is a fig that begins its life as an epiphyte, i.e. a plant that grows on another plant, when its seed germinates in a crack or crevice of a host tree or edifice.",
    },
    {
      id: 3,
      name: "Mango Tree",
      scientificname: "Mangifera indica",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8W49T5-mHi8vMVy9yxD-STz0jxG0YIatlyw&usqp=CAU",
      desc: "Mangifera indica, commonly known as mango, is a species of flowering plant in the sumac and poison ivy family Anacardiaceae. Mangoes are believed to have originated from the region between northwestern Myanmar, Bangladesh, and India.",
    },
    {
      id: 4,
      name: "Ashoka Vriksha",
      scientificname: "Saraca Asoca",
      img: "https://www.jansatta.com/wp-content/uploads/2018/01/ashoka-tree-puts-away-architectural-flaw.jpg",
      desc: "Mangifera indica, commonly known as mango, is a species of flowering plant in the sumac and poison ivy family Anacardiaceae. Mangoes are believed to have originated from the region between northwestern Myanmar, Bangladesh, and India.",
    },
  ]);
  console.log(content.map((a) => a.img));
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="mainBox">
              {content.map((a) => (
                <TreeCard
                  key={a.id}
                  img={a.img}
                  name={a.name}
                  sname={a.scientificname}
                  description={a.desc}
                />
              ))}
            </div>
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
