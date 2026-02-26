import { useState } from "react";
import "./index.css";
import { ShopCard } from "./components/ShopCard";
import Form from "./components/Form";

export function App() {
  const [myName, setMyName] = useState("Solli");
  const [email, setEmail] = useState("");

  return (
    <>
      <ShopCard />
      <Form />
    </>
  );
}

export default App;
