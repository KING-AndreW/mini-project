import express from "express";
import mysql from "mysql2";
import cors from "cors"
const app = express();
app.use(cors())
app.use(express.json());


const PORT = 8000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "user_data"
})

app.get("/", (request, response) => {
    response.send({ "shut": "up" });
})


app.get("/userdata", (request, response) => {
    const q = "SELECT * FROM new_table";
    db.query(q, (err, data) => {
        if (err) {
            return response.json(err)
        } else {
            return response.json(data)
        }
    })
})

app.post("/register", async (req, res) => {
    //we send some data via a request (req), within this is stored our json containing the username and password
    const username = req.body.username;
    const password = req.body.password;
    //Before adding this data to our database, we need to check whether this already exists in our database or not

    const CHECK = "SELECT username FROM new_table WHERE username= ?;"

    const ADD_USER = "INSERT INTO new_table VALUES (null,?,?);"
    const ADD_USER_SQL_COMMAND = mysql.format(ADD_USER, [username, password]);

    db.query(CHECK, username, (err, result) => {
        if (err) throw (err)

        if (result.length != 0) {
            console.log("User already exists");
            res.send("User already exists retard")
            return null;
        } else {
            db.query(ADD_USER_SQL_COMMAND, async (err, result) => {
                if (err) throw (err);
                console.log("added user");
                res.send("Added data");
                return null;
            });
        }
    });
});


app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const SEARCH_QUERY = "SELECT * FROM new_table WHERE username = ?";
    const SQL_SEARCH_QUERY = mysql.format(SEARCH_QUERY, username);

    db.query(SQL_SEARCH_QUERY, (err, result) => {
        if (err) throw (err);

        if (result.length == 0) {
            console.log("No such user exists");
            res.send({ out: "User does not exist" });
            return null;
        } else {
            if (password == result[0].password) {
                console.log("Logged in");
                res.send(
                    {
                        userid : result[0].id,
                        out    : "logged in",
                    }
                );
                return null;
            } else {
                res.send({ out: "Incorrect Password" });
                return null;
            }
        }
    });

});

// adding an expense
app.post("/expense", (req, response) => {
    let date = new Date();
    date = date.toISOString().slice(0, 19).replace("T", " ");

    const amount = req.body.amount;
    const userid = req.body.userid;
    const desc = req.body.desc;
    const QUERY = "INSERT INTO expenses VALUES (null, ?, ?, ?, ?);"
    const SQL_QUERY = mysql.format(QUERY, [date, amount, userid, desc]);

    db.query(SQL_QUERY, (err, result) => {
        if (err) throw (err);

        response.send("added expense!");

    });
});

//retriving the recent expenses for the user that has logged in, say "not logged in otherwise"
app.get("/expenses/:id", (req, response)=>{
    
    const QUERY = "SELECT * FROM expenses WHERE user_id = ?";
    const FETCH_QUERY = mysql.format(QUERY, req.params.id);

    db.query(FETCH_QUERY, (err, result)=>{
        if(err) throw (err);
        
        response.send(result);
    });

});

app.listen(PORT, () => {
    console.log("Connected to Backend");
})