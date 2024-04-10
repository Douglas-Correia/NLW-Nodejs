import { prisma } from "../src/lib/prisma";

async function Seed() {
    await prisma.event.create({
        data: {
            id: 'e721546e-7296-4784-b64a-656c2bb3dc36',
            title: 'Unite Sumit',
            slug: 'unite-sumit',
            details: 'Um evento p/ devs apaixonados por código!',
            maximumAttendees: 120,
        }
    })

}

Seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
});