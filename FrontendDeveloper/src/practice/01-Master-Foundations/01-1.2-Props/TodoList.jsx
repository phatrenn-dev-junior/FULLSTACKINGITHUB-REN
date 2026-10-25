import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ color: "#888", textAlign: "center" }}>🎉 អបអរសាទរ! អ្នកបានធ្វើការងារអស់ហើយ។</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        // ហៅ TodoItem មកប្រើបន្ត និងបោះ Props បន្តទៅទៀត
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
