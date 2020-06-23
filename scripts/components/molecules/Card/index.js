const Card = ({ photo, name, description, country, city, rooms, price }) => (
  <div class="ui card">
    <ImageCard photo={photo} />
    <CardHeader title={name} content={description} />
    <CardBody country={country} city={city} rooms={rooms} price={price}/>
    <ButtonCard>Reservar</ButtonCard>
  </div>
);
