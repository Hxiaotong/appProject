import React from 'react'
import './index.scss'
import FromItemLabel from '@/components/Form/FromItemLabel'

const Card = (props: any)=>{
    const {filed} = props
    return (
        <div className="From-card">
            {
                filed.map((item: any, index: any)=>(
                    <FromItemLabel key={index} filed={item}></FromItemLabel>
                ))
            }
        </div>
    )
}
export default Card