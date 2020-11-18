import React from 'react'
import {IListItem} from '@/utils/types'
import { useState } from 'react';
import styles from '@/components/Header.less'

interface IProps{
  addList: (item:IListItem)=>void
}
const Header: React.FC<IProps> = (props)=>{
  const [content, setContent] = useState('');

  function changeContent(e: React.ChangeEvent<HTMLInputElement>){
    setContent(e.target.value);
  }

  function addList(){
    if (content){
      props.addList({
        content,
        complete: false,
        status: true
      })
    }
  }

  return <div className={styles.container}>
    <input type="text" value={content} onChange={changeContent}/>
    <button onClick={addList}>添加</button>
  </div>
};

export default Header;
