function TodoItems({name,date}){
    return <>
     <div className="row mt-5 d-flex justify-content-center">
    <div className="col-lg-6 col-sm-12">{name}</div>
      <div className="col-lg-4 col-sm-12"><span>{date}</span></div>
      <div className="col-lg-2 col-sm-12 d-grid justify-content-lg-end">
        <button className="btn btn-danger" style={{width:'80px'}}>Delete</button>
      </div>
    </div>   
    </>  
}
export default TodoItems