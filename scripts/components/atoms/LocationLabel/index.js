const LocationLabel = ({ country, city }) => (
    <div class="ui labels">
        <div class="ui label">
            <i aria-hidden="true" class="teal map marker alternate icon"></i>
                {country}, {city}
        </div>
    </div>
)
