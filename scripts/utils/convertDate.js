const formatDate = (date) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' }
    let newDate = new Date(date).toLocaleString("es-CO", options)
    return newDate
}