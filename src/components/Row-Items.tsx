import trash from './../assets/trash.svg';
import todo from './../assets/todo.svg';
import done from './../assets/done.svg';
import { TodoItemBuy } from './../App'

interface RowItemsProps {
  todoBuyItems: TodoItemBuy[]
}

const RowItem = ({ finish, name, quantity }: TodoItemBuy) => {
  return (
    <article className="flex w-full gap-4">
      <div className='flex min-w-7 items-center'>
        <img src={finish ? done : todo} alt="#" />
      </div>
      <div className={`flex-1 ${finish ? 'text-slate-400 line-through' : ''}`}>
        <p>{name}</p>
        <p className="text-sm text-slate-400">{quantity}</p>
      </div>
      <img
        src={trash}

        alt="ícone de lixeira"
        className="justify-self-end"
      />
    </article >
  )
}

const RowItems = ({ todoBuyItems }: RowItemsProps) => {
  return <>
    {todoBuyItems.map((tbi) => {
      return <>
        <RowItem {...tbi} />
        <hr />
      </>
    })

    }
    {/* <article className="flex w-full gap-4">
      <img src={todo} alt="#" />
      <div className="flex-1">
        <p>Leite</p>
        <p className="text-sm text-slate-400">3 Caixas</p>
      </div>
      <img
        src={trash}
        alt="ícone de lixeira"
        className="justify-self-end"
      />
    </article>
    <hr />
    <article className="flex w-full gap-4">
      <img src={todo} alt="#" />
      <div className="flex-1">
        <p>Maçã</p>
        <p className="text-sm text-slate-400">500g</p>
      </div>
      <img
        src={trash}
        alt="ícone de lixeira"
        className="justify-self-end"
      />
    </article>
    <hr /> */}
  </>
}
export default RowItems;