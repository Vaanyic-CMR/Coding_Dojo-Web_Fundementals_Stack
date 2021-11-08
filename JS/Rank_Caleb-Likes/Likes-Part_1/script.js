var likes = 0;
var displayLikes = document.querySelector(".post_likes")

function addLike(){
    likes++;
    if (likes == 1){
        displayLikes.innerText = likes + " like"
    }else {
        displayLikes.innerText = likes + " likes";
    }
}