import './style.css'

function ButtonFruits({redFruits,children}){
    return(
        <button onClick={redFruits}>{children}</button>
     )
}

export default ButtonFruits