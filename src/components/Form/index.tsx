import React from 'react'
import './index.scss'
import Card from '@/components/Form/Card'

export let getFormDataObj = {}

const Form = (prop: any)=>{
    const {filed, children} = prop

    const blockEle = (item: any) => {
        const blockTypeMap: any = {
            card: <Card filed={item} getFormData={getFormData}></Card>
        }
        return blockTypeMap[item.type]
    }

    const getFormData = (value: any)=>{
        getFormDataObj = {...getFormDataObj, ...value}
    }

    return (
       <>
            <div>
                {
                    filed.length && filed.map((item: any, index: any) =>(
                        <div key={index}>
                            <div className="form-card-title">{item.title}</div>
                            {blockEle(item)}
                        </div>
                    ))
                }
            </div>
            {children}
       </>
    )
}
export default Form