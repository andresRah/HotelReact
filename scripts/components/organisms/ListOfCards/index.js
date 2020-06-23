const ListOfCards = ({ hotels, setDefaultFiltersValues }) =>{

    const marginList = {
        margin: "10px"
    }

    return(
    <div class="ui three cards" style={marginList}>
        {
            hotels && hotels.length > 0 ?
            hotels.map((hotel, index) => <Card key={index} {...hotel} />)
            : <NotFound resetFilters={setDefaultFiltersValues}/>
        }
    </div>
    )
}