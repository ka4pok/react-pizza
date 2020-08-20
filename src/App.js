import React from 'react';
/*import {connect} from 'react-redux'*/

import {Header} from './components'
import {Home, Cart} from './pages'
import {Route} from 'react-router-dom'



function App() {


    return(
        <div className="wrapper">
            <Header/>
            <div className="content">
              {/*  <Route path='/' render={() => <Home items={items}/>} exact/>*/}
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart}/>

            </div>
        </div>
    )
}
export default App;


/*
const mapStateToProps =  state =>{
    return{
        items: state.pizzas.items,
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setPizzas: (items)=> dispatch(setPizzasAction(items))
    }
}
*/

/*export default connect(mapStateToProps, mapDispatchToProps)(App);*/

