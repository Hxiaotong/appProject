import React from 'react';
import './index.scss';
import Form from '@/components/Form'
import 'antd-mobile/dist/antd-mobile.css';
import { FormData } from './_form.js'

export default function() {
  return (
    <div>
      <Form filed={FormData}></Form>
    </div>
  );
}
