import { createFormActions, ISchema, IFormEffect } from '@formily/react-schema-renderer'

const actions = createFormActions()

const getSchema = (): ISchema => {
    return {
        type: 'object',
        properties: {
            name: {
                type: 'picker',
            }
        }
    }
}

const effects: IFormEffect = ($, { setFieldState }) => {
    
}

export {actions, getSchema, effects}