import { useState } from "react";

const data = [
  {
    id: 1,
    item: "珍珠奶茶",
    state: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    item: "冬瓜檸檬",
    state: "香濃奶茶搭配QQ珍珠",
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    item: "翡翠檸檬",
    state: "綠茶與檸檬的完美結合",
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    item: "四季春茶",
    state: "香醇四季春茶，回甘無比",
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    item: "阿薩姆奶茶",
    state: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    item: "檸檬冰茶",
    state: "檸檬與冰茶的清新組合",
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    item: "芒果綠茶",
    state: "芒果與綠茶的獨特風味",
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    item: "抹茶拿鐵",
    state: "抹茶與鮮奶的絕配",
    price: 60,
    stock: 20,
  },
];

function Table() {
    const [todo, setTodo] = useState(data);
    const handleAdd = (index) => {
        const updatedTodo = [...todo];
        updatedTodo[index].stock += 1;
        setTodo(updatedTodo);
      };
    
      const handleReduce = (index) => {
        if (todo[index].stock >= 1) {
          const updatedTodo = [...todo];
          updatedTodo[index].stock -= 1;
          setTodo(updatedTodo);
        }
      };
  return (
    <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
        {todo.map((item,index)=>{
            return(<tr key={item}>
               <td>{item.item}</td>
          <td>
            <small>{item.state}</small>
          </td>
          <td>{item.price}</td>
          <td>
          <button onClick={() => handleReduce(index)}>-</button>
              {item.stock}
              <button onClick={() => handleAdd(index)}>+</button>          </td>
            </tr>)
        })}
        </tbody>
        </table>
  );
}

export default Table;