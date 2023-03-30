import "reflect-metadata"
import "express-async-errors"
import express from 'express';
import contactRoutes from './routes/contact.routes';
import sessionRoutes from './routes/session.routes';
import userRoutes from './routes/user.routes';


const app = express();
app.use(express.json());

app.use("/users", userRoutes)
app.use("/session", sessionRoutes)
app.use("/contacts", contactRoutes)

export default app;