"use client"
import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import CardC from '../Cards/CardC';


export default function ItemsPaginate({filter}) {
    
const [initPage,setinitPage] = useState(0)
const [pageSize,setPagesize]= useState(filter.length/5)
const pages=(filter.length/2)-1
const startIndex = initPage * pageSize;
const endIndex = startIndex + pageSize;
const paged=filter.slice(startIndex,endIndex)
const handlePageClick = (event) => {
    const newOffset = event.selected 
    setinitPage(newOffset);
  };
  if (initPage>pages) {
    setinitPage(0)
  }
  console.log(initPage)
  return (
    <div>
      <nav >
    <ReactPaginate  
      breakLabel={<li class="page-item"><a class="page-link" href="#">...</a></li>}
      nextLabel={initPage!==pages?<li className='p-1 bg-lime-800 rounded m-1'>Next</li>:null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(filter.length / pageSize)}
      previousLabel={initPage!==0?<li className='p-1 bg-lime-800 rounded m-1'>Previous</li>:null}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center bg-lime-300 rounded m-1 mr-2 ml-2"
      pageClassName="text-black hover:bg-lime-500 rounded p-1 mr-1 ml-1"
     activeClassName='bg-lime-600'
      Pagina={<h1>{initPage+1}</h1>}
    />

</nav>
    <div>
    <CardC filter={paged}></CardC>
 </div>

</div>
  )
}
