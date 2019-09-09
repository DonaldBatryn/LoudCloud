

const MONTHS = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
}

export const formatDate = (rawDateTime) => {
    let year = rawDateTime.slice(0, 4);
    let month = rawDateTime.slice(5, 7);
    let day = rawDateTime.slice(8, 10);
    let newDate = MONTHS[month] + ' ' + day + ', ' + year
    return newDate
}