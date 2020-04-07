
function s1(){
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    
    const body = {}
    
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    
    fetch("https://enqhf8jl70i8e.x.pipedream.net/", options)
}
function s2(){
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      return this.responseText;
    }
  };
}