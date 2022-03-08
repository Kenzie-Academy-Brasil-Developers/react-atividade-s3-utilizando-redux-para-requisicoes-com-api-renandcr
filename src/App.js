import "./App.css";
import DigimonList from "./components/DigimonList";
import Search from "./components/Search";
import DivMain from "./components/DigimonList/styled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className="App-header">
        <DivMain>
          <DigimonList />
          <Search />
        </DivMain>
      </header>
    </div>
  );
}

export default App;
