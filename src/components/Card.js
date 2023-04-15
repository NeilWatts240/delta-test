function Card({ item, index, setModalOpened, setModalLink }) {
  const onClickCard = () => {
    setModalOpened(true);
    setModalLink(item);
  };

  return (
    <div onClick={() => onClickCard()} className="card">
      <img src={item} />
      <p>id:{index}</p>
    </div>
  );
}

export default Card;
