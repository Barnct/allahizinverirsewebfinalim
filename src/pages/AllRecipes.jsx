import { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import PaginatedItems from '../components/PaginatedItems';

const AllRecipes = () => {
  const [choice, setChoice] = useState(0);
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

  const filteredData = () => {
    if (choice === 0) {
      const arr = data.sort(() => Math.random() - 0.5);
      return arr;
    } else if (choice === -1) {
      const arr = data.sort((a, b) => b.protein - a.protein);
      return arr;
    } else if (choice === 1) {
      const arr = data.sort((a, b) => b.karbonhidrat - a.karbonhidrat);
      return arr;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <p className="mx-auto mt-4 text-center text-black px-4 py-2 w-max bg-white rounded">
      Loading...
    </p>
  ) : (
    <>
      <section className="mt-4 bg-white flex items-center justify-center gap-x-4 p-5 rounded-lg">
        <button
          type="button"
          onClick={() => setChoice(1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Kilo Al
        </button>
        <button
          type="button"
          onClick={() => setChoice(0)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Random
        </button>
        <button
          type="button"
          onClick={() => setChoice(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Kilo Ver
        </button>
      </section>
      <PaginatedItems items={filteredData()} itemsPerPage={3} />
    </>
  );
};

export default AllRecipes;
