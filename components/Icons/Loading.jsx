const Loading = ({
    size = 20
}) => {
    return (
        <svg 
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(0 -8.5)">
                <circle cx="50" cy="39.8" r="10" fill="#0051a2">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                    <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="0;17;0" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate>
                </circle>
                <circle cx="50" cy="39.8" r="10" fill="#1b75be">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="180 50 50;540 50 50"></animateTransform>
                    <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="17;0;17" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"></animate>
                </circle>
            </g></svg>
    )
}

export default Loading