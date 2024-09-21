function card({children}){
    return <>
    <div className="container">
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
}
export default card