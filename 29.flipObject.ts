const people = {
    bob: "JS Developer",
    alice: "AI Engineer",
    jon: "JS Developer",
    nick: "UX Designer",
  };
  
  function flipObject(people) {
     const flippedPeople = {};
  
    for (const name in people) {
      const job = people[name];
      if (!flippedPeople[job]) {
        flippedPeople[job] = [];
      }
      flippedPeople[job].push(name);
    }
  
    return flippedPeople;
      
  }
  
  export { flipObject };
  