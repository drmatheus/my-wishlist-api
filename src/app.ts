import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { usersRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { wishesRoutes } from "./routes/wishes.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/wishes", wishesRoutes);

app.use(handleErrors);

export default app;
