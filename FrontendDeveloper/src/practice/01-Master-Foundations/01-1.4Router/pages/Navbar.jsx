import { Link , NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "15px", display: "flex", gap: "20px" }}>
    {/* ប្រើ NavLink រួចឆែកមើល isActive ដើម្បីដូរពណ៌អក្សរ */}
    <NavLink 
      to="/" 
      style={({ isActive }) => ({
        color: isActive ? "#28a745" : "white", // បើចំទំព័រ Home ឱ្យចេញពណ៌បៃតង
        textDecoration: "none",
        fontWeight: "bold"
      })}
    >
      Home
    </NavLink>

    <NavLink 
      to="/aboute" 
      style={({ isActive }) => ({
        color: isActive ? "#28a745" : "white",
        textDecoration: "none",
        fontWeight: "bold"
      })}
    >
      About
    </NavLink>
    <NavLink 
      to="/services" 
      style={({ isActive }) => ({
        color: isActive ? "#28a745" : "white",
        textDecoration: "none",
        fontWeight: "bold"
      })}
    >
      Services
    </NavLink>
  </nav>

  );
}

export default Navbar;
