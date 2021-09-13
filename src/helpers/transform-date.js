const mapMonth = (monthNum) => {
    switch (monthNum) {
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
            return "";
    }
}

const mapDay = (dayNum) => {
    switch (dayNum) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "";
    }
}

const transformDate = (dateString) => {
    const date = new Date(dateString);
    return {
        year: date.getFullYear(),
        month: mapMonth(date.getMonth()),
        dayNum: date.getDate(),
        day: mapDay(date.getDay()),
        time: date.toTimeString().slice(0, 8),
    }
}

export default transformDate;