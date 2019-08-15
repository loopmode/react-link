const React = require("react");

export default React.forwardRef(function Link(
    { href, ...props },
    ref = React.useRef()
) {
    React.useLayoutEffect(() => {
        ref.current.setAttribute("href", href);
    }, [href]);
    return React.createElement("a", {
        ref,
        ...props
    });
});
