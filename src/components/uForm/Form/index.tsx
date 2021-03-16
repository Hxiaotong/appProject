// Form 控制全局表单样式
import React from 'react'
import './index.scss'

interface uFormProps {
    [index: string]: any
}
const Form = (props: uFormProps) => {
    const { children } = props
    return (
        <div className="u-form">{children}</div>
    )
}

export default Form