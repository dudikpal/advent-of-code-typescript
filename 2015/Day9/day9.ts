type Route = {
    station1: string;
    station2: string;
    distance: number;
}

let routes: Route[];
let resultRoute: string[];
let numberOfStations: number;
let input: string;


// longest journey
export function part2(fileInput: string): number {

    input = fileInput;
    fillRoutes(input);
    numberOfStations = calculateNumberOfStations();
    let journeyDistance = 0;
    let nextRoute = startRoute('longest');

    journeyDistance += nextRoute.distance;

    resultRoute.push(nextRoute.station1);
    resultRoute.push(nextRoute.station2);


    for (let i = 0; i < numberOfStations - 2; i++) {

        const source1 = resultRoute[0];
        const source2 = resultRoute[resultRoute.length - 1];
        const target1 = selectNextRoute(source1, 'longest');
        const target2 = selectNextRoute(source2, 'longest');

        if (target1.distance > target2.distance) {

            const newTarget = target1.station1 === source1 ? target1.station2 : target1.station1;

            resultRoute.unshift(newTarget);
            removeUnusedStationsFromRoutes(source1);
            journeyDistance += target1.distance;

        } else if (target1.distance <= target2.distance) {

            const newTarget = target2.station1 === source2 ? target2.station2 : target2.station1;

            resultRoute.push(newTarget);
            removeUnusedStationsFromRoutes(source2);
            journeyDistance += target2.distance;

        }
    }

    return journeyDistance;
}

// shortest journey
export function part1(fileInput: string): number {

    input = fileInput;
    fillRoutes(input);
    numberOfStations = calculateNumberOfStations();
    let journeyDistance = 0;
    let nextRoute = startRoute('shortest');

    journeyDistance += nextRoute.distance;

    resultRoute.push(nextRoute.station1);
    resultRoute.push(nextRoute.station2);


    for (let i = 0; i < numberOfStations - 2; i++) {

        const source1 = resultRoute[0];
        const source2 = resultRoute[resultRoute.length - 1];
        const target1 = selectNextRoute(source1, 'shortest');
        const target2 = selectNextRoute(source2, 'shortest');

        if (target1.distance < target2.distance) {

            resultRoute.unshift(target1.station1 === source1 ? target1.station2 : target1.station1);
            routes.splice(routes.indexOf(target1), 1);
            journeyDistance += target1.distance;

        } else if (target1.distance >= target2.distance) {

            resultRoute.push(target2.station1 === source2 ? target2.station2 : target2.station1);
            routes.splice(routes.indexOf(target2), 1);
            journeyDistance += target2.distance;

        }
    }

    return journeyDistance;
}


function removeUnusedStationsFromRoutes(stationName: string) {
    routes
        .forEach((route, index) => {
            if (route.station1 === stationName || route.station2 === stationName) {
                routes.splice(index, 1);
            }
        });
}


function selectNextRoute(station: string, type: string): Route {

    if (type === 'shortest') {

        return routes.filter(route => route.station1 === station ||
            route.station2 === station)
            .sort()
            [0];

    } else if (type === 'longest') {

        return routes.filter(route => route.station1 === station ||
            route.station2 === station)
            .sort()
            .reverse()
            [0];

    }

    return {station1: '', station2: '', distance: 0};
}


function calculateNumberOfStations() {

    return (1 + Math.sqrt(1 - (4 * -1 * routes.length * 2))) / 2;
}


function startRoute(part: string): Route {

    if (part === 'shortest') {

        return routes
            .sort((a, b) => a.distance - b.distance)
            .shift()!;

    } else if (part === 'longest') {

        return routes
            .sort((a, b) => a.distance - b.distance)
            .pop()!;

    }

    return {station1: '', station2: '', distance: 0};
}


function fillRoutes(input: string) {

    routes = [];
    resultRoute = [];
    const datas = input.split(/\n|\r\n/);

    for (const line of datas) {

        const start = line.match(/^\w+/)![0];
        const end = line.match(/\w+(?=\s=)/)![0];
        const distance = line.match(/\d+$/)![0];

        routes.push({station1: start, station2: end, distance: +distance});
    }
}
