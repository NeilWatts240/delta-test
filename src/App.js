import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Modal from "./components/Modal";

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [modalLink, setModalLink] = React.useState("");
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get("items.json").then((res) => {
        setItems(res.data);
      });
    } catch (error) {
      console.log("Ошибка при запросе данных");
    }
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Content
          items={items}
          setModalOpened={setModalOpened}
          setModalLink={setModalLink}
        />
      </div>
      {modalOpened && (
        <Modal modalLink={modalLink} setModalOpened={setModalOpened} />
      )}
    </>
  );
}

export default App;
