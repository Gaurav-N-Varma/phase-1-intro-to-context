//   The payroll system
// populates a record from an Array
// 1) has a function called createEmployeeRecord
// createEmployeeRecord
//   2) populates a firstName field from the 0th element
//   3) populates a familyName field from the 1th element
//   4) populates a title field from the 2th element
//   5) populates a payPerHour field from the 3th element
//   6) initializes a field, timeInEvents, to hold an empty Array
//   7) initializes a field, timeOutEvents, to hold an empty Array
// process an Array of Arrays into an Array of employee records
// 8) has a function called createEmployeeRecords
// createEmployeeRecords
//   9) creates two records
//   10) correctly assigns the first names
//   11) creates more than 2 records
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
// 12) has a function called createTimeInEvent
// createTimeInEvent
//   13) creates the correct type
//   14) extracts the correct date
//   15) extracts the correct hour
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
// 16) has a function called createTimeOutEvent
// createTimeOutEvent
//   17) creates the correct type
//   18) extracts the correct date
//   19) extracts the correct hour
// Given an employee record with a date-matched timeInEvent and timeOutEvent
// 20) hoursWorkedOnDate calculates the hours worked when given an employee record and a date
// hoursWorkedOnDate
//   21) calculates that the employee worked 2 hours
// Given an employee record with a date-matched timeInEvent and timeOutEvent
// 22) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
// wagesEarnedOnDate
//   23) calculates that the employee earned 54 dollars
// Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
// 24) allWagesFor aggregates all the dates' wages and adds them together
// allWagesFor
//   25) calculates that the employee earned 378 dollars
// Given an array of multiple employees
// 26) calculatePayroll aggregates all the dates' wages and adds them together
// calculatePayroll
//   27) calculates that the employees earned 770 dollars
// runs payroll using the mock data provided by Ultron data systems
// Dependent functions: createEmployeeRecords
//   takes CSV data, returns an array of employee records
//     28) exists
//     29) returns an Array with 2 records for Loki and Natalia
// Full Payroll Test
//   from several imported CSV structures
//     calculatePayroll
//       30) exists
//       31) correctly sums the payroll burden to $11,880 when passed an array of employee records