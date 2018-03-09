export const defaults = {
    pet: 'cat'
}

export const resolvers = {
    Query: {       
        user: (_, args, { cache }) => {
            return Promise.reject(new Error('ERROR'))
            return {
                __typename: 'name',
                name: 'farzad'
            }
        }
    },
    Mutation: {
        mutatePet: (_, { text}, { cache }) => {
            const data = {
                __typename: 'pet',
                pet: text
            };
            cache.writeData({data})
            return null
        }
    }
};