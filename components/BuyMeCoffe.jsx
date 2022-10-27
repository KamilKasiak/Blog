import React from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const BuyMeCoffe = () => {
  const checkout = async () => {
    const stripeResponse = await fetch(`/api/buyCoffee`);
    const data = await stripeResponse.json();
    const { id: sessionId } = data;

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    console.log(error);
  };

  return (
    <div className='items-center flex flex-col justify-center mb-8 p-8 bg-black bg-opacity-30 rounded-lg relative mt-20 text-center text-white text-center gap-10'>
      <h3 className='text-xl font-semibold'>Doceń Autora</h3>
      <p className='text-justify text-xs lg:text-base'>
        Przygotowanie się do wycieczki często zajmuje mi wiele godzin, a nawet
        dni ciężkich poszukiwań w internecie. Owocuje to tym, że nie muszę go
        tracić na miejscu i mogę dłużej cieszyć się urlopem bez zbędnych
        frustracji związanych z szukaniem wartościowych miejsc, próbą dojścia na
        najciekawszy szlak, lub znalezieniem najlepszej opcji parkingu. Zawsze
        doceniam miejsca w których informacje przekazane są rzetelnie, bez
        kolorowania faktów i płatnych promocji niejednokrotnie wprowadzając
        czytelnika w błąd i medialną iluzje. Jeżeli informacje, które tu
        znalazłeś(aś) okazały się dla Ciebie pomocne, zaoszczędziły Ci czas i
        doceniasz mój trud to zostaw pozytywny komentarz ;) Możesz także
        postawić mi kawę, co pomoże w utrzymaniu i prowadzeniu tego bloga :)
      </p>
      <h3 className='text-xl font-semibold'>Postaw Kawę ;)</h3>
      <div className='flex col gap-10'>
        <div
          className='text-center'
          onClick={() => {
            checkout();
          }}
        >
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-md rounded-full text-white px-8 py-3 cursor-pointer'>
            <CoffeeIcon />
            <span className='ml-2'>Mała kawa 7zł :)</span>
          </span>
        </div>
      </div>
      <p className='text-center'>
        <br /> <b>Dzięki! Do zobaczenia gdzieś w świecie!</b>
      </p>
    </div>
  );
};

export default BuyMeCoffe;
