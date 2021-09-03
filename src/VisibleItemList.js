import { connect } from "react-redux";
import { toggleItem } from "./actions";
import { editItem } from "./actions";
import { removeItem } from "./actions";
import VisibleItems from "./VisibleItems";

function getVisibleItems(items, filter) {
  switch (filter) {
    case "SHOW_COMPLETED":
      return items.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return items.filter((t) => !t.completed);
    case "SHOW_ALL":
    default:
      return items;
  }
}

function mapStateToProps(state) {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id));
    },
    removeClick: (id) => {
      dispatch(removeItem(id));
    },
    editClick: (text, id) => {
      dispatch(editItem(text, id));
    },
  };
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleItems);

export default VisibleItemList;
