import React from "react";
import PropTypes from 'prop-types'


/*class Categories extends React.Component {

    state ={
        activeItem: 3
    }

    onSelectItem = index =>{
        this.setState({
            activeItem: index
        })
    }

    render() {
        const {items, onClickItem} = this.props;
        return (
            <div className="categories">
                <ul>
                    <li >Все</li>
                    {items.map((item, index) => (
                        <li
                            className={this.state.activeItem === index ? 'active' : ''}
                            onClick={()=>this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>
                    ))}

                </ul>
            </div>
        )
    }

}*/

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {




    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={()=>onClickCategory(null)}>Все</li>
                {items && items.map((item, index) =>(
                    <li
                        className={activeCategory === index ? 'active' : ''}
                       onClick={()=>onClickCategory(index)} key={`${item}_${index}`}>{item}</li>
                ))}

            </ul>
        </div>
    )
})

Categories.propTypes={
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {activeCategory: null, items: []}



export default Categories