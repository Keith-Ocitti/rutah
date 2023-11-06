const NavList = ({ dispatch }) => {
  console.log(dispatch, "navlist");
  return (
    <div className="ul-div">
      <ul className="nav-list">
        <li>General Services</li>
        <li>IT & Graphics Design</li>
        <li>Agriculture</li>
        <li>Entertainment</li>
        <li>Professionals</li>
      </ul>
    </div>
  );
};

export default NavList;
