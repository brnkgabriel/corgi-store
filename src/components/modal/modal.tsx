import { component$ } from '@builder.io/qwik';
import type { QRL } from '@builder.io/qwik'
import type { iCorgis } from '~/types/interfaces';

interface iModal {
  onClose: QRL<() => void>,
  cart: iCorgis[]
}

export default component$((props: iModal) => {

  const { onClose, cart } = props

  return (
    <div class="absolute top-0 right-0 w-full sm:w-[500px] h-screen bg-white z-50 flex flex-col gap-4 p-4 text-slate-900">
      <div class="flex items-center justify-between pb-4 border-b">
        <h1 class="font-bold text-4xl">CART</h1>
        <i class="fa-solid fa-xmark cursor-pointer hover:rotate-45" onClick$={onClose}></i>
      </div>
      {
        cart.length > 0 ? (
          <div class="bg-slate-400 flex flex-col gap-[1px]">
            {
              cart.map((item, idx) => (
                <div key={idx} class="bg-white p-4 flex items-center justify-between">
                  <div class="flex flex-col gap-1">
                    <h2>{ item.name }</h2>
                    <p>{ item.price }</p>
                  </div>
                  <i class="fa-solid fa-xmark cursor-pointer"></i>
                </div>
              ))
            }
          </div>
        ) : (
          <h3 class="text-sm">Your cart is empty</h3>
        )
      }
    </div>
  );
});
