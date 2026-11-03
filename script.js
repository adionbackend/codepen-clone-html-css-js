// html, css, js and iframe

const htmlInput = document.getElementById("html-code");
const cssInput = document.getElementById("css-code");
const jsInput = document.getElementById("js-code");

const outputFrame = document.getElementById("output-frame");

function updateOutput() {
    const html = htmlInput.value;
    const css = `<style>${cssInput.value}<\/style>`;
    const js = `<script>${jsInput.value}<\/script>`;

    const completeSourceCode = `
    <!DOCTYPE html>
    <html>
      <head>
        ${css}
      </head>
      <body>
        ${html}
        ${js}
      </body>
    </html>
  `;

    outputFrame.srcdoc = completeSourceCode;
}

// Event Listeners
htmlInput.addEventListener("input", updateOutput);
cssInput.addEventListener("input", updateOutput);
jsInput.addEventListener("input", updateOutput);

// tab key support

const editors = [htmlInput, cssInput, jsInput];

editors.forEach((editor) => {
    editor.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            e.preventDefault();

            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            editor.value =
                editor.value.substring(0, start) +
                "  " +
                editor.value.substring(end);

            editor.selectionStart = editor.selectionEnd = start + 2;
        }
    });
});

updateOutput();
