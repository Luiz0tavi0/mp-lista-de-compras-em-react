import logo from './assets/logo.svg';

import { useState } from 'react';
import { TodoItemBuy } from './intefarces';
import ShoppingBoard from './components/shopping-board';

const randomGenerateId = (): string => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`



const App = () => {
  const [items, setItems] = useState<TodoItemBuy[]>([
    {
      id: randomGenerateId(),
      name: 'Maçã',
      quantity: '500g',
      finish: false
    },
    {
      id: randomGenerateId(),
      name: 'Leite',
      quantity: '3 caixas',
      finish: false
    },
    {
      id: randomGenerateId(),
      name: 'Maçã',
      quantity: '500g',
      finish: true
    },
    {
      id: randomGenerateId(),
      name: 'Leite',
      quantity: '3 caixas',
      finish: true
    },
  ])

  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2">
        <div className="shrink">
          <label htmlFor="name" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            type="text"
            id="name"
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
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button className="self-end shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
          +
        </button>
      </form>
      <ShoppingBoard todoBuyItems={items} handleRowItem={setItems}/>
    </main>
  );
}

export default App;
