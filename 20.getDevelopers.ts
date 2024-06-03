function getDevelopers(employees) {
   
    return employees.filter((a)=>
        a.job === "developer" 
    )
}

export { getDevelopers };
