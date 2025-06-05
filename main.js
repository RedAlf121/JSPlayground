const renderer = document.querySelector(".render").contentDocument;
const htmlTextArea = document.querySelector("#html");
const cssTextArea = document.querySelector("#css");
const jsTextArea = document.querySelector("#js");
function editPreview(){
    
    renderer.open();
    renderer.write(`
        <html>
        <head>
            <style>${cssTextArea.value}</style>
        </head>
        <body>
            ${htmlTextArea.value}
            <script>${jsTextArea.value}</script>
        </body>
        </html>
    `);
    renderer.close();
}
console.log(htmlTextArea)