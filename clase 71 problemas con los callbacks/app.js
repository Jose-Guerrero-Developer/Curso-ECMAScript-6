const employees = [
    { id: 1, name: 'Susana Alexandra López Medina'  },
    { id: 2, name: 'Paola Kamila López Medina'      },
    { id: 3, name: 'Ana Kamila López Medina'        }
]

const salaries = [
    { id: 1, quantity: 1000 },
    { id: 2, quantity: 2000 }
]

const getEmployeeInformation = (id, callback) => {
    let employee = employees.find((employee) => employee.id === id)
    if (employee) {
        callback(null, employee)
    } else {
        callback(`Empleado (${ id }), no existe en el banco de datos`)
    }
}

const getSalaryInformation = (employee, callback) => {
    let salary = salaries.find((salary) => salary.id === employee.id)
    if (salary) {
        callback(null, {
            id: employee.id,
            name: employee.name,
            salary: salary.quantity
        })
    } else {
        callback(`El salario de el empleado (${ employee.id }), no existe en el banco de datos`)
    }
}

getEmployeeInformation(2, (error, employee) => {
    if (error)
        return console.error(error)
    getSalaryInformation(employee, (error, employee) => {
        if (error) 
            return console.error(error)
        console.log(employee)
    })
})

/**
{id: 2, name: "Paola Kamila López Medina", salary: 2000}
 */
