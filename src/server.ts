import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggeUi from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';

import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod'; import { createEvent } from './routes/create-events';
import { registerForEvent } from './routes/register-form-event';
import { getEvent } from './routes/get-events';
import { getAttendeeBadge } from './routes/get-attendee-badge';
import { checkIn } from './routes/check-in';
import { getEventAttendees } from './routes/get-event-attendees';
import { errorHandler } from './error-handler';
;

const app = fastify();

// Url do frontend
app.register(fastifyCors, {
    origin: '#',
});

app.register(fastifySwagger), {
    swagger: {
        consumers: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass-in',
            description: 'Especificações da API para o front-end consumir as rotas',
            version: '1.0.0'
        },
    },
    transform: jsonSchemaTransform,
};

app.register(fastifySwaggeUi, {
    routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

app.setErrorHandler(errorHandler);

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server running!');
});