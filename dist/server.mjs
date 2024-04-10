import {
  errorHandler
} from "./chunk-VFOZ5ULD.mjs";
import {
  checkIn
} from "./chunk-TF24BW67.mjs";
import {
  createEvent
} from "./chunk-KCOJSYYW.mjs";
import "./chunk-WBPE2TTK.mjs";
import {
  getAttendeeBadge
} from "./chunk-VX4W4X5G.mjs";
import {
  getEventAttendees
} from "./chunk-BRW2RUOJ.mjs";
import {
  getEvent
} from "./chunk-VZ4N6RHI.mjs";
import {
  registerForEvent
} from "./chunk-SXFCOAYZ.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";
import "./chunk-AG67VYHJ.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggeUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "#"
});
app.register(fastifySwagger), {
  swagger: {
    consumers: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xF5es da API para o front-end consumir as rotas",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
};
app.register(fastifySwaggeUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
