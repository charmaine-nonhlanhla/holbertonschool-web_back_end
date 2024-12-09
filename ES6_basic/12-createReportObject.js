export default function createReportObject(employeesList) {
  // Create the report object
  return {
    allEmployees: { ...employeesList },  // Use spread to copy the employees list
    getNumberOfDepartments: function() {
      // Return the number of departments by counting the keys of employeesList
      return Object.keys(employeesList).length;
    },
  };
}
