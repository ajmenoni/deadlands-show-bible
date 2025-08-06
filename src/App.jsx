import { useState } from "react";
import React from "react";
import entries from "./entries";
import Entry from "./components/Entry";
import HeaderNav from "./components/HeaderNav";

function App() {
  const [type, setType] = React.useState("cast");
  const filteredEntries = entries.filter((entry) => entry.type === type);

  return (
    <div className="view">
      <h1>Last Time on Deadlands...</h1>
      <HeaderNav onTypeChange={setType} />
      <div className="container">
        {filteredEntries.map((entry) => (
          <Entry
            key={entry.id}
            title={entry.name}
            content={entry.text}
            image={entry.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
