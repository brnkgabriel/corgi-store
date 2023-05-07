import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik'; 
import { Link } from '@builder.io/qwik-city';
import type { iCorgis, iCorgisBasket } from '~/types/interfaces';
import Modal from '../modal/modal';

interface iStore {
  scrolled: boolean;
  numItems: number;
  modal: boolean;
  cart: iCorgis[]
}

export default component$(() => {

  const store = useStore<iStore>({
    scrolled: false,
    numItems: 0,
    modal: false,
    cart: []
  })

  useVisibleTask$(() => {
    if (localStorage.getItem("corgi-basket")) {
      const corgisBasket = JSON.parse(localStorage.getItem("corgi-basket") as string) as iCorgisBasket 
      const numItemsInBasket = corgisBasket.items.length
      store.numItems = numItemsInBasket
      store.cart = corgisBasket.items
    }
  })

  const onClose = $(() => {store.modal = false})

  return (
    <header class={store.scrolled ? "bg-slate-900 shadow" : "bg-transparent"} document:onScroll$={() => {
      if (window.scrollY > 0) {
        store.scrolled = true
      } else {
        store.scrolled = false
      }
    }}>
      <Link href="/">Corgitto</Link>
      <div class="text-xl sm:text-3xl relative cursor-pointer" onClick$={() => {
        store.modal = true
      }}>
        <i class="fa-solid fa-cart-shopping"></i>
        {
          store.numItems > 0 && <div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center">{ store.numItems }</div>
        }
      </div>
      { store.modal && <Modal cart={store.cart} onClose={onClose} /> }
    </header>
  );
});
