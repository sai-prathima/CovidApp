export const Reducer = (state, action)=>{
    switch (action.type) {
        case 'SUCCESS':
            return { 
                post: action.payload,
                    }
            
        case 'ERROR':
            return {
                post: [],
                }
            
        default:
            return state
    }
}