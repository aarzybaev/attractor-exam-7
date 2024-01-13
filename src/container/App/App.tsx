import './App.css';
import {useState} from 'react';
import FastFoodItem from '../../components/FastFoodItem/FastFoodItem';
import {FASTFOODITEMS} from './constants';
import removeItemImg from '../../assets/remove.png';

function App() {
  const [order, setOrder] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0}
  ]);

  const addClickHandle = (name: string) => {
    const index = order.findIndex(item => name === item.name);
    const newArr = [...order];
    const newObj = {...order[index]};
    newObj.count = newObj.count + 1;
    newArr[index] = newObj;
    setOrder(newArr);
  };

  const removeItemHandler = (name: string) => {
    const index = order.findIndex(item => name === item.name);
    const newArr = [...order];
    const newObj = {...order[index]};
    newObj.count = newObj.count - 1;
    newArr[index] = newObj;
    setOrder(newArr);
  };
  const getPrice = (name: string): number => {
    const index = FASTFOODITEMS.findIndex(item => item.name === name);
    return FASTFOODITEMS[index].price;
  };

  const getAmount = () => {
    let amount = 0;
    order.forEach(item => {
      const name = item.name;
      const count = item.count;
      const price = getPrice(name);
      amount += count * price;
    });
    if (amount) {
      return (
        <div className="ff-order-item-amount">
          <span>Total price:</span>
          <span>{amount} KGS</span>
        </div>
      );

    } else {
      return (
        <div>
          <p>Order is empty!</p>
          <p>Please some items!</p>
        </div>
      );
    }
  };

  return (
    <div className="ff-container">
      <fieldset className="ff-order">
        <legend>Order details:</legend>
        {
          order
            .filter(item => item.count)
            .map(item => {
              return (
                <div className="ff-order-item" key={Math.random()}>
                  <span>{item.name}</span>
                  <span className="ff-order-item-quan">x{item.count}</span>
                  <span className="ff-order-item-price">{getPrice(item.name)} KGS</span>
                  <img className="ff-order-item-remove" onClick={() => removeItemHandler(item.name)} src={removeItemImg}
                       alt="Remove item"/>
                </div>
              );
            })
        }
        <hr/>
        {getAmount()}
      </fieldset>
      <fieldset className="ff-items">
        <legend>Add items:</legend>
        {
          FASTFOODITEMS.map(item => {
            return (
              <FastFoodItem
                key={item.name}
                name={item.name}
                price={item.price}
                image={item.image}
                addItem={() => addClickHandle(item.name)}
              />
            );
          })
        }
      </fieldset>
    </div>
  );
}

export default App;
