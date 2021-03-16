import React from 'react';
import  './index.scss';
import { getLocale, formatMessage } from 'umi-plugin-locale'
console.log(getLocale()); 
export default function() {
  return (
    <div>
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
