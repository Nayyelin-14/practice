// import React, { useEffect, useState } from "react";
// import Card from "../Components/Card";
// import Trackwidth from "../width/Trackwidth";

// const Showcontainer = (props) => {
//   const [limit, setLimit] = useState();
//   const [showall, setShowall] = useState(false);

//   const { width } = Trackwidth;

//   useEffect(() => {
//     if (width < 416) {
//       setLimit(3);
//     } else {
//       setLimit(6);
//     }
//   }, [width]);

//   const changeLimit = () => {
//     if (width < 416) {
//       if (showall) {
//         setLimit(3);
//       } else {
//         setLimit(props.budgets.length);
//       }
//     }
//     if (width > 416) {
//       if (showall) {
//         setLimit(6);
//       } else {
//         setLimit(props.budgets.length);
//       }
//     }
//     setShowall(!showall);
//   };
//   return (
//     <div className="">
//       <h2>Your Budgets</h2>
//       <div className="grid grid-cols-3 xl:grid-cols-3 gap-3">
//         {props.budgets.slice(0, limit).map((budget) => {
//           return <Card budget={budget} key={budget.id} />;
//         })}

//         {/* slice method is used to control the number of budget items displayed based on the limit value.
//         slice(0, limit) creates a new array containing the items from the start (index 0) to the limit index (not inclusive). */}
//       </div>
//       <div>
//         {width > 416 && (
//           <>
//             {props.budgets.length > 6 && (
//               <div className="text-right">
//                 <button
//                   onClick={changeLimit}
//                   className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
//                   type="button"
//                 >
//                   {showall ? <>Show few budgets</> : <>Show all budgets</>}
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//         {width < 416 && (
//           <>
//             {props.budgets.length > 3 && (
//               <div className="text-right">
//                 <button
//                   onClick={changeLimit}
//                   className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
//                   type="button"
//                 >
//                   {showall ? <>Show few budgets</> : <>Show all budgets</>}
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Showcontainer;
import React, { useEffect, useState } from "react";
import Displaycard from "../Components/Displaycard";
// import Card from "../Components/Card";

// import Trackwidth from "../width/Trackwidth";
// import useTrackWidth from "../width/Trackwidth";

const Showcontainer = (props) => {
  const [limit, setLimit] = useState(); // Initialize limit with a default value
  const [showall, setShowall] = useState(false);

  // const { width } = useTrackWidth;

  useEffect(() => {
    if (window.innerWidth < 416) {
      setLimit(3);
    } else {
      setLimit(6);
    }
  }, []);

  const changeLimit = () => {
    if (window.innerWidth < 416)
      showall ? setLimit(3) : setLimit(props.budgets.length);
    if (window.innerWidth > 416)
      showall ? setLimit(6) : setLimit(props.budgets.length);
    setShowall(!showall);
  };

  // console.log("Number of budgets:", props.budgets.length);
  // console.log("Current limit:", limit);
  // console.log("Current width:", window.innerWidth);
  // console.log(showall);
  return (
    <div className="">
      <h2 className="text-2xl mb-4 font-bold">Existed Budgets</h2>

      <div className="grid grid-cols-3 xl:grid-cols-3 gap-3">
        {props.budgets.slice(0, limit).map((budget) => {
          return <Displaycard budget={budget} key={budget.id} />;
        })}
      </div>
      <div>
        {window.innerWidth > 416 && props.budgets.length > 6 && (
          <div className="text-right">
            <button
              onClick={changeLimit}
              className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
              type="button"
            >
              {showall ? <>Show few budgets</> : <>Show all budgets</>}
            </button>
          </div>
        )}
        {window.innerWidth < 416 && props.budgets.length > 3 && (
          <div className="text-right">
            <button
              onClick={changeLimit}
              className="text-sm font-semibold text-cus-green border-2 border-cus-green px-3 py-2 w-full md:w-fit mt-3 hover:text-white hover:bg-cus-green duration-150"
              type="button"
            >
              {showall ? <>Show few budgets</> : <>Show all budgets</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcontainer;
