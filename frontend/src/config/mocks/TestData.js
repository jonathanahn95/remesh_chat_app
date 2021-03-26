export const conversation = {
    id: '1',
    type: 'conversation',
    attributes: {
        title: 'General'
    },
    relationships: {
        messages: [
            {id: 1, type: 'message'}
        ]
    }
}


export const message = {
    id: '1',
    type: 'message',
    attributes: {
        text: 'asd'
    },
    relationships: {
        thoughts: [
            {id: 1, type: 'thought'}
        ]
    }
}

export const thought = {
    id: '1',
    type: 'thought',
    attributes: {
        text: 'asd'
    }
}