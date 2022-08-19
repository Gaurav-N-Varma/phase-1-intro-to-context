// Your code here

// execution context //=> a place in memory

// global execution context

// function execution

// 'record-oriented' application //=> application used to process recoreds

// record-oriented programming

// function signature

function createEmployeeRecord([string1, string2, string3, number]){
    return {
        firstName: string1,
        familyName: string2,
        title: string3,
        payPerHour: number,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(parentArray){
    const newArray = []
    parentArray.forEach(nestedArray => newArray.push(createEmployeeRecord(nestedArray)))
    return newArray
}

function createTimeInEvent(object, stamp){
    object.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(stamp.slice(11)),
        date: stamp.slice(0, 10)
    })
    return object
}

function createTimeOutEvent(object, stamp){
    object.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(stamp.slice(11)),
        date: stamp.slice(0, 10)
    })
    return object
}

function hoursWorkedOnDate(object, stamp){
    // find the object inside the timeOutEvents array has the date passed in
    const timeOutObj = object.timeOutEvents.find((timeObject) => {
        if(timeObject.date === stamp){
            return true
        }
    })

    // find the object inside the timeInEvents array has the date passed in
    const timeInObj = object.timeInEvents.find((timeObject) => {
        if(timeObject.date === stamp){
            return true
        }
    })

    let int = (timeOutObj.hour - timeInObj.hour)/100
    return int
}

function wagesEarnedOnDate(object, stamp){
    let int = object.payPerHour * hoursWorkedOnDate(object, stamp)
    return int 
}

function allWagesFor(object){
    let int = 0

    // passes in every date to wagesEarnedOnDate
    object.timeInEvents.forEach(timeObj => {
        int += wagesEarnedOnDate(object, timeObj.date)
    })

    return int
}

function calculatePayroll(employeeArray){
    let int = 0

    // iterates through each employee, calculating total wages for each
    employeeArray.forEach(employeeObject => {
        int += allWagesFor(employeeObject)
    })
    
    return int
}