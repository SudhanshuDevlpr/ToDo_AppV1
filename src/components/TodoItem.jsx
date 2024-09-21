import TodoItems from "./TodoItems"
function TodoItem({item}){
    return <>
      {item.map((item)=>(
        <TodoItems name={item.name} date={item.date}></TodoItems>
      ))}
    </>
}
export default TodoItem