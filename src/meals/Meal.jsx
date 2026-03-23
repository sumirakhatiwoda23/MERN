import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // ✅ fixed import
import { baseUrl } from '../config/api';

export default function Meal() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`${baseUrl}/lookup.php`, {
        params: { i: id }
      });
      setLoad(false);
      setData(response.data.meals[0]);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (load) return <h1>Loading...</h1>;
  if (err) return <h1 className='text-red-300'>{err}</h1>;
  if (!data) return null;

  const ingredients = getIngredients(data);

  return (
    <div className='my-11 px-10 text-white'>
      <div className='flex gap-10'>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className='w-80 h-80 rounded-xl object-cover'
        />
        <div className='text-left'>
          <h1 className='text-3xl font-bold text-[#E3B55E]'>{data.strMeal}</h1>
          <p className='mt-3'>
            Category: <span className='text-[#E3B55E]'>{data.strCategory}</span>
          </p>
          <p className='mt-1'>
            Area: <span className='text-[#E3B55E]'>{data.strArea}</span>
          </p>

          {data.strYoutube && (
            <a
              href={data.strYoutube}
              target='_blank'
              rel="noopener noreferrer"
              className='text-blue-400 underline mt-4 block'
            >
              ▶ Watch on YouTube
            </a>
          )}
        </div>
      </div>

      <div className='mt-8 text-left'>
        <h2 className='text-2xl font-bold mb-3 text-[#E3B55E]'>Ingredients</h2>
        <ul className='grid grid-cols-2 gap-2'>
          {ingredients.map(({ ingredient, measure }, index) => (
            <li key={index} className='bg-white/10 rounded-lg px-4 py-2'>
              <span className='text-[#E3B55E] font-semibold'>{measure}</span>{' '}
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-8 text-left'>
        <h2 className='text-2xl font-bold mb-3 text-[#E3B55E]'>Instructions</h2>
        <p className='leading-8 text-gray-300'>
          {data.strInstructions}
        </p>
      </div>
    </div>
  );
}
