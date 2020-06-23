const HeaderSection = ({minDate, maxDate}) => {

    const whiteText = {
        color: "#fff"
    };

    const containerStyle = {
        marginBottom: "0px",
        borderRadius: 0
    }

    return(
        <div className="ui teal inverted segment" style={containerStyle}>
            <h2 className="ui header">
                <i aria-hidden="true" className="circular home icon"></i>
                <div className="content">
                    Hoteles
                    <div className="sub header" style={whiteText}>
                        desde el
                        <strong> {formatDate(minDate)} </strong>
                        hasta el
                        <strong> {formatDate(maxDate)}.</strong>
                    </div>
                </div>
            </h2>
        </div>
    )
}
