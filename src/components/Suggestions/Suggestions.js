import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Newsletter = () => {
	return (
		<Container>
			<h1>Você também pode gostar</h1>
			<div className="latest-suggestions">
				<Link to="/catalog">
					<div className="suggestion">
						<div className="suggestion-image">
							<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/PecorinePRICONNE_web_360x.png?v=1644710667"/>
						</div>
						<span className="suggestion-name">Gostosinha</span>
						<div className="suggestion-prices">
							<span className="suggestion-cut-price">$8,99</span>
							<span className="suggestion-price">$7,99</span>
							<span className="suggestion-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="suggestion">
						<div className="suggestion-image">
							<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/PecorinePRICONNE_web_360x.png?v=1644710667"/>
						</div>
						<span className="suggestion-name">Gostosinha</span>
						<div className="suggestion-prices">
							<span className="suggestion-cut-price">$8,99</span>
							<span className="suggestion-price">$7,99</span>
							<span className="suggestion-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="suggestion">
						<div className="suggestion-image">
							<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/PecorinePRICONNE_web_360x.png?v=1644710667"/>
						</div>
						<span className="suggestion-name">Gostosinha</span>
						<div className="suggestion-prices">
							<span className="suggestion-cut-price">$8,99</span>
							<span className="suggestion-price">$7,99</span>
							<span className="suggestion-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="suggestion">
						<div className="suggestion-image">
							<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/PecorinePRICONNE_web_360x.png?v=1644710667"/>
						</div>
						<span className="suggestion-name">Gostosinha</span>
						<div className="suggestion-prices">
							<span className="suggestion-cut-price">$8,99</span>
							<span className="suggestion-price">$7,99</span>
							<span className="suggestion-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="suggestion">
						<div className="suggestion-image">
							<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/PecorinePRICONNE_web_360x.png?v=1644710667"/>
						</div>
						<span className="suggestion-name">Gostosinha</span>
						<div className="suggestion-prices">
							<span className="suggestion-cut-price">$8,99</span>
							<span className="suggestion-price">$7,99</span>
							<span className="suggestion-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
			</div>
			<hr className="medium-hr"/>
		</Container>
	);
};
export default Newsletter;