import React from 'react';
import styles from './index.css';
import { getLocale, formatMessage } from 'umi-plugin-locale';
console.log(getLocale(),'-------ss'); 
export default function() {
  return (
    <div className={styles.normal}>
      <div>welcome to umi page </div>
      <div>测测 ---- 
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
