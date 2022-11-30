import { greet } from "@difftastic-wasm/difftastic-wrapper";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Demo</h1>
            <div className="card">
                <button onClick={() => greet("foo")}>greet</button>
            </div>
        </div>
    );
}

export default App;
