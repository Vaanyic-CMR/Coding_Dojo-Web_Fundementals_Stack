var likes = [0, 0, 0];

function addLike(post_num){
    let displayLikes = document.querySelector("#num_likes_" + post_num)
    likes[post_num]++;
    if (likes[post_num] == 1){
        displayLikes.innerText = likes[post_num] + " like"
    }else {
        displayLikes.innerText = likes[post_num] + " likes";
    }
}