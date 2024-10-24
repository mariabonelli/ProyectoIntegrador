import "./ListStyle.css";

function ListItemTitle({ children, subtitle, action }) {
  return (
    <div className="ui_list_item_text">
      <h4 className="ui_list_item_title">
        <span>{children}</span>
        <span className="ui_list_item_action">{action}</span>
      </h4>
      <p className="ui_list_item_subtitle">{subtitle}</p>
    </div>
  );
}

export default ListItemTitle;
