import { FastifyInstance } from 'fastify';
import { ClientError } from './errors/client-error';
import { ZodError } from 'zod';

type FastifyErrorHandler = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHandler = (error, _, reply) => {
    if(error instanceof ZodError) {
        return reply.status(400).send({
            message: 'Invalid input',
            errors: error.flatten().fieldErrors
        });
    }
    
    if(error instanceof ClientError) {
        reply.status(400).send({
            message: error.message
        });
    }

    return reply.status(500).send({ message: 'Internal server error.' });
};
