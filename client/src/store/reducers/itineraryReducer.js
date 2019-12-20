const initState = [];
const itineraryReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_ITINERARY":
      return { ...state, itinerary: action.payload };
    default:
      return state;
      case "ADD_COMMENT":
      const itineraries = state.itinerary
      const itinerary = action.payload.itinerary
const foo = itineraries.find(i => i == itinerary)
console.log('pay', action.payload)
foo.comment.push(action.payload)
      console.log('state', state)
       return{...state}
  }
};
// const cart = (state, action) => {
//   switch(action.type){
//     case 'QTY_UP':
//       return Object.assign([], state.map(item => {
//         if(item.id === action.id){
//           item.quantity += action.up;
//         }
//         return item;
//       ));
//     case 'QTY_DOWN':
//       return Object.assign([], state.map(item => {
//         if(item.id === action.id){
//           item.quantity -= action.down;
//         }
//         return item;
//       ));
//      default:
//        return state;
//    }
// };
export default itineraryReducer;
