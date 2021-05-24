import expressLib from "express";
import categoriesRouter from "./routes/categories";

class ExpressApp {
  public express;

  constructor() {
    this.express = expressLib();
    this.initExpress();
    this.defineRoutes();
  }

  private initExpress(): void {
    this.express.use(expressLib.static(__dirname + '/public'));
    this.express.use(expressLib.urlencoded({ extended: false }));
    this.express.use(expressLib.json());
    this.express.set('json spaces', 2); //Pretty-print JSON responses
  }

  private defineRoutes(): void {
    const router = expressLib.Router();

    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });

    this.express.use("/", router);
    this.express.use("/categories", categoriesRouter);
  }
}

export default new ExpressApp().express;