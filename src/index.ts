import express,{ Request,Response,Application } from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5000;
const app: Application = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/',async (req: Request,res: Response) => {
    res.send({message:"Hello !"});
})

app.get("*",async (req: Request,res: Response) => {
    console.log(req.path);
    res.status(404).send({message:"Page not found."});
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}. url http://localhost:${PORT}`);
})