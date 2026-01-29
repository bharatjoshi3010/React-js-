// console.log(React)   //we already linked the CDN so now our webpage know what react is

//Creating a element with the help of React
// syntax  -> var VarName = React.createElement('elementName', attribute or Props, "innerHtml")
var FirstEle = React.createElement('h1', null, "Hello from the first element")
console.log(FirstEle)
//react created the UI component, but we want to show it on our frontend, so here comes the ReactDOM which helps to connect react and our DOM

var parent = document.querySelector("#parent")      //we selected the div with id : parent

var root = ReactDOM.createRoot(parent)      //we make that div as Root
root.render(FirstEle)               //then we render the element inside that root