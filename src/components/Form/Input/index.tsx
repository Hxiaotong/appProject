// Form 控制全局表单样式
import React, {useState, useEffect} from 'react'
import './index.scss'

function Form(props: any) {
    const {filed, dataSource, getGroupData} = props
    const [hasError, setHasError] = useState(false)
    const [value, setValue] = useState('')
    const [defaultValue, setDefaultValue] = useState(null)

    const onChange = (event:any) => {
        const value = event.target.value
        if (value.replace(/\s/g, '').length < 11) {
            setHasError(true)
        } else {
            setHasError(false)
        }
        setValue(value)
        getGroupData({
            [filed['name']]: value
        })
    }
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
                {hasError && (<span className="form-content-error">Please fill in the information in this box</span>)}
            </div>
        </>
    )
}

export default Form