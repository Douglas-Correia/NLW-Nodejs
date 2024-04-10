import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/slug";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { BadRequest } from "./_errors/bad-request";

// Criando evento através do corpo da requisição
// Essa linha withTypeProvider<ZodTypeProvider>() depois da rota, utilizando como objeto um schema aonde passa o body e todas as validações necessárias, tanto body como params e etc...
export async function createEvent(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/events', {
        schema: {
            summary: 'Create an event',
            tags: ['events'],
            body: z.object({
                title: z.string().min(4),
                details: z.string().nullable(),
                maximumAttendees: z.number().int().positive().nullable(),
            }),

            response: {
                201: z.object({
                    eventId: z.string().uuid(),
                })
            },
        },
    }, async (req, res) => {

        // Desestruturando os dados da requisição
        const {
            title,
            details,
            maximumAttendees
        } = req.body;

        // Criando o slug através da função criada
        const slug = generateSlug(title);
        //Verificando se não existe algum evento com o mesmo nome
        const eventWithSameSlug = await prisma.event.findUnique({
            where: {
                slug,
            }
        });

        // Se existe cai no throw
        if (eventWithSameSlug !== null) {
            throw new BadRequest('Another event with same title already exist.')
        }

        // Criando o evento 
        const event = await prisma.event.create({
            data: {
                title,
                details,
                maximumAttendees,
                slug,
            }
        });

        // Retornando uma resposta com o id do evento que foi criada, pode ser usado no front.
        return res.status(201).send({ eventId: event.id });
    });
};