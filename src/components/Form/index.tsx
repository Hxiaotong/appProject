import React from 'react'
import Card from '@/components/Form/Card'

const Form = (prop: any)=>{
    const {filed} = prop

    const blockEle = (type: any, properties: any) => {
        const blockTypeMap: any = {
            card: <Card filed={properties}></Card>
        }
        return blockTypeMap[type]
    }

    return (
        <div>
            {
                filed.length && filed.map((item: any, index: any) =>(
                    <div key={index}>
                        {item.title}
                        {blockEle(item.type, item.properties)}
                    </div>
                ))
            }
        </div>
    )
}
export default Form