import "./app.scss";

import Header from "./components/header";
import Headline from "./components/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline header="Posts" desc="click the button to render props" />
      </section>
    </div>
  );
}

export default App;
