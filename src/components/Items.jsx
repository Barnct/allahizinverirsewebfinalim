import Recipe from './Recipe';

export default function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((item, index) => (
        <Recipe key={index} data={item} />
      ))}
    </>
  );
}
