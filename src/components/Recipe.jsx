const Recipe = ({ data }) => {
  {
    /* recipe diye bir fonksiyon oluşturduk data prop'u verdik tariflerin nasıl gözükmesini istediğimze karar verdik  */
  }
  return (
    <div className="shadow-lg hover:scale-105 transition-all text-center p-4 rounded-lg bg-white w-full h-full flex flex-col gap-4 items-center justify-around">
      <h2 className="text-2xl font-bold">{data.ad}</h2>
      <p>{data.malzemeler}</p>
      <p>{data.yapilis}</p>
      <p>Protein Değeri: {data.protein}</p>
      <p>Karbonhidrat Değeri: {data.karbonhidrat}</p>
      <input type="checkbox" />
    </div>
  );
};

export default Recipe;
