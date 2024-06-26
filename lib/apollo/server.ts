import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import Query from '@/lib/graphql/resolvers/Query';
import Mutation from '@/lib/graphql/resolvers/Mutation';
import typeDefs from '../graphql/typeDefs';
import { makeExecutableSchema } from '@graphql-tools/schema';
// import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../prisma/client';

const schema = makeExecutableSchema({
    resolvers: {
        Query,
        Mutation,
        // Subscription,
    },
    typeDefs,
});

const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req, res) => ({
        req,
        res,
        // prisma,
        greeting: 'hey',
    }),
});

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     // Set CORS headers
//     res.setHeader(
//         'Access-Control-Allow-Origin',
//         'https://studio.apollographql.com'
//     );
//     res.setHeader('Access-Control-Allow-Credentials', 'true');

//     // Handle OPTIONS request for preflight
//     if (req.method === 'OPTIONS') {
//         res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
//         res.setHeader(
//             'Access-Control-Allow-Headers',
//             'Content-Type, Authorization'
//         );
//         res.status(200).end();
//         return;
//     }

//     // Continue with Apollo Server handler if not an OPTIONS request
//     const apolloHandler = startServerAndCreateNextHandler<NextRequest>(server, {
//         context: async () => ({
//             req,
//             res,
//             //    prisma,
//             greeting: 'hey',
//         }),
//     });

//     return apolloHandler(req, res);
// };

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     // Run the CORS middleware
//     await nextCors(req, res, {
//         // Options
//         origin: 'https://studio.apollographql.com',
//         methods: ['GET', 'POST', 'OPTIONS'],
//         credentials: true,
//     });

//     // Handle OPTIONS request for preflight
//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//         return;
//     }

//     // Your existing Apollo Server setup
//     const apolloHandler = startServerAndCreateNextHandler(server, {
//         context: async () => ({
//             req,
//             res,
//             greeting: 'hey',
//         }),
//     });

//     return apolloHandler(req, res);
// };

export default handler;
