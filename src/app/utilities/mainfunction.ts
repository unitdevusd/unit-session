export function segment(list) {
    // status 1 = confirm , 2 = canceld 3 = complete
    let bookedlist : []  = list.filter(x => x.bookedStatus == "confirm");
    let cancledList = list.filter(x => x.bookedStatus == "canceled");
    let completedList = list.filter(x => x.bookedStatus == "complete");
    return {
        bookedlist,
        cancledList,
        completedList
    }
}

export function getDays(startDate, endDate){
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let firstDate : any = new Date(startDate);
    let secondDate : any = new Date(endDate);
    let diffDays : number = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays);
    return diffDays;
}


export function getEmbedUrl(url){
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
        // return `www.youtube.com/embed/${match[2]}`
    } else {
        return 'error';
    }
}