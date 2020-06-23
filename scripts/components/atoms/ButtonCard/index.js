const ButtonCard = (props) => (
<button onclick={props.clickEvent} className="ui bottom teal attached button" role="button" tabindex="0">
    {props.children}
</button>
);
