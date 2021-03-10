// FormItem 控制表单局部样式
import React from 'react'
import { connect, IConnectProps, MergedFieldComponentProps } from '@formily/react-schema-renderer'
import './index.scss'

const Picker = (props: any) => {
    return (
        <div className="picker"> picker的世界 </div>
    )
}

const mapProps = (
    props: IConnectProps,
    fieldProps: MergedFieldComponentProps
) => {
    const { loading, errors } = fieldProps
    if (loading) {
        props.state = props.state || 'loading'
    } else if (errors && errors.length) {
        props.state = 'error'
    }
}

export default connect({
    getProps: mapProps
})(Picker)