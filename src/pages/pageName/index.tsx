import React from 'react';
import styles from './index.css';
import { getLocale, formatMessage } from 'umi-plugin-locale';
import HuxFrom from '@/components/HuxForm'
import { actions, getSchema, effects } from './_form'

console.log(getLocale(),'-------ss'); 
export default function() {
  return (
    <div className={styles.normal}>
      <div>welcome to umi page </div>999
      <HuxFrom
        schema={getSchema()}
        actions={actions}
        effects={effects}
      />
      <div>333
        {/* {formatMessage(
          {
            id: 'name',
            defaultMessage: '你好，旅行者',
          },
          {
            name: '旅行者',
          },
        )} */}
        {
          formatMessage({ id: 'name' })
        }
      </div>
    </div>
  );
}
