// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //selectedButton =>'components', 'jsx', 'props', 'state'
  function clickHandle(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  /** To show the Example and it's prop conditionally,
   * based on the value of selectedTopic. For example,
   
   * 1) via a ternary expression:
   * {!selectedTopic ? <p>Please select a topic.</p> : null}
      {selectedTopic ? (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : null}

   * 2) Alternatively, you could use the && "trick":
    {!selectedTopic && <p>Please select a topic.</p>}
    {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )}
   * 3) the one used in the code, an extra variable to
   * keep the logic out of your JSX code:*/

  console.log("APP COMPONENT EXECUTING!");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => clickHandle("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => clickHandle("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => clickHandle("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => clickHandle("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
