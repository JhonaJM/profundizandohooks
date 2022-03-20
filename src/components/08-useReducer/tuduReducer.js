export const tuduReducer=(state=[],action)=>{
    switch (action.type) {
      
        case 'Add':

            return [...state,action.payload];
            break;
        case 'Delete':
            return state.filter(tudu=>tudu.id !== action.payload);
        case 'Toggle':
           
               return  state.map(tudu=>{
                   
                    if(tudu.id===action.payload){
                        
                        return {...tudu,done:!tudu.done}
                    }else{

                        return tudu;
                    }
                });
                break;
        default:
            return state;
            break;
    }
}