import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProductsGrid from '~/components/products-grid/products-grid';


export default component$(() => {
  return (
    <div class="flex flex-1 bg-yellow-200 flex-col">
      <section class="min-h-screen flex relative">
        <img class="object-cover w-full" src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg" alt="corgi-home-page" />
        <div onClick$={() => window.scrollTo({ top: 600, behavior: 'smooth' })} class="cursor-pointer absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 p-4 px-8 border-2 border-solid border-white text-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 class="relative z-20 text-center">Shop Corgis</h3>
        </div>
      </section>
      <ProductsGrid />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Corgitto',
  meta: [
    {
      name: 'description',
      content: 'Purchase Corgis',
    },
  ],
};
