import React from 'react';
import './index.scss';
import Form, {getFormDataObj} from '@/components/Form'
import 'antd-mobile/dist/antd-mobile.css';
import { FormData } from './_form.js'

export default function() {
  return (
    <div>
      <Form filed={FormData}></Form>
      <button
        onClick={()=>{
          console.log(getFormDataObj)
        }}
      >提交</button>
    </div>
  );
}
