import React from 'react'
import './index.scss'
interface HuxFormBlockProps {
    children: any
}

const FromBlock = (props: HuxFormBlockProps ) => {
    return (
        <div className="Hux-form-block">    {props.children}888777888</div>
    )
}

export default FromBlock