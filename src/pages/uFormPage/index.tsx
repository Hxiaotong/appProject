import React from 'react';
import  './index.scss';
import { getLocale, formatMessage } from 'umi-plugin-locale';
import LuvFrom from '@/components/uForm'
import { actions, getSchema, effects } from './_form'

console.log(getLocale(),'-------ss'); 
export default function() {
  return (
    <div>
      <div>welcome to umi page </div>999
      <LuvFrom
        schema={getSchema()}
        actions={actions}
        effects={effects}
      />
      <div>333
        {
          formatMessage({ id: 'name' })
        }
      </div>
    </div>
  );
}
