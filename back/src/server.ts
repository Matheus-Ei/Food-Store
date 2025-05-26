import express, { Application } from "express";
import { routes } from "./routes";
import { ENV } from "./core/enviroment";
import cors from "cors";
import { models } from "./core/models";
import fileUpload from "express-fileupload";

class Server {
  public app: Application = express();

  constructor() {
    this.middlewares();
    // this.models();
    this.routes();
  }

  middlewares = () => {
    this.app.use(
      cors({
        origin: ["http://localhost:3000"],
        methods: "GET,PUT,PATCH,POST,DELETE",
        credentials: true,
      }),
    );

    this.app.use(express.json({ limit: "50mb" }));

    this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));

    this.app.use(
      fileUpload({
        createParentPath: true,
        safeFileNames: true,
        preserveExtension: true,
        uriDecodeFileNames: true,
        debug: true,
        limits: { fileSize: 50 * 1024 * 1024 },
      }),
    );
  };

  routes = () => {
    routes(this.app);
  };

  private models = () => {
    return models();
  };

  listen = () => {
    this.app.listen(ENV.SERVER_PORT, () => {
      console.clear();
      console.log("The server is running");
    });
  };
}

const run = new Server();
run.listen();
