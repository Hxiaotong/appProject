import React from 'react';
import './index.scss';
import Form, {action} from '@/components/Form'
import 'antd-mobile/dist/antd-mobile.css';
import { FormData, FormDataValue } from './_form.js'

const formTestPage = ()=> {
  const submit = () => {
    action.submit.emit('addVla', {a: 1});
  }

  return (
    <div className="form-test-page">
      <Form filed={FormData} dataSource={FormDataValue}></Form>
      <button
        onClick={()=>{
          submit()
          console.log(action.formData)
        }}
      >提交</button>
    </div>
  );
}
export default formTestPage
