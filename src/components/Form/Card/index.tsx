import React from 'react'
import './index.scss'
import FromItemLabel from '@/components/Form/FromItemLabel'

const Card = (props: any)=>{
    const {filed, getFormData} = props
    let getGroupDataObj: any = {}
    const getGroupData = (value: any) => {
        getGroupDataObj[filed.name] = {...getGroupDataObj[filed.name], ...value}
        getFormData(getGroupDataObj)
    }

    return (
        <div className="From-card">
            {
                filed['properties'].map((item: any, index: any)=>(
                    <FromItemLabel key={index} filed={item} getGroupData={getGroupData}></FromItemLabel>
                ))
            }
        </div>
    )
}
export default Card