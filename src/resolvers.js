export const defaults = {
    getUser: {
        name: 'farzad'
    }
}

export const resolvers = {
    Query: {
        getUser: (_, args, { cache }) => {
            console.log('called');
            const data = {
                getUser: {
                    __typename: 'getUser',
                    name: 'farzad'
                }
            }
            cache.writeData({
                data
            })
            return null
        }
    }
};