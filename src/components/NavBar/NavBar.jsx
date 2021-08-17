import React from "react";//que funcione todo lo que está adentro
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarCategories from "./NavBarCategories";

const NavBar = () => {
	const [categories, setCategories] = useState(null);

	const getCategories = () =>{
		fetch("/categories.json")
		.then((res)=> res.json())
		.then((json) => {
			setCategories(json)
		});	
	}
  	useEffect(getCategories, []);

	return(
	<ReactBootstrap.Navbar bg="dark" variant="dark">
    	<ReactBootstrap.Container className="NavCont">
    		<ReactBootstrap.Navbar.Brand href="Home">
				<Link  to="/"> <Logo /></Link>
			</ReactBootstrap.Navbar.Brand>
    		<ReactBootstrap.Nav className="categoriesNav">
			{categories && <NavBarCategories categories={categories} />}
			<ReactBootstrap.Nav.Link href="Carrito" className="cart justify -content-end" ><CartWidget /></ReactBootstrap.Nav.Link>
			</ReactBootstrap.Nav>
    	</ReactBootstrap.Container>
  	</ReactBootstrap.Navbar>
	);
};

export default NavBar;