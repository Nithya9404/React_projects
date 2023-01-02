import "./styles.css";
import Child from "./child";

export default function App(name, course) {
  return (
    <div className="App">
      <Child name="Nithya" course="React" />
    </div>
  );
}
