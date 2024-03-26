function ex26032024(input) {
    let movieArr = [];
    for (let line of input) {
        line = line.split(' ');
        let objectMovie = {};
        if (line.includes('addMovie')) {
            line.shift();
            let movieName = line.join(' ');
            objectMovie.name = movieName;
            movieArr.push(objectMovie);
        } else if (line.includes('directedBy')) {
            let movieNameIndex = line.indexOf('directedBy');
            let movieName = line.slice(0, movieNameIndex).join(' ');
            let director = line.slice(movieNameIndex + 1).join(' ');
            for (let movie of movieArr) {
                if (movie.name === movieName) {
                    movie.director = director;
                }
            }
        } else if (line.includes('onDate')) {
            let movieNameIndex = line.indexOf('onDate');
            let movieName = line.slice(0, movieNameIndex).join(' ');
            let date = line.slice(movieNameIndex + 1).join(' ');
            for (let movie of movieArr) {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            }
        }
    }
    for (let final of movieArr) {
        if (final.hasOwnProperty('name') && final.hasOwnProperty('director') && final.hasOwnProperty('date')) {
            let finalObject = JSON.stringify(final);
            console.log(finalObject);
        }
    }
}

ex26032024([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
