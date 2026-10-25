import { useState } from "react";

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    
    onAdd(inputValue); // ហៅ Function មេដែលបញ្ជូនមកតាមរយៈ Props
    setInputValue(""); // សំអាតប្រអប់ Input វិញ
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input 
        type="text" 
        placeholder="តើអ្នកត្រូវធ្វើអ្វីខ្លះថ្ងៃនេះ?" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ flex: 1, padding: "10px", borderRadius: "4px", border: "1px solid #ccc", outline: "none" }}
      />
      <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
        ថែម
      </button>
    </form>
  );
}

export default TodoForm;
