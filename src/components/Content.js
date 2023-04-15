import Card from "./Card";

function Content({ items, setModalOpened, setModalLink }) {
  return (
    <div className="contentBlock">
      {items.map((item, index) => (
        <Card
          item={item}
          index={index}
          setModalOpened={setModalOpened}
          setModalLink={setModalLink}
        />
      ))}
    </div>
  );
}

export default Content;
