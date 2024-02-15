
const rmsSchema = {
    version: 0,
    title: 'rms schema',
    description: 'describes a schema for all the collections',
    type: 'object',
    primaryKey: '_id',
    properties: {
        _id: {
            type: 'string',
            primary: true,
            maxLength: 255
        },
        data: {
            type: 'array',
        },
        userId: {
            type: 'number'
        }
    }
};

export default rmsSchema;