import { useState, useEffect } from 'react'

const useFormSubmitVerifiy = (isPass: any) => {
    let nextAble = false
    if (isPass) {
        nextAble = false
    } else {
        nextAble = true
    }
    return nextAble
}

export default useFormSubmitVerifiy