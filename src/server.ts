import createServer from './app';
import {AppDataSource} from "./database/dataSource";

const PORT = process.env.PORT || 3000;
const server = createServer();

AppDataSource.initialize().then(() => {
  server.listen(+PORT, "0.0.0.0", (err, host) => {
    if (err) throw err;
    console.log(`🚀 Server listening on ${host}`);
  });
}).catch((error) => console.log(error))
