import { useState } from "react";
import "./index.css";

export function App() {
  const [myName, setMyName] = useState("Solli");
  const [email, setEmail] = useState("");

  return (
    <>
      <h2>Hello world</h2>
      <div>myName</div>
      <div>{myName}</div>
      <div>
        <input value={myName} onChange={(e) => setMyName(e.target.value)} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => alert("submitted:" + email)}>Submit</button>
      </div>
    </>
  );
}

export default App;
