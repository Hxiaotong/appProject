// FormItem 控制表单局部样式
import React from 'react'
import './index.scss'

interface uFormProps {
    [index: string]: any
}
const FormItem = (props: uFormProps) => {
    const { children } = props
    return (
        <div className="u-form-item">{children}</div>
    )
}

export default FormItem