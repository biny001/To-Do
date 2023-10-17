export default function Layout() {
  return (
    <div className="container">
      <div className="Task-container">
        <h2>Task</h2>
        <form>
          <input type="text" placeholder="Add task"></input>
          <button>+</button>
        </form>
      </div>
      <div className="List-container">
        <ul>
          <li>hello</li>
          <li>try</li>
          <li>harder</li>
        </ul>
      </div>
      <div className="status">
        <h2>Status</h2>
        <p>done</p>
        <p>completed</p>
      </div>
    </div>
  );
}
