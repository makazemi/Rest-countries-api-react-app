function countryReducer(state,action){
    switch(action.type){
        case 'get-country':{
            return{
                ...state,
                countries:action.payload,
                isLoading:false
            }
        }
        case 'set-loading':{
            return{
                ...state,
                isLoading:true
            }
        }
        case 'catch-error':{
            return{
                ...state,
                isLoading:false
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}
export default countryReducer