import Recipe from './Recipe';

export default function Items({ currentItems }) {
  return (
    <>
      {currentItems.map(
        (
          item,
          index // itemleri sıralamak için fonksiyon
        ) => (
          <Recipe key={index} data={item} />
        )
      )}
    </>
  );
}
