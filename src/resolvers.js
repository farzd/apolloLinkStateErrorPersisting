export const defaults = {
    checkedin: false
}

export const resolvers = {
    Query: {       
        user: async (_, args, { cache }) => {
            try {
                return await api()
            } catch(e) {
                return {
                    __typename: 'name',
                    name: {
                        response: null,
                        error: 'some error'
                    }
                }   
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

const api = async() => {
    return Promise.reject(new Error('Some Error Msg'))
    return {
        __typename: 'name',
        name: {
            response: 'farzad',
            error: null
        }
    }     
}