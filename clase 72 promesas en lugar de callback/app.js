const employees = [
    { id: 1, name: 'Susana Alexandra López Medina'  },
    { id: 2, name: 'Paola Kamila López Medina'      },
    { id: 3, name: 'Ana Kamila López Medina'        }
]

const salaries = [
    { id: 1, quantity: 1000 },
    { id: 2, quantity: 2000 }
]

const getEmployeeInformation = (id) => {
    return new Promise((resolve, reject) => {
        let employee = employees.find((employee) => employee.id === id)
        if (employee) {
            resolve(employee)
        } else {
            reject(`Empleado (${ id }), no existe en el banco de datos`)
        }
    })
}

const getSalaryInformation = (employee) => {
    return new Promise((resolve, reject) => {
        let salary = salaries.find((salary) => salary.id === employee.id)
        if (salary) {
            resolve({
                id: employee.id,
                name: employee.name,
                salary: salary.quantity
            })
        } else {
            reject(`El salario de el empleado (${ employee.id }), no existe en el banco de datos`)
        }
    })
}

getEmployeeInformation(2)
    .then(getSalaryInformation)
        .then(console.log)
.catch((error) => {
    console.error(error)
})

/**
{id: 2, name: "Paola Kamila López Medina", salary: 2000}
 */
