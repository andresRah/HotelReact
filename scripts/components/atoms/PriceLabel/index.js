const PriceLabel = ({ price }) => {
    const fillPrices = () => {
        let pricesObj = [];
        for (let s = 1; s <= 4; s++) {

            let disabledState = s > price ? 'disabled' : ''
                disabledState = `dollar ${disabledState} icon`

            pricesObj.push(<i aria-hidden="true" class={disabledState}/>)
        }
        return pricesObj;
    }

    return <div class="ui tag label">{fillPrices()}</div>
};
