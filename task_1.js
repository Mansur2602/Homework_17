function topSalary(salaries) {

    if (Object.keys(salaries).length === 0) {
        return null;
    }

    let maxSalary = null
    const topEmployees = []

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary; 
            topEmployees.length = 0; 
            topEmployees.push(name); 
        } else if (salary === maxSalary) {
            topEmployees.push(name)
        }
    }

    return topEmployees; 
}


const salaries = {
    John: 100,
    Pete: 300,
    Mary: 300,
};

console.log(topSalary(salaries)); 

