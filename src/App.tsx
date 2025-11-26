import logo from './assets/logo.svg';

import { useState } from 'react';
import { TodoItemBuy } from './intefaces';
import ShoppingBoard from './components/shopping-board';
import InputForm from './components/input-form';

export const randomGenerateId = (): string => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`



const App = () => {
  const [items, setItems] = useState<TodoItemBuy[]>([
   
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
      <InputForm handleItem={setItems} />
      <ShoppingBoard todoBuyItems={items} handleRowItem={setItems} />
    </main>
  );
}

export default App;
