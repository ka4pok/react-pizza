import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaLoadingBlock(){
    return(
        <ContentLoader 
        className='pizza-block'
    speed={0}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <circle cx="138" cy="136" r="109" /> 
    <circle cx="138" cy="163" r="6" /> 
    <rect x="0" y="257" rx="3" ry="3" width="280" height="35" /> 
    <rect x="-1" y="308" rx="4" ry="4" width="280" height="83" /> 
    <rect x="0" y="413" rx="3" ry="3" width="70" height="31" /> 
    <rect x="119" y="412" rx="12" ry="12" width="159" height="35" />
    </ContentLoader>
    )
}


export default PizzaLoadingBlock