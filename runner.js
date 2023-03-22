var editor = CodeMirror(document.getElementById("editor-container"), {
  lineNumbers: true,
  mode: "htmlmixed",
  theme: "midnight",
  value: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My HTML Page</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>"
});

var modeSelect = document.getElementById("mode-select");
var runBtn = document.getElementById("run-btn");

modeSelect.addEventListener("change", function() {
  var mode = modeSelect.value;
  if (mode === "html") {
    editor.setOption("mode", "htmlmixed");
    editor.setValue("<!DOCTYPE html>\n<html>\n<head>\n  <title>My HTML Page</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>");
  } else if (mode === "javascript") {
    editor.setOption("mode", "javascript");
    editor.setValue("// Type your JavaScript code here");
  } else if (mode === "mixed") {
    editor.setOption("mode", { name: "htmlmixed", scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i, mode: null}, {matches: /(text|application)\/(x-)?vb(a|script)/i, mode: "vbscript"}] });
    editor.setValue("<!DOCTYPE html>\n<html>\n<head>\n  <title>My HTML Page</title>\n</head>\n<body>\n  <h1>Hello, {{name}}!</h1>\n\n  <script>\n    var name = \"world\";\n    console.log(\"Hello, \" + name + \"!\");\n  </script>\n</body>\n</html>");
  }
});

function runCode() {
  var newTab = window.open();
  newTab.document.write(editor.getValue());
  newTab.document.close();
}

runBtn.addEventListener("click", function() {
  runCode();
});
