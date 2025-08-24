const launches = new Map();

let latestFlightNumer = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('August 24, 2026'),
    target: 'Kepler 442-b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumer++;
    launches.set(latestFlightNumer, Object.assign(launch, {
        flightNumber: latestFlightNumer,
        customers: ['Zero to Mastery', 'NASA'],
        upcoming: true,
        success: true
    }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch
};