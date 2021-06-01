export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getRandomCoordianteX = (radius) => {
    return  Math.random()* (window.innerWidth - radius * 2) + radius;
} 

export const getRandomCoordianteY = (radius) => {
    return  Math.random()* ((window.innerHeight - 35) - radius * 2) + radius;
} 

export const getRandomVelocity = () => {
    return  (Math.random() - 0.5) * 50;
} 

export const getRandomRadius = () => {
    return  (Math.random() * 99) + 1;
} 

export const getArrayOfEmptyVal = (val) => {
    let array = new Array(val).fill(0);
    // array.map((el,i) => array[i] = i+1)
    return array;
} 

export const getRandomColor = () => {
    return  Math.random() * 255;
} 

export const getRandomAlfa = () => {
    return  Math.random();
} 

export const isObjEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
} 

export const getArrayOfDots = (val) => {
    let array = new Array(val).fill(0);
    let updateChosen;
    // array.map((el,i) => array[i] = i+1)
    return array.map((el,i) => {
        if(i === 0){
            updateChosen = true;
        }else{
            updateChosen = false;
        }
        return {
            id: i + 1,
            chosen: updateChosen
        }
    });
} 

export const getArrayOfPaging = (val) => {
    let array = new Array(val).fill(0);
    let updateChosen;
    // array.map((el,i) => array[i] = i+1)
    return array.map((el,i) => {
        if(i === 0){
            updateChosen = true;
        }else{
            updateChosen = false;
        }
        return {
            id: i + 1,
            chosen: updateChosen
        }
    });
} 

export const getCurrentDateAndTime = () => {
    let date = new Date();
    let monthId = date.getMonth();
    let month;
    switch (monthId){
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="June";
            break;
        case 6:
            month="July";
            break;
        case 7:
            month="August";
            break;
        case 8:
            month="September";
            break;
        case 9:
            month="October";
            break;
        case 10:
            month="November";
            break;
        case 11:
            month="December";
            break;
        default:
            month="January";
            break;
    }
    return `${month} ${date.getDate()}, ${date.getFullYear()} AT ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
}

export const setCountdownTimeVal = (opt, val, nextMonth, leapYear) => {
    switch(opt){
        case 'seconds':
            return val === 0 ? 59 : val - 1;
        case 'minutes': 
            return val === 0 ? 59 : val - 1;
        case 'hours': 
            return val === 0 ? 24 : val - 1;
        case 'days': 
        let value;
            switch(nextMonth){
                case 'February':
                    value = leapYear ? 29 : 28;
                    break;
                case 'April':
                case 'June':
                case 'September':
                case 'November':
                    value = 30;
                    break;
                case 'January':
                case 'March':
                case 'May':
                case 'July':
                case 'August':
                case 'October':
                case 'December':
                    value = 31;
                    break;
            }
            return val === 0 ? value : val - 1;
        case 'month': 
            return val - 1;
    }
}

export const getMonth = (id) => {
    switch (id){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "January";
    }
}

export const getMonthId = (month) => {
    switch (month){
        case "January":
            return 0;
        case "February":
            return 1;
        case "March":
            return 2;
        case "April":
            return 3;
        case "May":
            return 4;
        case "June":
            return 5;
        case "July":
            return 6;
        case "August":
            return 7;
        case "September":
            return 8;
        case "October":
            return 9;
        case "November":
            return 10;
        case "December":
            return 11;
    }
}

export const getNextMonth = (month) => {
    switch (month){
        case 'January':
            return "February";
        case 'February':
            return "March";
        case 'March':
            return "April";
        case 'April':
            return "May";
        case 'May':
            return "June";
        case 'June':
            return "July";
        case 'July':
            return "August";
        case 'August':
            return "September";
        case 'September':
            return "October";
        case 'October':
            return "November";
        case 'November':
            return "December";
        case 'December':
        default:
            return "January";
    }
}

export const getDaysInMonth = (month, leapYear) => {
    switch (month){
        case 'January':
            return 31;
        case 'February':
            return leapYear ? 29 : 28;
        case 'March':
            return 31;
        case 'April':
            return 30;
        case 'May':
            return 31;
        case 'June':
            return 30;
        case 'July':
            return 31;
        case 'August':
            return 31;
        case 'September':
            return 30;
        case 'October':
            return 31;
        case 'November':
            return 30;
        case 'December':
        default:
            return 31;
    }
}

export const getDateAndTime = (opt) => {
    let today = new Date();

    switch(opt){
        case 'day':
            return String(today.getDate()).padStart(2, '0');
        case 'month':
            return getMonth(today.getMonth()); //January is 0!
        case 'year':
            return today.getFullYear();
        case 'hour':
            return String(today.getHours()).padStart(2, '0');
        case 'minutes':
            return String(today.getMinutes()).padStart(2, '0');
        case 'seconds':
            return String(today.getSeconds()).padStart(2, '0');
        default:
            return "This function takes 1 parameter as a string: day, month, year, hour, minutes, seconds"
    }
}

export const isLeapYear = (year) => {
    return new Date(year, 1, 29).getDate() === 29;
}

export const firstLetterToUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const firstLetterToLowercase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
// export const filterObject = (obj, predicate) => 
//     Object.keys(obj)
//         .filter(key => predicate(obj[key]))
//         .map( key => ({ [key]: obj[key] }))


// export const filterObject = (obj, filter, filterValue) => 
//     Object.keys(obj).reduce((acc, val) => 
//         (obj[val][filter] === filterValue ? acc : {
//             ...acc,
//             [val]: obj[val]
//         }                                        
//     ), {});