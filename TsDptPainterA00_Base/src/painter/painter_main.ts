window.onload = function() {
			
    let toolbar = document.getElementById("toolbar");
    
    let inputImage = createButton("./images/line.gif", "btnLine");
    toolbar.appendChild(inputImage);
    
    inputImage = createButton("./images/rectangle.gif", "btnRectangle");
    toolbar.appendChild(inputImage);
    
    inputImage = createButton("./images/ellipse.gif", "btnEllipse");
    toolbar.appendChild(inputImage);
    
    inputImage = createButton("./images/free_path.gif", "btnFreePath");
    toolbar.appendChild(inputImage);
    
    let canvas: any = document.getElementById("mycanvas");
    canvas.width = 600;
    canvas.height = 400;
    
    canvas.style.border = "1px solid gray";
    canvas.style.cursor = "pointer";
};

function createButton(imagePath: string, id: string) {
    let inputImage = document.createElement("input");
    inputImage.setAttribute("type","image");
    inputImage.setAttribute("src",imagePath);
    inputImage.setAttribute("id",id);
    
    return inputImage;
}
