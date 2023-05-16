"use client"
import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import CardC from '../Cards/CardC';
//aqui se renderiza la loguica del paginado que tiene la ruta /Course
//le llega el array de cursos por props
export default function ItemsPaginate({filter}) {
  console.log("paginate",filter)
  //primero se calcula el numero de paginas que va haber
let pages=Math.ceil(filter.length / 3)-1
// se hace inicia un estado con la primara pagina
const [initPage,setinitPage] = useState(0)
//se calcula cuantos componentes se van a renderizar por pagina
const [pageSize,setPageSize]= useState(3)
var startIndex = initPage * pageSize;
//se calcula el starIndex mas los elementos por pagina
var endIndex = startIndex + pageSize;
//se hace un corte la array de cursos
const paginado=filter.length?filter.slice(startIndex,endIndex):null
//se crea una funcion para que cuando se haga click se cambia el estado por el seleccionado
const handlePageClick = (event) => {
    const newOffset = event.selected                                                                                                                                                                                                                                                                               
    setinitPage(newOffset);
  };
 //aqui yase la logica para que al a ver mas paginas 
 //que la pagina que se esta, se resetee a 0 y vuelva a la primera pagina
 if(filter.length){
 if (filter.length===1&&initPage>pages) {
  setinitPage(0)
}
}
  return (
    <div>
      <nav >
        {/*aqui se mapea el paguinado*/}
    {paginado&&filter.length>3?<ReactPaginate  
      breakLabel={<li className="page-item"><a className="page-link" href="#">...</a></li>}
      nextLabel={initPage!==pages?<button className='p-1 bg-lime-800 hover:bg-lime-700 rounded m-1'>Next</button>:null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={Math.ceil(filter.length / pageSize)}
      previousLabel={initPage!==0?<button className='p-1 bg-lime-800 hover:bg-lime-700 rounded m-1'>Previous</button>:null}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center rounded m-1 mr-2 ml-2"
      pageClassName="text-black border border-black hover:bg-lime-600 rounded p-1 pl-2 pr-2 mr-1 ml-1"
     activeClassName='border-transparent text-lime-400'
     
    />:null}
</nav>
    <div>
    <CardC filter={paginado}></CardC>
 </div>

</div>
  )
}
