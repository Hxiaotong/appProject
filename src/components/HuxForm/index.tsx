// plugin document url : https://github.com/alibaba/formily/blob/master/packages/react-schema-renderer/README.zh-cn.md#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B
import React from 'react'
import { ISchema, ISchemaFormActions, IFormEffect, SchemaForm, registerFormFields, registerVirtualBox } from '@formily/react-schema-renderer'
import Form from './Form'
import FormItem from './FormItem'
import Input from './Input'
import Picker from './Picker'
import FormBlock from './FormBlock'

registerFormFields({
    'input': Input,
    'picker': Picker
})

registerVirtualBox('block', FormBlock)

interface HuxFromProps {
    schema: ISchema,
    actions?: ISchemaFormActions,
    effects?: IFormEffect

}

export default (props: HuxFromProps) => {
    const { schema, actions } = props
    console.log(schema, 'schema')
    return (
        <SchemaForm
            schema={schema}
            actions={actions}
            formComponent={Form}
            formItemComponent={FormItem}
        />
    )
}