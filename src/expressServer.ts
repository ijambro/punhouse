import expressApp from "./expressApp";

const port = process.env.PORT || 3000;

expressApp.listen(port, () => console.log(`Express server for Punhouse is listening on port ${port}`));