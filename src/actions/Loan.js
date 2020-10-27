export const appliedLoans = (clientId,loanAmount,emi,carCost,selectedFile) => ({
    type:'APPLIED_LOANS',
    //minPrice:min,
   // maxPrice:max
    clientId:clientId,
    loanAmount:loanAmount,
    emi:emi,
    carCost:carCost,
    selectedFile:selectedFile
})
