import LineTo from "react-lineto";

type SolidLineProps = {
    from: string
    to: string
    fromAnchor: string
    toAnchor: string
}

function SolidLine({from, to, fromAnchor, toAnchor}: SolidLineProps) {
    return (
        <LineTo
        delay={1}
        from={from}
        to={to}
        fromAnchor={fromAnchor}
        toAnchor={toAnchor}
        borderColor='black' />
    );
}

export default SolidLine;