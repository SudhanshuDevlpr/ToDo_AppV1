function EnterTodo() {
  return (
    <>
     <div className="row">
  <div className="col-lg-6 col-sm-12 mb-3">
    <div className="form-group">
      <input
        type="text"
        className="form-control mt-2 border-4 fw-bold"
        placeholder="Enter Todo"
      />
    </div>
  </div>
  <div className="col-lg-4 col-sm-12 mb-3">
    <div className="form-group">
      <input
        type="datetime-local"
        className="form-control mt-2 border-4 fw-bold"
        placeholder="Enter Date"
      />
    </div>
  </div>
  <div className="col-lg-2 col-sm-12 d-grid mb-3">
    <button className="btn btn-success mt-2 border-4">Save</button>
  </div>
</div>

    </>
  );
}
export default EnterTodo;
