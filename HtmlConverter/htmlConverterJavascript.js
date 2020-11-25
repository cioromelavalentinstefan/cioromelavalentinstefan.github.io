/**
 * @author Cioromela Valentin Stefan
 */


/* HTML Converter */

// Processing the text
function convertHTML(str) {

    let entities = {
        '&': '&amp;',
        '\"': '&quot;',
        '\'': '&apos;',
        '<': '&lt;',
        '>': '&gt;'
    };

    return str.split('').map(function (char) {
        return entities[char] || char;
    }).join('');
}


// convert
function convert() {
    let text = document.getElementById("inputCode").value;
    //console.log(text);
    console.log(convertHTML(text));
    document.getElementById("outputEntities").value = convertHTML(text);

}

// empty
function clearText() {
    document.getElementById("inputCode").value = '';
}

// Copy
function copyCode() {
    let copyText = document.querySelector("#outputEntities");
    copyText.select();
    document.execCommand("copy");
}









 // auto_grow(document.getElementById("outputEntities"));

//   oninput="auto_grow(this)"
//   function auto_grow(e) {
//     e.style.height = "5px";
//     e.style.height = (e.scrollHeight)+"px";
// }




/* Next order of bussiness */


