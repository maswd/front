import React from 'react'

const User = ({item,handelClick}) => {
  return (
    <button
    className="list-group-item list-group-item-action  border-0"
    style={{ backgroundColor: "transparent" }}
    onClick={() => handelClick(item.nameRoom)}
  >
    <div className="badge bg-success float-right">5</div>
    <div className="d-flex align-items-star border-bottom pb-2  ">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar5.png"
        className="rounded-circle mr-1"
        alt="Vanessa Tucker"
        width="40"
        height="40"
      />
      <div className="flex-grow-1 mr-3 ">
        {item.nameRoom}
        <div className="small">
          <span className="fas fa-circle chat-online"></span>{" "}
          Online
        </div>
      </div>
    </div>
  </button>
//     <a
//     href="#"
//     className="list-group-item list-group-item-action  border-0"
//     style={{ backgroundColor: "transparent" }}
//   >
//     <div className="badge bg-danger text-light float-right">5</div>
//     <div className="d-flex align-items-star border-bottom pb-2 ">
//       <img
//         src="https://bootdey.com/img/Content/avatar/avatar5.png"
//         className="rounded-circle mr-1"
//         alt="Vanessa Tucker"
//         width="40"
//         height="40"
//       />
//       <div className="flex-grow-1 mr-3 ">
//         Vanessa Tucker
//         <div className="small">
//           <span className="fas fa-circle chat-offline"></span>{" "}
//           offline
//         </div>
//       </div>
//     </div>
//   </a>
  )
}

export default User