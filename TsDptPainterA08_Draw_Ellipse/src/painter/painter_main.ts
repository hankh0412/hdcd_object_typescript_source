//Change_Start_DEL
/*
const LINE_DRAW_TYPE = 0;
const RECTANGLE_DRAW_TYPE = 1;
const ELLIPSE_DRAW_TYPE = 2;
const FREE_PATH_DRAW_TYPE = 3;
*/
//Change_End

//Change_Start
const LINE_DRAW_TYPE = Symbol("line");
const RECTANGLE_DRAW_TYPE = Symbol("rectangle");
const ELLIPSE_DRAW_TYPE = Symbol("ellipse");
const FREE_PATH_DRAW_TYPE = Symbol("free_path");
//Change_End

let g_DrawType: Symbol = LINE_DRAW_TYPE;

let g_pressPoint: any;

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
        
        let mousemoveEventListener = (e: any) => {
            ctx.putImageData(canvasImageData, 0, 0);
            
            let movePoint = relativePosition(e, canvas);
            
            drawing(ctx, movePoint);
        };
        
        document.addEventListener("mousemove", mousemoveEventListener, false);
        
        let mouseupEventListener = (e: any) => {
            let upPoint = relativePosition(e, canvas);
        
            ctx.putImageData(canvasImageData, 0, 0);
        
            drawing(ctx, upPoint);
        
            document.removeEventListener("mousemove", mousemoveEventListener, false);
            document.removeEventListener("mouseup", mouseupEventListener, false);
        };
        
        document.addEventListener("mouseup", mouseupEventListener, false);
        
    }, false);
}

function createButton(imagePath: string, id: string) {
    let inputImage = document.createElement("input");
    inputImage.setAttribute("type","image");
    inputImage.setAttribute("src",imagePath);
    inputImage.setAttribute("id",id);
    
    return inputImage;
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
    //Change_Start
    else if(g_DrawType === ELLIPSE_DRAW_TYPE) {
        let w = p.x - g_pressPoint.x;
        let h = p.y - g_pressPoint.y;
        
        drawEllipseByBezierCurve(ctx, g_pressPoint.x, g_pressPoint.y, w, h);
    }
    //Change_End
}

//Change_Start
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
//Change_End
