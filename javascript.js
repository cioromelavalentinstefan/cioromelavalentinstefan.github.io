/**
 * @author Cioromela Valentin Stefan
 */


function goTo(theUrl) {
    setTimeout(function(){ window.open(theUrl, '_blank').focus(); }, 200);
}