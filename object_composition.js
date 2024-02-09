class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing the following changes...`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is bulding UI ...`);
    },
  };
}

function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API ...`);
    },
  };
}

function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app to production.`);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackendDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}
 
function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name){
    const developer = new Developer(name);
    

}