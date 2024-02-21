import './Header.css';

const Header=()=>{
    return(
    <div className="Heading">
    <div className='brandName'><h2><i>Photos Wallet</i></h2></div>
    <div className='searchBar'>
        <input placeholder='Search..' className='searchInput'/>
    </div>
    <div className='navBtnGrp'>
        <button className='navBtn' >Home</button>
        <button className='navBtn'>SignUp</button>
        <button className='navBtn'>SignIn</button>
    </div>
    </div>
);}
export default Header;