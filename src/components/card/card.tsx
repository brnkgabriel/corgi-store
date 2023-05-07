import { component$ } from '@builder.io/qwik'; 
import type { iCogis } from '~/types/interfaces';

export default component$((props: iCogis) => {

  const { url, name, price } = props

  return (
    <div class="flex, flex-col gap-2 py-8">
      <img src={url} alt={name} class="sm:h-[300px] object-cover" />
      <div class="flex flex-col gap-2 p-4 shadow">
        <h2 class="text-2xl">{name}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
});
