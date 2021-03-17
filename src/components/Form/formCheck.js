export const formCheck = {
    email: (value) =>{
        const regExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        return value && regExp.test(value)
    }
}