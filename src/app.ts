import Fastify from 'fastify';
import {bootstrap} from 'fastify-decorators';
import {resolve} from 'path'
import cors from '@fastify/cors'
import "reflect-metadata"

function createServer() {
    const server = Fastify({
        logger: true
    });

    server.register(bootstrap, {
        directory: resolve(__dirname, `controllers`),
        mask: /./,
    })
    server.register(cors)
    server.setErrorHandler((error, req, res) => {
        req.log.error(error.toString());
        res.send({error});
    });

    return server;
}

export default createServer;
