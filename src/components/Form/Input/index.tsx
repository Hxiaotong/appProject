// Form 控制全局表单样式
import React, {useState, useEffect} from 'react'
import './index.scss'
import eventFn from '../event/index.js'

function Form(props: any) {
    const {filed, rules = () => {}, dataSource, getGroupData} = props
    const [hasError, setHasError] = useState(false)
    const [value, setValue] = useState('')
    const [defaultValue, setDefaultValue] = useState(null)

    const onChange = (event:any) => {
        const value = event.target.value
        checkValue()
        setValue(value)
        getGroupData({
            [filed['name']]: value
        })

    }
    const checkValue = () => {
        if (!rules(value)['isPass']) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }
    const showErrorTip = () => {
        setHasError(true)
    }

    eventFn.on('addVla', (value: any) => {
        checkValue()
    });

    useEffect(()=>{
        setDefaultValue(dataSource)
        getGroupData({
            [filed['name']]: defaultValue
        })
    }, [defaultValue])

    return (
        <>
            <div className="form-label-card-item input-component">
                <div className="form-label-card-item_el input-component-input">
                    <input
                        type="text"
                        placeholder="input your phone"
                        value={defaultValue || value}
                        onChange={onChange}/>
                </div>
                {hasError && (<span className="form-content-error">{rules(value)['errorText']}</span>)}
            </div>
        </>
    )
}

export default Form