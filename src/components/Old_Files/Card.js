// import React from "react";

// export default function Card(props) {
//   const dragStart = (e) => {
//     const target = e.target;

//     e.dataTransfer.setData("item_id", target.id);
//     setTimeout(() => {
//       target.style.display = "none";
//     }, 0);
//   };

//   const dragOver = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div
//       id={props.id}
//       onDragStart={dragStart}
//       onDragOver={dragOver}
//       className={props.className}
//       draggable="true"
//     >
//       {props.children}
//     </div>
//   );
// }
