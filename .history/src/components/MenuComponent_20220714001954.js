import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Media } from 'reactstrap';
// eslint-disable-next-line no-unused-vars
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionDish: null
        
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: "Hot",
                    price: '4.99',
                    description: 'Aunique combination of Indian Uthappam(pancake)and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: "1.99",
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet - tangy tamarind sauce.'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'Aquintessential ConFusion experience, is itavada or is itadonut?'

                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: "",
                    price: '2.99',
                    description: 'Adelectable, semi - sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                }
            ],
        };// end state
    }
}
onDishSelect(dish) {
    this.setState({ selectedDish: dish });
}
renderDish(dish) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top scr={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}
render() {
    const menu = this.state.dishes.map((dish) => {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" scr={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>

            </div>
        );
    });
    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.state.selectionDish)}
                </div>
            </div>
        </div>
    );
}
}
export default Menu;