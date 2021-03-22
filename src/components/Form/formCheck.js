const formCheck = {
    email: (value) =>{
        const regExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        return {
            isPass: value && regExp.test(value),
            errorText: value && regExp.test(value) ? '' : 'pls input right email'
        }
    }
}

export default formCheck