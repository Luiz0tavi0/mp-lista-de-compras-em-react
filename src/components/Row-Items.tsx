import React from 'react';
import trash from './../assets/trash.svg';
import todo from './../assets/todo.svg';
import done from './../assets/done.svg';
import { actionsParams, RowItemsProps, TodoItemBuy } from '../intefarces';



const RowItem = (
  { item, handleItem }: { item: TodoItemBuy, handleItem: (params: actionsParams) => void }
) => {
  return (
    <article className="flex w-full gap-4">
      <div className='flex min-w-7 items-center'
        onClick={() => handleItem({ 'id': item.id, action: 'update' })}
      >
        <img src={item.finish ? done : todo} alt="#" />
      </div>
      <div className={`flex-1 ${item.finish ? 'text-slate-400 line-through' : ''}`}>
        <p>{item.name}</p>
        <p className="text-sm text-slate-400">{item.quantity}</p>
      </div>
      <img
        src={trash}
        alt="ícone de lixeira"
        className="justify-self-end cursor-pointer"
        onClick={() => handleItem({ 'id': item.id, action: 'delete' })}
      />
    </article >
  )
}
const RowItems = ({ todoBuyItems, handleRowItem }: RowItemsProps) => {
  // const handleItem = (params: actionsParams) => {
  //   handleRowItem(params)
  //   console.log(params.id)
  //   console.log(params.action)
  // }

  return (
    <>
      {todoBuyItems.map((tbi) => (
        <React.Fragment key={tbi.id}>
          <RowItem item={tbi} handleItem={handleRowItem} />
          <hr />
        </React.Fragment>
      ))}
    </>
  )
}

export default RowItems
