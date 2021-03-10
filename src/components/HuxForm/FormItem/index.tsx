// FormItem 控制表单局部样式
import React from 'react'
import './index.scss'

interface HuxFormProps {
    [index: string]: any
}
const FormItem = (props: HuxFormProps) => {
    const { children } = props
    return (
        <div>{children}</div>
    )
}

export default FormItem