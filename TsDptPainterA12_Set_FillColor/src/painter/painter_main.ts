const LINE_DRAW_TYPE = Symbol("line");
const RECTANGLE_DRAW_TYPE = Symbol("rectangle");
const ELLIPSE_DRAW_TYPE = Symbol("ellipse");
const FREE_PATH_DRAW_TYPE = Symbol("free_path");

let g_DrawType: Symbol = LINE_DRAW_TYPE;

let g_pressPoint: any;

let g_freePathPointArray: any[];

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
    
    let ctx = canvas.getContext("2d");

    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    let btnLine = document.getElementById("btnLine");
    let btnRectangle = document.getElementById("btnRectangle");
    let btnEllipse = document.getElementById("btnEllipse");
    let btnFreePath = document.getElementById("btnFreePath");
        
    btnLine.addEventListener("click", e => {setDrawType(LINE_DRAW_TYPE);}, false);
    btnRectangle.addEventListener("click", e => {setDrawType(RECTANGLE_DRAW_TYPE);}, false);
    btnEllipse.addEventListener("click", e => {setDrawType(ELLIPSE_DRAW_TYPE);}, false);
    btnFreePath.addEventListener("click", e => {setDrawType(FREE_PATH_DRAW_TYPE);}, false);
    
    canvas.addEventListener("mousedown", (e: any) => {
        let canvasImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        g_pressPoint = relativePosition(e, canvas);
        
        g_freePathPointArray = [];
        
        let mousemoveEventListener = (e: any) => {
            ctx.putImageData(canvasImageData, 0, 0);
            
            let movePoint = relativePosition(e, canvas);
            
            g_freePathPointArray.push(movePoint);
            
            drawing(ctx, movePoint);
        };
        
        document.addEventListener("mousemove", mousemoveEventListener, false);
        
        let mouseupEventListener = (e: any) => {
            let upPoint = relativePosition(e, canvas);
            
            g_freePathPointArray.push(upPoint);
            
            ctx.putImageData(canvasImageData, 0, 0);
        
            drawing(ctx, upPoint);
        
            document.removeEventListener("mousemove", mousemoveEventListener, false);
            document.removeEventListener("mouseup", mouseupEventListener, false);
        };
        
        document.addEventListener("mouseup", mouseupEventListener, false);
        
    }, false);
    
    let strokeWidthChangeEventListener = function(e: any) {
        ctx.lineWidth = this.value;
    };

    let size = [1,2,3,4,5,6,8,10,12,14,16,20,24,28];
    let select =  document.createElement("select");
    for(let i=0; i < size.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value",size[i].toString());
        let optionText = document.createTextNode(size[i].toString());
        option.appendChild(optionText);
        
        select.appendChild(option);
    }
    select.selectedIndex = 7;
    
    select.addEventListener("change", strokeWidthChangeEventListener,false);
    
    let labelStrokeWidth = document.createElement("label");
    let labelStrokeWidthText = document.createTextNode(" 선 너비: ");
    
    labelStrokeWidth.appendChild(labelStrokeWidthText);
    labelStrokeWidth.appendChild(select);
    
    toolbar.appendChild(labelStrokeWidth);
    
    var strokeColorChangeEventListener = function(e: any) {
        ctx.strokeStyle = this.value;
    };
    
    var labelForStrokeColor = createLabelForColor(" 선 색: ", "#FF0000", strokeColorChangeEventListener);
    
    toolbar.appendChild(labelForStrokeColor);
    
    //Change_Start
    var fillColorChangeEventListener = function(e: any) {
        ctx.fillStyle = this.value;
    };
    //Change_End
    
    //Change_Start
    var labelForFillColor = createLabelForColor(" 채움 색: ", "#0000FF", fillColorChangeEventListener);
    
    toolbar.appendChild(labelForFillColor);
    //Change_End
}

function createButton(imagePath: string, id: string) {
    let inputImage = document.createElement("input");
    inputImage.setAttribute("type","image");
    inputImage.setAttribute("src",imagePath);
    inputImage.setAttribute("id",id);
    
    return inputImage;
}

function createLabelForColor(text: string, defaultValue: any, changeEventListener: any) {
    var labelForColor = document.createElement("label");
    var labelText = document.createTextNode(text);
    
    var inputColor = document.createElement("input");
    inputColor.setAttribute("type","color");
    
    inputColor.value = defaultValue;
    
    inputColor.addEventListener("change", changeEventListener, false);

    labelForColor.appendChild(labelText);
    labelForColor.appendChild(inputColor);
    
    return labelForColor;
}

function setDrawType(drawType: Symbol) {
    g_DrawType = drawType;
}

function relativePosition(event: any, element: any) {
    let rect = element.getBoundingClientRect();
    return { x: Math.floor(event.clientX - rect.left),
                y: Math.floor(event.clientY - rect.top ) };
}

function drawing(ctx: any, p: any) {
    if(g_DrawType === LINE_DRAW_TYPE) {
        ctx.beginPath();
        ctx.moveTo(g_pressPoint.x, g_pressPoint.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
    }
    else if(g_DrawType === RECTANGLE_DRAW_TYPE) {
        let w = p.x - g_pressPoint.x;
        let h = p.y - g_pressPoint.y;
        
        ctx.fillRect(g_pressPoint.x, g_pressPoint.y, w, h);
        
        ctx.strokeRect(g_pressPoint.x, g_pressPoint.y, w, h);
    }
    else if(g_DrawType === ELLIPSE_DRAW_TYPE) {
        let w = p.x - g_pressPoint.x;
        let h = p.y - g_pressPoint.y;
        
        drawEllipseByBezierCurve(ctx, g_pressPoint.x, g_pressPoint.y, w, h);
    }
    else if(g_DrawType === FREE_PATH_DRAW_TYPE) {
        ctx.beginPath();
        ctx.moveTo(g_pressPoint.x, g_pressPoint.y);
        
        for(let i = 0; i < g_freePathPointArray.length; i++) {
            ctx.lineTo(g_freePathPointArray[i].x, g_freePathPointArray[i].y);
        }
        
        ctx.stroke();
    }
}

function drawEllipseByBezierCurve(ctx: any, x: number, y: number, w: number, h: number) {
        let kappa = .5522848,
            ox = (w / 2) * kappa,
            oy = (h / 2) * kappa,
            xe = x + w,
            ye = y + h,
            xm = x + w / 2,
            ym = y + h / 2;

        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        
        ctx.fill();
        
        ctx.stroke();
}
