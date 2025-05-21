import './TodoItem.css'
function TodoItem({ title, description, done }) {
    return (
        <>
            <div className="subject">
                <div className="subject-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <input type="checkbox" defaultChecked={done} />
            </div>

        </>
    )
}
export default TodoItem