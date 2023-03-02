export const getDate = (date: string) => {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const todaysDate = new Date(date)

    return (
        todaysDate.getDate() +
        ' ' +
        month[todaysDate.getMonth()] +
        ' ' +
        todaysDate.getFullYear()
    )
}
