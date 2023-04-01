document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log('apply-bg clicked');
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})