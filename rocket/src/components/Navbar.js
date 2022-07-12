
import { Link } from "react-router-dom";

export default function Navbar() {


	return (
		<header>
			<nav>
				<ul className="list">
					<li className="items">
						<Link to="/" className="hover-1">
							Accueil
						</Link>
					</li>
				</ul>
			</nav>
		</header>

	);
}
