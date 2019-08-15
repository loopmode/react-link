const React = require("react");

function Link({ href, ...props }, ref) {
    const innerRef = React.useRef();

    React.useImperativeHandle(ref, () => innerRef);

    React.useLayoutEffect(() => {
        innerRef.current.setAttribute("href", href);
    }, [href]);

    return React.createElement("a", {
        ref: innerRef,
        ...props
    });
}

export default React.forwardRef(Link);
