function buildFenceCommand(numOfFencePosts, fencePostMaterial) {
  for (let i = 1; i <= numOfFencePosts; i++) {
    console.log(
      `JARVIS is now building ${fencePostMaterial} fence post number ${i}`
    );
  }
}

buildFenceCommand(10, "iron");

function directTurretDefenceCommand(numOfTurrets, numOfDetectedZombies) {
  for (let i = 1; i <= numOfDetectedZombies; i++) {
    console.log(`Directing ${numOfTurrets} turrets' fire to zombie #${i}.`);
  }
}

directTurretDefenceCommand(5, 10);

function gatherSupplies(suppliesToLookFor) {
  let foundCount = 0;

  for (let i = 0; i < suppliesToLookFor.length; i++) {
    const supply = suppliesToLookFor[i];
    console.log(`JARVIS has found some ${supply}!`);
    foundCount++;
  }

  return foundCount;
}

const supplies = ["canned food", "aspirin", "bandages"];
const foundItems = gatherSupplies(supplies);
console.log(`JARVIS found a total of ${foundItems} items.`);

function raiderAvoidancePlan(targetsFoundWhileForaging) {
  let totalTargets = 0;
}
