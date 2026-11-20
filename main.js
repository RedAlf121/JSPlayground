const renderer = document.querySelector(".render").contentDocument;
const htmlTextArea = document.querySelector("#html");
const cssTextArea = document.querySelector("#css");
const jsTextArea = document.querySelector("#js");
const consoleRenderer = document.querySelector(".console");

const EDITORS = [
    { id: "html", mode: "htmlmixed" },
    { id: "css", mode: "css" },
    { id: "js", mode: "javascript" }
];

const codeMirrorEditors = [];

function initEditors(){
    // Si CodeMirror no llegó a cargarse, quedan las textareas con oninput.
    if (typeof CodeMirror === "undefined") {
        return;
    }

    for (const { id, mode } of EDITORS) {
        const textArea = document.querySelector(`#${id}`);
        if (!textArea) {
            continue;
        }

        const editor = CodeMirror.fromTextArea(textArea, {
            mode,
            theme: "playground",
            lineNumbers: true,
            styleActiveLine: true,
            lineWrapping: true,
            indentUnit: 2,
            tabSize: 2
        });

        editor.on("change", () => {
            // fromTextArea no vuelca el contenido en cada cambio; lo hacemos
            // para que editPreview y el fallback lean siempre el valor actual.
            editor.save();
            editPreview();
        });
        codeMirrorEditors.push(editor);
    }
}

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

initEditors();

window.addEventListener("resize", () => {
    for (const editor of codeMirrorEditors) {
        editor.refresh();
    }
});
