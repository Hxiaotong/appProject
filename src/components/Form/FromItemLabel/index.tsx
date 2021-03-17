import React from 'react'
import './index.scss'
import Input from '@/components/Form/Input'

function LabelCard(props: any) {
    const {filed, getGroupData} = props
    const formItemMap: any = {
        input: <Input filed={filed} getGroupData={getGroupData}></Input>
    }

    return (
        <div className="form-label-card">
            <div className="form-label-card-label">{filed.label}</div>
            {formItemMap[filed.type]}
        </div>
    )
}

export default LabelCard