import React, {useEffect} from 'react'
import './index.scss'
import Card from '@/components/Form/Card'
import eventFn from './event/index.js'

export let action = {
    formData: {},
    submit: eventFn
}

const Form = (prop: any)=>{
    const {filed = [], dataSource = {}, children, submit} = prop

    const blockEle = (item: any) => {
        const blockTypeMap: any = {
            card: <Card filed={item} dataSource={dataSource[item.name] || {}} getFormData={getFormData}></Card>
        }
        return blockTypeMap[item.type]
    }

    const getFormData = (value: any)=>{
        action.formData = {...action.formData, ...value}
    }
    
    useEffect(() => {
        return function cleanup() {
            eventFn.remove('addVla');
        };
    })

    return (
       <>
            <div>
                {
                    filed.length > 0 && filed.map((item: any, index: any) =>(
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