export const defaults = {
    checkedin: false
}

export const resolvers = {
    Query: {       
        user: (_, args, { cache }) => {
            //return Promise.reject(new Error('Some Error Msg'))
            return {
                __typename: 'name',
                name: 'farzad'
            }
        }
    },
    Mutation: {
        mutateCheckIn: (_, { val }, { cache }) => {
            const data = {
                __typename: 'checkedin',
                checkedin: !val
            };
            cache.writeData({data})
            return null
        }
    }
};