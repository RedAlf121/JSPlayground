const renderer = document.querySelector(".render").contentDocument;
const htmlTextArea = document.querySelector("#html");
const cssTextArea = document.querySelector("#css");
const jsTextArea = document.querySelector("#js");
const consoleRenderer = document.querySelector(".console");

function consoleRender(args){
    const newNode = document.createElement("span");
    newNode.innerHTML = args;
    consoleRenderer.innerHTML="";
    consoleRenderer.appendChild(newNode);
}

function htmlFilter(value){
    const test = document.createElement("div");
    test.innerHTML = value;
    return test.innerHTML===value;
}

function editPreview(){
    
    renderer.open();
    renderer.write(`
        <html>
        <head>
            <style>${cssTextArea.value}</style>
        </head>
        <body>
            ${(htmlFilter(htmlTextArea.value)===true)? htmlTextArea.value : ""}
            <script>
                console.log = (...args)=>{
                    window.parent.consoleRender(args);
                }
                ${jsTextArea.value}
            </script>
        </body>
        </html>
    `);
    renderer.close();
}