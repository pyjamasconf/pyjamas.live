data = {
    "talks": [
        {
            "title": "Olá Mundo",
            "datetime": "2019-12-13T16:00:00",
            "duration": 14400,
            "embed_link": "https://www.youtube.com/embed/3bIw6294Skk",
            "link": "https://www.youtube.com/watch?v=3bIw6294Skk"
        },
        {
            "title": "Olá Outro Mundo",
            "datetime": "2019-12-14T16:00:00",
            "duration": 14400,
            "embed_link": "https://www.youtube.com/embed/3bIw6294Skk",
            "link": "https://www.youtube.com/watch?v=3bIw6294Skk"
        },
    ]
}

function getTimeZonedDate(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * offset));

    return nd
}

function isHappeningNow(talk) {
    //const now = new Date()
    const now = getTimeZonedDate('-2')
    const start = new Date(talk.datetime)
    const durationInMs = talk.duration * 60000
    const end = new Date(start.getTime() + durationInMs)
    return start <= now && end >= now
}

function talkToHTML(talk) {
    var talk_time = new Date(talk.datetime);
    return `
<div id="talk-${talk.title}" class="col-xl-5 col-md-5">
    <h2> <a href="${talk.link}"> ${talk.title} </a></h2>
    ${talk_time.toDateString()} - ${talk_time.toTimeString()}
    <iframe
    id="video"
    width="560"
    height="315"
    src="${talk.embed_link}"
    >
    </iframe>
</div>
`
}

const talks = data.talks.filter(isHappeningNow)
document.getElementById('talks').innerHTML = talks.map(talkToHTML).join('\n')
