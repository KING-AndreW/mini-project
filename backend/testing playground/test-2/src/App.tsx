import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import ExpenseCard from "../components/ExpenseCard.tsx"

function App() {
  //User data variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [userState, setUserState] = useState("");

  //Expense variables

  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  //Expenses data
  // will be an array of objects, with amount & desc
  const [recentExpenses, setRecentExpenses] = useState([{}]);

  //METHODS

  const handleRegister = async () => {
    const result = await Axios.post("http://localhost:8000/register", {
      username: username,
      password: password,
    });
    if (result.data == "Added data") {
      setUserState(`Registered user : ${username}`);
    } else {
      setUserState(result.data);
    }
  };

  const handleLogin = async () => {
    console.log("Login");
    const result = await Axios.post("http://localhost:8000/login", {
      username: username,
      password: password,
    });

    setUserId(result.data.userid);
    setUserState(result.data.out);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "");
    setAmount(result);
    console.log(amount);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value;
    setDesc(result);
    console.log(desc);
  };

  const handleExpense = async () => {
    const result = await Axios.post("http://localhost:8000/expense", {
      amount: amount,
      userid: userId,
      desc: desc,
    });

    getRecentExpense();

    console.log(result.data);
  };

  const getRecentExpense = async () => {
    if (userId != "") {
      const result = await Axios.get(
        `http://localhost:8000/expenses/${userId}`
      );
      setRecentExpenses((old) => result.data);
      console.log(result.data);
      console.log("super");
      console.log(recentExpenses);
    } else {
      console.log("Not logged in");
    }
  };


  useEffect(()=>{
    getRecentExpense();
  }, [userId]);

  return (
    <>
      <div>
        <div>
          <h2>Username</h2>
          <input
            onChange={(event) => setUsername(event.target.value)}
            className="username-input"
          ></input>
          <h2>Password</h2>
          <input
            onChange={(event) => setPassword(event.target.value)}
            className="password-input"
          ></input>
          <div>
            <button className="btn" onClick={handleRegister}>
              Register
            </button>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>

          <h3>{userState}</h3>
        </div>

        <div>
          <div>
            <h3>Expense</h3>
            <h2>Amount</h2>
            <input type="text" onChange={handleChange} value={amount}></input>
            <h2>Description</h2>
            <input onChange={handleTextChange}></input>
          </div>

          <button onClick={handleExpense}>Add Expense</button>
        </div>
        <div>
          <h2>Your Recent Expenses</h2>
          
          <div key={userId}>
            {recentExpenses.map((expense: any) => (
              
              <div key={expense.expense_id}><ExpenseCard  data={expense}></ExpenseCard></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
