import React from "react";

const ViewBudget = (props) => {
  return (
    <div>
      <span>Budget: £{props.budget}</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
