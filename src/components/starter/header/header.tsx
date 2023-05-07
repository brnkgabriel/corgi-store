import { component$, useStore } from '@builder.io/qwik'; 

export default component$(() => {

  const store = useStore({ scrolled: false })


  return (
    <header class={store.scrolled ? "bg-slate-900 shadow" : "bg-transparent"} document:onScroll$={() => {
      if (window.scrollY > 0) {
        store.scrolled = true
      } else {
        store.scrolled = false
      }
    }}>
      <h1>Corgitto</h1>
      <div class="text-xl sm:text-3xl">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
});
