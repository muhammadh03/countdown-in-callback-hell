let mainDiv = document.createElement('div');
mainDiv.setAttribute('class', 'mainDiv')
document.body.append(mainDiv);

let count = 10;

const countDown = function () {   
    mainDiv.textContent = count;
    // console.log(count)
    count--;
    if (count >= 0) {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        setTimeout(function () {
                            setTimeout(function () {
                                setTimeout(function () {
                                    countDown();
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    } else {
        mainDiv.textContent = 'Happy Independence Day';
    }
}
countDown();
