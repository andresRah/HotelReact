const { useState } = React

const Home = ({ hotels }) => {
    const originalHotels = [...hotels]
    const today = new Date()
    const [minDate, setMinDate] = useState(today)
    const [maxDate, setMaxDate] = useState(today)
    const [hotelFiltered, setHotelsFilter] = useState(hotels)

    // #region Global Variables
    const maxPriceValue = Math.max(...hotels.map(o => o.price), 0);
    // #endregion Global Variables

    // #region Countries Data - uniqueCountries
    let countryFilter = hotels.map((element, index) => ({
        key: index + 1,
        value: element.country,
        text: element.country,
    }));

    let uniqueCountries = Array.from(new Set(countryFilter.map((a) => a.value)))
                            .map((value) => countryFilter.find((a) => a.value === value));

        uniqueCountries.unshift({key: 1, value: placeHolderCountries, text: placeHolderCountries})
    // #endregion Countries Data

    // #region Prices Signs Data - prices
    let prices = [{key: 0, value: placeHolderPrices, text: placeHolderPrices }]

    for(let index = 1; index <= maxPriceValue; index++){
        let sign = "$".repeat(index)
        prices.push({ key: index, value: sign, text: sign })
    }
    // #endregion Prices Signs Data

    // #region BedRooms - bedRooms
    let bedRooms = [{key: 0, value: placeHolderSize, text: placeHolderSize },
                    {key: 1, value: 'Hotel pequeño', text: 'Hotel pequeño' },
                    {key: 2, value: 'Hotel mediano', text: 'Hotel mediano' },
                    {key: 3, value: 'Hotel grande', text: 'Hotel grande' }]
    // #endregion BedRooms - bedRooms

    const setDefaultFiltersValues = () => {
        setHotelsFilter(originalHotels)
        setMinDate(today)
        setMaxDate(today)
        setSelectedCountry(uniqueCountries[0])
        setSelectedPrice(prices[0])
        setSelectedBedRoom(bedRooms[0])
    }

    const [selectedCountry, setSelectedCountry] = useState(uniqueCountries[0])
    const [selectedPrice, setSelectedPrice] = useState(prices[0])
    const [selectedBedRoom, setSelectedBedRoom] = useState(bedRooms[0])

    const filters = {
        hotels,
        hotelFiltered, setHotelsFilter,
        minDate, setMinDate,
        maxDate, setMaxDate,
        selectedCountry, setSelectedCountry,
        selectedPrice, setSelectedPrice,
        selectedBedRoom, setSelectedBedRoom,
        uniqueCountries,
        prices,
        bedRooms
    }

    return (
        <div>
            <HeaderSection minDate={minDate} maxDate={maxDate} />
            <Filters filters={filters}/>
            <ListOfCards hotels={hotelFiltered} setDefaultFiltersValues={setDefaultFiltersValues}/>
        </div>
    )
}
