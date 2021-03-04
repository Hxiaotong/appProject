import React from 'react';
import styles from './index.css';
import { getLocale, formatMessage } from 'umi-plugin-locale'
console.log(getLocale()); 
export default function() {
  return (
    <div className={styles.normal}>
      <div>welcome to umi</div>
      <div>
        {formatMessage(
          {
            id: 'name',
            defaultMessage: '你好，旅行者',
          },
          {
            name: '旅行者',
          },
        )}
      </div>
    </div>
  );
}
