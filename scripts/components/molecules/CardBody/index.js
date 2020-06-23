const CardBody = ({ country, city, rooms, price }) => (
  <div class="extra content">
    <LocationLabel country={country} city={city} />
    <div class="ui labels">
      <BedRoomsLabel>{rooms} Habitaciones</BedRoomsLabel>
      <PriceLabel price={price} />
    </div>
  </div>
);
