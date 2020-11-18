import React from 'react';
import { IRouteComponentProps } from 'umi'


const Cart: React.FC<IRouteComponentProps> = ({match}) => {
  return (
    <div>
      <h1>详情页面：{JSON.stringify(match)}</h1>
    </div>
  );
}


export default Cart;
