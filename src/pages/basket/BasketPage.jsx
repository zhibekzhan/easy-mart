import { useSelector } from "react-redux";

const BasketPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Basket</h2>
      {user.basket.map((item) => (
        <div key={item.id}>
          <p>{item.name} — {item.price} dollar</p>
        </div>
      ))}
    </div>
  );
};

export default BasketPage;