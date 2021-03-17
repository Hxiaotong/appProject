export const FormData = [
    {
        title: 'Personal Information',
        name: 'personalInformation',
        type: 'card',
        fieldType: 'object',
        properties: [
            {
                name: 'email',
                label: 'Email*',
                type: 'input',
                required: true,
            },
            {
                name: 'spouseName',
                label: 'Spouse name*',
                type: 'input',
                required: true,
            }
        ]
    },
    {
        title: 'Current address',
        name: 'currentAddress',
        type: 'card',
        fieldType: 'object',
        properties: [
            {
                name: 'addressDetail',
                label: 'Address detail*',
                type: 'input',
                required: true,
            },
            {
                name: 'contactNumber',
                label: 'Contact number*',
                type: 'input',
                required: true,
            }
        ]
    }
]

export const FormDataValue = {
    // personalInformation: {
    //     email: '111',
    //     spouseName: '222'
    // },
    // currentAddress: {
    //     addressDetail: '12',
    //     contactNumber: '87'
    // }
}