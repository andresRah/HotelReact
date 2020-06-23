const { DateInput } = SemanticUiCalendarReact;
const { Dropdown, Icon } = semanticUIReact;
const { useEffect } = React

const Filters = ({ filters }) => {

    // #region Styles
    const containerStyle = {
        marginTop: "0px",
        borderRadius: 0
    }
    // #endregion Styles

    // #region Function - Events Filter values

    const minDateChanged = (event, { value }) => {
        event.preventDefault()
        const minDate = new Date(value)

        if(filters.maxDate < minDate){
            alert("La Fecha de salida debe ser inferior a la Fecha de llegada")
        }
        else{
            filters.setMinDate(minDate)
        }
    }

    const maxDateChanged = (event, { value }) => {
        event.preventDefault()
        const maxDate = new Date(value)

        if(maxDate < filters.minDate){
            alert("Fecha de llegada debe ser posterior a la Fecha de salida")
        }
        else{
            filters.setMaxDate(maxDate)
        }
    }

    const countryChanged = (event, { value }) => {
        event.preventDefault()
        let selectedCountry = filters.uniqueCountries.find(element => element.value == value)
        filters.setSelectedCountry(selectedCountry)
    }

    const priceChanged = (event, { value }) => {
        event.preventDefault()
        let selectPrice = filters.prices.find(element => element.value == value)
        console.log(selectPrice)
        filters.setSelectedPrice(selectPrice)
    }

    const bedRoomChanged = (event, { value }) => {
        event.preventDefault()
        let selectBedRoom = filters.bedRooms.find(element => element.value == value)
        filters.setSelectedBedRoom(selectBedRoom)
    }

    const filterHotelsByUserSelection = () =>
    {
        // console.log(filters.selectedCountry)
        let originalHotels = [...filters.hotels]
        let hotelsFiltered = originalHotels

        if(filters.minDate && filters.minDate !== filters.maxDate) {
            hotelsFiltered = hotelsFiltered.filter(element => element.availabilityFrom >= filters.minDate)
            filters.setHotelsFilter(hotelsFiltered)
        }

        if(filters.maxDate && filters.minDate !== filters.maxDate) {
            hotelsFiltered = hotelsFiltered.filter(element => element.availabilityTo <= filters.maxDate)
            filters.setHotelsFilter(hotelsFiltered)
        }

        if(filters.selectedPrice.key !== 0 &&
            filters.selectedPrice.value !== placeHolderPrices)
        {
            hotelsFiltered = hotelsFiltered.filter(element => element.price ===
                                                                filters.selectedPrice.key)
        }

        if(filters.selectedCountry.value !== placeHolderCountries)
        {
            hotelsFiltered = hotelsFiltered.filter(element => element.country ===
                                                                filters.selectedCountry.value)
        }

        if(filters.selectedBedRoom.value !== placeHolderSize)
        {
            switch(filters.selectedBedRoom.key) {
                case 1:
                    hotelsFiltered = hotelsFiltered.filter(element => element.rooms <= 10)
                break
                case 2:
                    hotelsFiltered = hotelsFiltered.filter(element => element.rooms > 10 &&
                                                                        element.rooms <= 20)
                break
                case 3:
                    hotelsFiltered = hotelsFiltered.filter(element => element.rooms > 20)
                break
            }
        }
        // console.log(hotelsFiltered)
        filters.setHotelsFilter(hotelsFiltered)
    }

    // #endregion Function -Events Filter values

    useEffect(() => { filterHotelsByUserSelection() }, [filters.selectedPrice,
                                                        filters.selectedCountry,
                                                        filters.selectedBedRoom,
                                                        filters.minDate,
                                                        filters.maxDate])

    return (
        <div class="ui blue inverted segment five column doubling grid" style={containerStyle}>
            <div class="column">
                <DateInput inlineLabel name="date" placeholder="Fecha Inicial" iconPosition="left"
                            dateFormat="MM-DD-YYYY"
                            value={filters.minDate} onChange={minDateChanged}/>
            </div>
            <div class="column">
                <DateInput inlineLabel name="date" placeholder="Fecha Final" iconPosition="left"
                            dateFormat="MM-DD-YYYY"
                            value={filters.maxDate} onChange={maxDateChanged}/>
            </div>
            <div class="column">
                <Dropdown placeholder='Todos los países' selection button className='icon' labeled icon='world'
                            value={filters.selectedCountry.value} options={filters.uniqueCountries} onChange={countryChanged}/>
            </div>
            <div class="column">
                <Dropdown placeholder='Cualquier Precio' selection button className='icon' labeled icon='dollar sign' 
                            value={filters.selectedPrice.value} options={filters.prices} onChange={priceChanged}/>
            </div>
            <div class="column">
                <Dropdown placeholder='Cualquier Tamaño' selection button className='icon' labeled icon='bed'
                            value={filters.selectedBedRoom.value} options={filters.bedRooms} onChange={bedRoomChanged}/>
            </div>
        </div>
    )
}
