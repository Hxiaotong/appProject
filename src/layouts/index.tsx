import React from 'react';
import './index.scss';

const BasicLayout: React.FC = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
