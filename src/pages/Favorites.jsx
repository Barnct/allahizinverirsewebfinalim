import { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';

const AllRecipes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      'https://d00b28c2a65c4ebbbcd36164c3e78ddd.api.mockbin.io/'
    );
    const res_data = await response.json();
    setData(res_data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <p className="mx-auto mt-4 text-center text-black px-4 py-2 w-max bg-white rounded">
      Loading...
    </p>
  ) : (
    <div className="mt-4 min-h-[550px] h-full grid md:grid-cols-3 gap-4 place-items-center">
      {data.map((item, index) => (
        <Recipe key={index} data={item} />
      ))}
    </div>
  );
};

export default AllRecipes;
