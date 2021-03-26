export function getTimeAndDate(data) {
    const dateObj = data.attributes ? new Date(data.attributes.created_at) : ''
    const date = data.attributes ? `
    ${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()} - ${(dateObj.getHours() + 24) % 12 || 12}:${(dateObj.getMinutes() < 10 ? '0' : '') + (dateObj.getMinutes())}` : ''

    return date;
}