
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
    $.get("https://api.ipdata.co?api-key=test", function(response) {
    console.log(response.country_name);
}, "jsonp");
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