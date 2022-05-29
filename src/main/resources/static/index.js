$(() => {
    $("#selectRandom").click(()=> {

        const field1 = "";
        const title = "";
        let likes = "";
        const id = "";
        const meme = "";
        const commnr = "";
        const created = "";
        const body = "";
        const time = "";




        const comment = {

            field1 : field1,
            title : title,
            likes: likes,
            id : id,
            meme: meme,
            commnr : commnr,
            created : created,
            body : body,
            time: time
        }

        hentComment()


    });
})

const hentComment = () => $.get("/api/comments", comments => formater(comments))
const hentComment2 = () => $.get("/api/comments2", comments => formater2(comments))
const hentComment3 = () => $.get("/api/comments3", comments => formater3(comments))

const formater = comments => {
    let ut = "";

    if(comments.length > 0){
        ut += "<table class=\"table table-striped table-bordered border-warning text-white\"><tr>" +
            "<th>Meme</th><th>Title</th><th>Likes</th><th>Time</th>" +
            "</tr>";

        for(const comment of comments){
            ut+="<tr>";
            ut+="<td> <img src='"+comment.url+"' width='300px' height='300px' class='img-thumbnail'></td><td>'"+comment.title+"'</td><td>"+comment.score+"</td><td>"+comment.timestamp+"</td>";
            ut+="</tr>";
        }

        ut += "</table>";
    }

    $("#meme").html(ut);
}

const inputval = comment => {
    if(comment.field1 === ""){
        return false
    }
}

$('#siteload').ready(function(){
    hentComment2()
});

const formater2 = comments => {
    let ut = "";

    if(comments.length > 0){
        ut += "<table class=\"table table-striped table-bordered border-warning text-white\"><tr>" +
            "<th>Rank</th><th>Meme</th><th>Title</th><th>Likes</th>" +
            "</tr>";

        for(const comment of comments){
            ut+="<tr>";
            ut+="<td>"+(comment.field1 + 1)+"</td><td> <img src='"+comment.url+"' width='300px' height='300px' ></td><td>'"+comment.title+"'</td><td>"+comment.score+"</td>";
            ut+="</tr>";
        }

        ut += "</table>";
    }

    $("#meme2").html(ut);
}

$('#siteload2').ready(function(){
    hentComment3()
});

const formater3 = comments => {
    let ut = "";

    if(comments.length > 0){
        ut += "<table class=\"table table-striped table-bordered border-warning text-white\"><tr>" +
            "<th>Rank</th><th>Meme</th><th>Title</th><th>Likes</th>" +
            "</tr>";

        for(const comment of comments){
            ut+="<tr>";
            ut+="<td>"+(comment.field1)+"</td><td> <img src='"+comment.url+"' width='300px' height='300px'></td><td>'"+comment.title+"'</td><td>"+comment.score+"</td>";
            ut+="</tr>";
        }

        ut += "</table>";
    }

    $("#meme3").html(ut);
}

