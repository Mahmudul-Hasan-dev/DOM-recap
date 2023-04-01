//apply background by calling class group
document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log('apply-bg clicked');
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})

//apply style fro specific element by id
document.getElementById('center-third').addEventListener('click', function () {
    const thirdfriend = document.getElementById('third-friend');
    thirdfriend.style.textAlign = 'center'
})

//add div by js

document.getElementById('add-friend').addEventListener('click', function () {
    console.log('added friend')
    const friendContainer = document.getElementById('friends-section');
    const friend = document.createElement('div');
    // friend.classList = "friend"
    friend.classList.add('friend')
    friend.innerHTML = `
    <h3 class="friend-name">new friend</h3>
    <p>loren irnsionwoiur asojijfe knurhsj huhkalj8e jhudhusnvuhurkgnh</p>
    `
    friendContainer.appendChild(friend);
})