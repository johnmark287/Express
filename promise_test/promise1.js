const userLeft = true
const userWatchingMeme = false

function watchTvPromise() {
    return new Promise((res, rej) => {
        if (userLeft) {
            rej({
                name: 'User Left',
                message: 'User left the channel'
            })
        } else if (userWatchingMeme) {
            rej({
                name: 'User watching cat meme.',
                message: 'USer watching Express.js vids'
            })
        } else {
            res('Success')
        }
    })
}