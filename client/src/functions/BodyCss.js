export const BodyCss= () => {
    return (
        document.querySelector('body').style.overflowY="scroll",
        document.querySelector(`.visor`).style.transform='translateX(0)'
    )
}