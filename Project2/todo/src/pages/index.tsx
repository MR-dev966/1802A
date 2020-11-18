import React from 'react';
import styles from './index.less';

import Header from '@/components/Header'
import List from '@/components/List'
import { useState } from 'react';
import {IListItem} from '@/utils/types'


export default () => {
  const [list, updateList] = useState<IListItem []>([]);
  function addList(item: IListItem){
    item.id = list.length+1;
    updateList([...list, item]);
  }

  function changeStatus(type: string, id: number){
    let index = list.findIndex(item=>item.id === id);
    let newList = [...list];
    if (type === 'complete'){
      newList[index].complete = !list[index].complete;
    }else{
      newList[index].status = !list[index].status;
    }
    updateList(newList);
  }

  return (
    <div className={styles.container}>
      <Header addList={addList}/>
      <List list={list} changeStatus={changeStatus}/>
    </div>
  );
}
