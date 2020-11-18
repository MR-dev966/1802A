import React from 'react'
import { IListItem } from '@/utils/types'
import styles from '@/components/List.less'


interface IProps {
  list: IListItem[],
  changeStatus: (type: string, id: number)=>void
}
const Header: React.FC<IProps> = (props) => {
  return <div className={styles.container}>{
    props.list.map(item => {
      return <li className={item.complete ? styles.line_through : ''}>
        <span>{item.id}</span>
        <span>{item.content}</span>
        <div>
          <button onClick={()=>props.changeStatus('complete', item.id as number)}>完成</button>
          <button onClick={()=>props.changeStatus('delete', item.id as number)}>{item.status?'删除':'恢复'}</button>
        </div>
      </li>
    })
  }</div>
};

export default Header;
