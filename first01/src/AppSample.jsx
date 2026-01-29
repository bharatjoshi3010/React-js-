// app -> main -> root
// the data goes from here to main and the main's data go inside the root
// Root is a div inside index.HTML

function App(){
  // return "Hello"
  return <div>
    <h1>Hello</h1>
    <h2>Not Hello</h2>
  </div>
}

// this return is visible in the ui

export default App  