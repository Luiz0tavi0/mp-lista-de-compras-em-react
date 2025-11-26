import React, { useRef, useState } from "react"
import { BaseInputItem, InputFormProps, TodoItemBuy } from "./../intefaces"
import { randomGenerateId } from "../App"


const InputForm = ({ handleItem }: InputFormProps) => {
  const itemInputNameRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<BaseInputItem>({
    name: '', quantity: ''
  })

  const handleNewItem = (event: React.FormEvent) => {
    event.preventDefault()
    const newItemToBuy: TodoItemBuy = {
      id: randomGenerateId(),
      name: value.name,
      quantity: value.quantity,
      finish: false
    }
    handleItem((prev) => [...prev, newItemToBuy])
    setValue({ name: '', quantity: '' })

    itemInputNameRef?.current?.focus()

  }
  return <>
    <form className="flex gap-2" onSubmit={handleNewItem}>
      <div className="shrink">
        <label htmlFor="name" className="block text-xs text-slate-400">
          Item
        </label>
        <input
          ref={itemInputNameRef}
          type="text"
          id="name"
          value={value.name}
          onChange={(event) => setValue(prev => ({
            ...prev, name: event.target.value
          })
          )}
          className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
        />
      </div>
      <div className="shrink">
        <label htmlFor="quantity" className="block text-xs text-slate-400">
          Quantidade
        </label>
        <input

          type="text"
          id="quantity"
          value={value.quantity}
          onChange={(event) => setValue((prev) => {
            return { ...prev, quantity: event.target.value }
          })}
          className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
        />
      </div>
      <button type="submit" className="self-end shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
        +
      </button>
    </form></>
}
export default InputForm