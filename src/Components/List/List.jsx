import "./ListStyle.css";

function List({ children }) {
  return (
    <div className="ui_list">
      <div className="ui_list_item">
        <span className="ui_list_item_point"></span>

        {children}
      </div>
    </div>
  );
}

export default List;
