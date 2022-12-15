import Slider from "./Slider"
import SlidersBtns from "./SlidersBtns"

const Sliders = (props) =>{
    const tituloSlider = (props.titulo)
    const categoria = (props.categoria)
    const s = (props.style)
    const id = (props.id)

    return(
    <div className={s.sliderCont} >
        <h3>{tituloSlider}</h3>
        <div className={s.sliderCategoria}>
            <div className={s.sliderContItems}>
                <SlidersBtns
                    name = {tituloSlider}
                    keyID = {id}
                    categoria = {categoria}
                    style = {s}
                />
                <Slider
                    name = {tituloSlider}
                    categoria = {categoria}
                    keyID = {id}
                    key = {`${tituloSlider}Sldr`}
                    style = {s}
                /> 
            </div>
        </div>
    </div>
    )
}
export default Sliders
