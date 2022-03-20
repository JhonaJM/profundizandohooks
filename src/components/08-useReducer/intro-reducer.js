const initialState= [{
    id:1,
    tudu:'Comprar pan',
    done:false
}]

const tuduReducer=(state=initialState,action)=>{

    if(action?.type==='agregar')
    {
        return[...state,action.payload];
    }
    return state;
}

//let tudus=tuduReducer();

const newTudu= {
    id:2,
    tudu:'Comprar leche',
    done:false
};

const AgregarTudu={
    type:'agregar',
    payload:newTudu,
}


let tudus=tuduReducer(initialState,AgregarTudu);

console.log(tudus);