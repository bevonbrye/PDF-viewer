const url = '../docs/VolvoCarsSuccessStory.pdf'; 

let pdfDoc = null, 
    pageNum = 1, 
    pageIsRendering = false, 
    pageNumIsPending = null; 

const scale = 1.5,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d'); 

//renders 

const renderPage = num => { 

}

//get docs 
pdfjsLib.getDocument(url).promise.then(pdfDoc_ =>{
    pdfDoc = pdfDoc_;
    console.log(pdfDoc)
});