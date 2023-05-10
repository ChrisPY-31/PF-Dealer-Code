"use client"
import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import CardC from '../Cards/CardC';
export default function ItemsPaginate({filter}) {
let pages=(filter.length/2)-1
const [initPage,setinitPage] = useState(0)
const [pageSize,setPagesize]= useState(filter.length/5)
const startIndex = initPage * pageSize;
const endIndex = startIndex + pageSize;
const paged=filter.slice(startIndex,endIndex)
const handlePageClick = (event) => {
    const newOffset = event.selected                                                                                                                                                                                                                                                                               
    setinitPage(newOffset);
  };
 
  if (filter.length!==1&&initPage>pages) {
    setinitPage(0)
  }
  return (
    <div>
      <nav >
    {paged.length&&filter.length!==2?<ReactPaginate  
      breakLabel={<li className="page-item"><a className="page-link" href="#">...</a></li>}
      nextLabel={initPage!==pages?<li className='p-1 bg-lime-800 hover:bg-lime-700 rounded m-1'>Next</li>:null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(filter.length / pageSize)}
      previousLabel={initPage!==0?<li className='p-1 bg-lime-800 hover:bg-lime-700 rounded m-1'>Previous</li>:null}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center rounded m-1 mr-2 ml-2"
      pageClassName="text-black border border-black hover:bg-lime-600 rounded p-1 pl-2 pr-2 mr-1 ml-1"
     activeClassName='border-transparent text-lime-400'
     
    />:null}
</nav>
    <div>
    <CardC filter={paged.length?paged:filter}></CardC>
 </div>

</div>
  )
}
