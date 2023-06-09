import { component$ } from '@builder.io/qwik'; 
import { Link } from '@builder.io/qwik-city';
import type { iCorgis } from '~/types/interfaces';

export default component$((props: iCorgis) => {

  const { url, name, price } = props

  return (
    <Link 
      href="/corgi"
      onClick$={() => {
        localStorage.setItem("corgitto", JSON.stringify({...props}))
      }}
      class="flex, flex-col gap-2 cursor-pointer border border-solid border-transparent hover:border-slate-900">
      <img src={url} alt={name} class="sm:h-[300px] object-cover" />
      <div class="flex flex-col gap-2 p-4 shadow">
        <h2 class="text-2xl">{name}</h2>
        <p>${price}</p>
      </div>
    </Link>
  );
});
