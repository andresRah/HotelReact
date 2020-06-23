const { Container, Segment, Icon, Header, Button  } = semanticUIReact;

const NotFound = ({ resetFilters }) => {

    const containerStyles = {
        textAlign: "center",
        marginTop: "100px"
    }

    return(
        <Container text style={containerStyles}>
                <Header icon>
                    <Icon name='search' />
                    No se encontraron resultados para tu consulta
                </Header>
                <Segment.Inline>
                    <Button color='teal' onClick={resetFilters}>Limpiar filtros</Button>
                </Segment.Inline>
        </Container>
    )
}
