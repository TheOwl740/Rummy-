//INITIALIZATION OF ENGINE REFERENCES
const cs = new Canvas(document.getElementById("mainCanvas")); //sets canvas object reference for other tools
const rt = new RenderTool(cs); //creates a new render tool object to draw on the canvas 
const tk = new Toolkit(); //creates a new toolkit component for various functions
const et = new EventTracker(cs); //creates a new event tracker to gather info on user input

//CANVAS ELEMENT SETUP
cs.setDimensions(window.visualViewport?.width || window.innerWidth, window.visualViewport?.height || window.innerHeight);
cs.fillAll(new Fill("black", 1))