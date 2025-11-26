import RowItems from './Row-Items';
import { actionsParams, ShoppingBoardProps } from '../intefarces';



const ShoppingBoard = ({ handleRowItem, todoBuyItems: items }: ShoppingBoardProps) => {

  const handlerChange = (params: actionsParams) => {
    const identifier = params.id;
    if (params.action === 'delete') {
      handleRowItem((prev) => prev.filter((item) => item.id !== identifier))

    }

    if (params.action === 'update')
      handleRowItem((prev) =>
        prev.map(
          item => item.id === identifier ?
            { ...item, finish: !item.finish } : item
        )
      )
    return

  }
  return <>
    <section className="mt-10 space-y-3 ">
      <RowItems todoBuyItems={items.filter((itb) => !itb.finish)} handleRowItem={handlerChange} />
    </section><section className="mt-16 space-y-3">
      <h2 className="mb-10 text-3xl text-center font-display">
        Itens já comprados
      </h2>
      <RowItems todoBuyItems={items.filter((itb) => itb.finish)} handleRowItem={handlerChange} />
    </section>
  </>
}
export default ShoppingBoard;