// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: '/api/departments/',
    // Snippet #5
    updateEmployee: `/api/departments/employee/update`,

    getDepartment: (name)=>{
        return `/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `/api/departments/employee/id/${id}` 
    }
}

export default api