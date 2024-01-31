import { useState } from 'react';
import Items from './Items';
import ReactPaginate from 'react-paginate';

export default function PaginatedItems({ items, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage); // sayfada tariflerin ne kadar gösterileceğini hesaplar

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mt-4 min-h-[550px] h-full grid md:grid-cols-3 gap-4 place-items-center">
        <Items currentItems={currentItems} /> {/* sayfada gösterir */}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="mt-8 flex flex-wrap items-center justify-center gap-4"
        activeClassName="ring-4 ring-black"
      />
    </>
  );
}
