import React from "react";
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";


function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas})=> pizzas.items)
    const isLoaded = useSelector(({pizzas})=> pizzas.isLoaded)
    const {sortBy, category} = useSelector(({filters})=> filters)

    React.useEffect(()=> {
        dispatch(fetchPizzas(category, sortBy))
    },[category, sortBy])

    const onSelectCategory = React.useCallback((index)=>{
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((obj)=>{
        dispatch(setSortBy(obj))
    }, [])

    const categoryNames =[
        'Мясные',
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
    ]

    const sortItems = [
        {name:'популярности', type:'rating', order: 'desc'},
        {name:"цене", type: 'price', order: 'desc'},
        {name:"алфавиту", type: "name", order: 'asc'}
    ]


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                   isLoaded 
                   ?    items.map((item)=>{ return(<PizzaBlock key={item.id} isLoading={true} {...item} />)}) 
                   :    Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }

            </div>
        </div>
    )
}

export default Home