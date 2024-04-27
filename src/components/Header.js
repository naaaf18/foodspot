const Heading =()=>{
    return (
        <a href="/">
        <img className="logo"alt='image here 'src="https://fpimages.withfloats.com/tile/632972807f42460001be357d.png">

        </img>
        </a>
    )
}
const HeaderComponent=()=>{
    return(
        <div className="header">
            <Heading/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>
        </div>
        </div>
    )
}
export default HeaderComponent;