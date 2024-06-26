export const TEST_QUERY = `
    query Test($input: String!) {
        test(input: $input) {
           test_message
        }
    }
`;
