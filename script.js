document.querySelectorAll('p').forEach(paragraph => {
    let originalText;  

    paragraph.addEventListener('mouseover', (event) => {
        originalText = event.target.innerText;  
        event.target.innerText = '!Copy!';
         
    });

    paragraph.addEventListener('mouseout', (event) => {
        event.target.innerText = originalText;  
         
    });

    paragraph.addEventListener('click', (event) => {
      
        navigator.clipboard.writeText(originalText);
        event.target.innerText = 'Copied!';

        
    });
});
