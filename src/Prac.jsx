import { useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

export default function Prac() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("type");
  console.log(filterType);

  const charEls = swCharacters.map((char) => {
    const temp = (
      <div key={char.name}>
        <h3
          style={{
            color: char.type.toLowerCase() === "jedi" ? "blue" : "red",
          }}
        >
          Name: {char.name}
        </h3>
        <p>Type: {char.type}</p>
        <hr />
      </div>
    );
    if (char.type.toLowerCase() === filterType) {
      return temp;
    } else if (filterType === null) {
      return temp;
    }
  });

  return (
    <main>
      <h2>Home</h2>
      {charEls}
    </main>
  );
}
