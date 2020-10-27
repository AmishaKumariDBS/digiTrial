const defaultLoan = [];
    
    export default (state=defaultLoan,action) => {
        switch(action.type){
            case 'APPLIED_LOANS':
                return{
                ...state,
                clientId:action.clientId,
                loanAmount:action.loanAmount,
                carCost:action.carCost,
                emi:action.emi,
                selectedFile:action.selectedFile
                }
                
            default:
                 return state;
        }
    }

    