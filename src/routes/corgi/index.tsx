import { component$, useContext, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MyContext } from '~/root';
import type { iCorgis, iCorgisBasket } from '~/types/interfaces';

export default component$(() => {

  const store = useStore<iCorgis>({
    name: "",
    url: "",
    price: ""
  })

  const contextState = useContext(MyContext)
  console.log(contextState)

  useVisibleTask$(() => {
    const data = JSON.parse(localStorage.getItem("corgitto") as unknown as string) as iCorgis
    store.name = data.name
    store.url = data.url
    store.price = data.price 
  })

  useVisibleTask$(() => {
    const corgiBasket = localStorage.getItem("corgi-basket")
    if (corgiBasket) {
      contextState.items = JSON.parse(corgiBasket).items
    }
  })

  return (
    <div class="flex flex-col gap-2"> 
      <img src={store.url} alt={store.name} class="object-cover " />
      <div class="flex justify-between p-4">
        <h2 class="text-xl">{ store.name }</h2>
        <p>${ store.price }</p>
      </div>
      <button onClick$={() => {
        let currentBasket: iCorgisBasket = { items: [] }
        if (localStorage.getItem("corgi-basket")) {
          currentBasket = JSON.parse(localStorage.getItem("corgi-basket") as string) as iCorgisBasket
        }
        currentBasket.items.push(store)
        localStorage.setItem("corgi-basket", JSON.stringify(currentBasket))
        contextState.items.push(store)
      }} class="border border-slate-900 border-solid px-8 mx-auto py-4">ADOPT</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Corgi',
  meta: [
    {
      name: 'description',
      content: 'Corgi',
    },
  ],
};
