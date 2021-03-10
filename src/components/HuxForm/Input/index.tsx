// FormItem 控制表单局部样式
import React from 'react'
import { connect, IConnectProps, MergedFieldComponentProps } from '@formily/react-schema-renderer'
import './index.scss'

const Input = (props: any) => {
    return (
        <div>
            <input type="text"/>input
        </div>
    )
}

const mapProps = (
    props: IConnectProps,
    filedProps: MergedFieldComponentProps
) => {

}

export default connect({
    getProps: mapProps
})(Input)