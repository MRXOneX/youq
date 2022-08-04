const MenuCreate = ({
    size = 18,
    color = '#4971FF'
}) => {
    return (
        <svg 
            width={size} 
            height={size} 
            fill={color}
            
            viewBox="0 0 1139 1139"  
            xmlns="http://www.w3.org/2000/svg">
            <rect y="627" width="512" height="512" rx="160" fill="#4971FF" />
            <rect width="512" height="512" rx="160" fill="#4971FF" />
            <rect x="627" width="512" height="512" rx="160" fill="#4971FF" />
            <rect x="808" y="627" width="150" height="512" rx="75" fill="#4971FF" />
            <rect x="1138.68" y="810.844" width="150" height="512" rx="75" transform="rotate(90.654 1138.68 810.844)" fill="#4971FF" />
        </svg>

    )
}

export default MenuCreate