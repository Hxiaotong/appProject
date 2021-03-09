// Form 控制全局表单样式
import React from 'react'
import './index.scss'

interface HuxFormProps {
    [index: string]: any
}
const Form = (props: HuxFormProps) => {
    const { children } = props
    return (
        <div className="Hux-form">{children}</div>
    )
}

export default Form