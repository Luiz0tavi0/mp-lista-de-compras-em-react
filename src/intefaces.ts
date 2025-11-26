import { Dispatch, SetStateAction } from "react"

export type actionsParams = {
  id: string, action: string
}

export interface BaseInputItem {
  name: string,
  quantity: string,
}

export interface TodoItemBuy extends BaseInputItem {
  id: string,
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

export type InputFormProps = { handleItem: Dispatch<SetStateAction<TodoItemBuy[]>> }