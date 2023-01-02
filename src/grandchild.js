import "./styles.css";
import Skill from "./skill";
import { useState } from "react";

export default function Grand() {
  const skills = ["Python", "DataStructures"];
  const [count, Setcount] = useState(0);
  function change() {
    Setcount(count + 1);
  }
  return (
    <div className="Grand">
      {skills.map((skills, index) => (
        <Skill key={skills} name={skills} />
      ))}
      <button onClick={change}> Click to cheer Nithya </button>
      <div>{count}</div>
    </div>
  );
}
