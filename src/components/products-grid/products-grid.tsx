import { component$ } from '@builder.io/qwik'; 
import Card from '../card/card';

export default component$(() => {

  const corgis = [
    { name: "Douglas", url: "https://nationaltoday.com/wp-content/uploads/2022/08/18-National-Welsh-Corgi-Day.jpg.webp", price: "1,500" },
    { name: "Noodle", url: "https://d.newsweek.com/en/full/1880525/corgi-dog.jpg", price: "4,000" },
    { name: "Corgette", url: "https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", price: "1,200" },
    { name: "Waffles", url: "https://www.allthingsdogs.com/wp-content/uploads/2020/09/Corgi-Mixes.jpg", price: "1,400" },
    { name: "Banana Nut Muffin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG", price: "2,500" },
    { name: "Ein", url: "https://www.akc.org/wp-content/uploads/2019/02/NomNomNow_Pembroke_Welsh_Corgis.jpeg", price: "12,000" }, 
  ]

  return (
    <div id="products" class="min-h-screen grid place-items-center">
      <div class="flex gap-4 flex-wrap max-w-[1400px] mx-auto justify-center items-stretch">
        {
          corgis.map((obj, idx) => (<Card key={idx} {...obj} />))
        }
      </div>
    </div>
  );
});
