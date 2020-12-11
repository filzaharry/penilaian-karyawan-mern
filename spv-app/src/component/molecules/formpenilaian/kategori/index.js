import React from "react";
import "./kategori.scss";

const Kategori = (props) => {
  return (
    <div className="boxed">
      <p>{props.kategori}</p>
      <input type="radio" id="1" name="skills" value="1" />
      <label for="1">1</label>

      <input type="radio" id="2" name="skills" value="2" />
      <label for="2">2</label>

      <input type="radio" id="3" name="skills" value="3" />
      <label for="3">3</label>

      <input type="radio" id="4" name="skills" value="4" />
      <label for="4">4</label>

      <input type="radio" id="5" name="skills" value="5" />
      <label for="5">5</label>
    </div>
  );
};

export default Kategori;
