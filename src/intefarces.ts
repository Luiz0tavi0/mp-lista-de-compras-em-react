import { Dispatch, SetStateAction } from "react"

export type actionsParams = {
  id: string, action: string
}
export interface TodoItemBuy {
  id: string,
  name: string,
  quantity: string,
  finish: boolean

}

export type RowItemsProps = {
  todoBuyItems: TodoItemBuy[]
  handleRowItem: (params: actionsParams) => void
}
export type ShoppingBoardProps = {
  todoBuyItems: TodoItemBuy[]
  handleRowItem: Dispatch<SetStateAction<TodoItemBuy[]>>
}
