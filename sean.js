
function s1(){
    let guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.ipdata.co/?api-key=test');
    
    request.setRequestHeader('Accept', 'application/json');
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    };
    
    request.send();
    var s1 = guid()
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    const body = { "ID":s1}
    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
    }
    fetch("https://enqhf8jl70i8e.x.pipedream.net/", options)
}