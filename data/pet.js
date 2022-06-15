/*let option = {
            //fetch에 대한 옵션
            method :'get',
            headers : {
                'Authorization' : 'KakaoAK c3ddd22f63504e64990b771c9b8af571'
            }

        };*/


              


        fetch('/getData')

        .then(res=>res.json())
        .then(done => {
            console.log(done);
            console.log(done[0].elements[1].elements[21].elements);
            console.log(done[0].elements[1].elements[21].elements[0].text);
            //console.log(json.list[0].STOCKRS_DUTY_DIV_NM);
            for(let j= 1; j<6; j++){
                var jsonData = done[0].elements[j].elements[0].elements[0].text;
                document.getElementById('text').innerHTML += '<td>'+jsonData+'</td>';
                let x = done[0].elements[j].elements[21].elements[0].text
                console.log(x);
                //document.getElementById("text").innerText += jsonData ;
                console.log(jsonData);
                
                //document.getElementById('text').innerText = jsonData[0].elements[0]
            }
            //let jsonData = done[0].elements[1];
            /*document.getElementById('text').value =
                jsonData.SIGUN_NM;
                console.log(jsonData);
            */
            for (let idx in jsonData) {
                document.getElementById('text').value =
                    jsonData[idx].STOCKRS_DUTY_DIV_NM ;
           }
            console.log(jsonData);
            /*for(let i = 0; i <= 6; i++){
                //console.log(done[0].elements.slice(1,)[0].elements.slice(0,)[0].elements[0].text);
                console.log(done[0].elements[1]);
            }
            
            alert(done[0].elements.slice(1,)[0].elements.slice(0,)[0].elements[0].text);*/
            
        })
        .catch(function(err){
            console.log('err : ', err);
        });
        let positions = [];
        console.log(positions);