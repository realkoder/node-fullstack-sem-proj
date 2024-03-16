function highlightCodeBlocks() {
    const codeElements = document.querySelectorAll('pre code');
    hljs.highlightAll();
    codeElements.forEach(element => {
        element.parentElement.classList.add('max-w-screen-lg', 'mx-auto');

        const language = element.className.split(' ')[0];

        const languageDiv = document.createElement('div');
        languageDiv.textContent = language;
        languageDiv.classList.add('text-sm', 'text-gray-500', 'm-4', "mt-8");

        element.parentNode.insertBefore(languageDiv, element);
    });
};

async function fetchAndDisplayMarkdownFile(directoryName, fileName) {
    const response = await fetch(`/markdownContent/${directoryName}/${fileName}`);
    if (!response.ok) {
        console.error("Failed to fetch Markdown content");
        return;
    }
    const data = await response.text();
    const contentElement = document.getElementById('content');
    const codeElement = document.getElementById('code');

    contentElement.innerHTML = marked.parse(data);

    const codeBlocks = contentElement.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        codeElement.appendChild(block);
    });

    highlightCodeBlocks();
};