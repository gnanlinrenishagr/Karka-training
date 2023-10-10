let resume_builder = {

}
let each_tmp = {

}
let username="gnanlinrenisha"
function parsedata(ele, p_key) {

    if (p_key) {

        if (resume_builder[p_key]) {

            resume_builder[p_key] = {
                ...resume_builder[p_key]
            }
        }
        else {

            resume_builder[p_key] = {}
        }

        resume_builder[p_key][ele.name] = ele.value
    }
    else {

        resume_builder[ele.name] = ele.value
    }

    display()
}
function handmulkey(p_key, ele, ski) {

    if (!resume_builder[p_key]) {

        resume_builder[p_key] = []
    }

    if (ele) {

        let element = document.getElementById(ele)

        if (element.value == "") {

            alert("Enter your" + " " + p_key + " " + "here")
            element.focus()
        }
        else {

            resume_builder[p_key].push(element.value)
            display()
        }
        element.value = ""
        displayarray(p_key, ski)


    }
    else {

        resume_builder[p_key].push(each_tmp)
        for (i = 0; i < resume_builder[p_key].length; i++) {

            ndlist = Object.keys(resume_builder[p_key][i])

            for (i = 0; i < ndlist.length; i++) {

                document.getElementById(ndlist[i]).value = ""
            }


        }
        displayobject(p_key, ski)
        each_tmp = {}
        display()
    }




}
function displayarray(p_key, ski) {

    let data = [...resume_builder[p_key]]
    htmldata = ""
    for (i = 0; i < data.length; i++) {

        htmldata = htmldata + `<badge class="p-2">${data[i]}</badge>` + `<button type="button" class="btn btn-primary close p-2" aria-label="Close" onclick="del('${p_key}','${data[i]}','${ski}')">
        <span aria-hidden="true">&times;</span>
      </button>`


    }
    document.getElementById(ski).innerHTML = htmldata
    display()
}


function del(p_key, ele, ski) {

    let data = [...resume_builder[p_key]]
    let new_data = []


    for (i = 0; i < data.length; i++) {

        if (ele != data[i]) {

            new_data.push(data[i])

        }
    }

    resume_builder[p_key] = new_data

    display()
    displayarray(p_key, ski)

}
function handmulobject(ele) {

    each_tmp[ele.name] = ele.value

}
function displayobject(p_key, para) {
    let html = ''
    for (i = 0; i < resume_builder[p_key].length; i++) {
        let data = resume_builder[p_key][i]
        for (const key in data) {
            html = html + `<tr><td>${key}</td><td>${data[key]}</td><td><button type='button'class='btn btn-primary' onclick="del1('${p_key}','${data[key]}','${key}','${para}')">Delete</button></td></tr>`

            console.log(`${key}:${data[key]}`)
        }
    }
    document.getElementById(para).innerHTML = html
}
function del1(p_key, dkey, key, para) {
    console.log("hi")
    let data = []
    for (i = 0; i < resume_builder[p_key].length; i++) {

        let keysof = resume_builder[p_key]
        let nd = keysof[i][key]
        console.log(nd)
        if (nd != dkey) {
            data.push(keysof[i])
        }
    }
    resume_builder[p_key] = data
    display()
    displayobject(p_key, para)
}
function display() {

    document.getElementById("display_data").innerHTML = JSON.stringify(resume_builder, undefined, 2)
    console.log(resume_builder)
}
function create(){
    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",
        data: {request : "create_resume",
            user : username,
            resume:resume_builder
            },

        success: function (res) {
           
            console.log("response",res)
      
        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function seeresume(){
    $("#table").show()
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request : "get_user_resume",
            user : username,
            },

        success: function (res) {
           let data=JSON.parse(res)
            console.log("response",data)
            let tabledata=""
            for(i=0;i<data.data.length;i++){
                tabledata=tabledata+`<tr>
                <th>${data.data[i].id}</th>
                <td>${data.data[i].user}</td>
                <td><button type="button" class="btn btn-primary" onclick="delresume(${data.data[i].id})">Delete</button></td>
                <td><a href="list.html?id=${data.data[i].id}">List</a></td>
              </tr>`
            }
            $("#resume").html(tabledata)
            console.log(tabledata)
      
        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function delresume(id){
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request : "delete_user_resume",
            user : username,
            id
            },

        success: function (res) {
           let data=JSON.parse(res)
            console.log("response",data)
            seeresume()
            
      
        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function listresume(id){
    console.log("hi",id)
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request : "get_resume_by_id",
            user : username,
            id
            },

        success: function (res) {
           let data=JSON.parse(res)
            console.log("response",data)
      
        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
