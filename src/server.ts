import app from "./app";

import * as dotenv from "dotenv";
dotenv.config();

var port:any = process.env.PORT;

app.listen(port);

console.log('Server started on port', port);
