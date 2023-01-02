import "./styles.css";
import Grand from "./grandchild";

export default function Child({ name, course }) {
  return (
    <>
      <h1>Hello {name}</h1>
      <h1>Nithya is learning {course}</h1>
      <h2>Nithya is good at </h2>
      <Grand />
    </>
  );
}
