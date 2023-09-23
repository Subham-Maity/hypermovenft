import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Purchase from "./Components/Pages/Purchase";
import { Provider } from "react-redux";
import store from "./store";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import WalletManager from "./Components/WalletManager";
import { QueryResolver } from "./Components/QueryResolver";
// import Collectibles from "./Components/Pages/Collectibles/CollectiblesHead";
import Consumables from "./Components/Pages/Consumables/ConsumablesHead";
import Page from "./Components/Pages/Collectibles/Page";
import InGameAssetes from "./Components/Pages/in-game-assets-348/page";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function App() {
  return (
    <>
      <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <WalletManager />
          <QueryResolver />
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/Collectibles" element={<Page />} />
            <Route path="/Consumables" element={<Consumables />} />
            <Route path="/in-game-assets" element={<InGameAssetes />} />
          </Routes>
          <Footer />
        </Web3ReactProvider>
      </Provider>
    </>
  );
}

export default App;
