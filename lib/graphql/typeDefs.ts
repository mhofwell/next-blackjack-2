import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Query {
        hello: String!
    }

    type Mutation {
        hello: String!
    }
`;

export default typeDefs;
