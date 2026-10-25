function TodoItem({ todo, onDelete }) {
    return (
      <li style={{ 
        display: "flex", 
        alignItems: "center",
        padding: "10px", 
        borderBottom: "1px solid #eee",
        backgroundColor: "#f9f9f9",
        marginBottom: "8px",
        borderRadius: "4px"
      }}>
        <span style={{ flex: 1 }}>{todo.text}</span>
        <button 
          onClick={() => onDelete(todo.id)} // ហៅ Function លុបដោយបញ្ជូន ID ទៅជាមួយ
          style={{ backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", padding: "5px 10px" }}
        >
          លុប
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  