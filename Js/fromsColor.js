

btnId.addEventListener('click',function () {
    let rId=document.getElementById('rID').value.addEventListener("click", function(event){
        event.preventDefault()})
    let gId=document.getElementById('gID').value.addEventListener("click", function(event){
        event.preventDefault()})
    let bId=document.getElementById('bID').value.addEventListener("click", function(event){
        event.preventDefault()})
    if(rId !== "" && gId !== "" && bId !== ""){
        const divAdd=document.getElementById('divAdd');
        const newColor=document.createElement('input');
        newColor.type='color';
        newColor.value=rgbToHex(rId,gId,bId)
        divAdd.appendChild(newColor)
        let text = document.createTextNode(` R: ${rId} G: ${gId} B: ${bId}  `)
        divAdd.appendChild(text)
    }

})
function rgbToHex(r, g, b) {
    const toHex = (value) => {
        const hex = parseInt(value).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

