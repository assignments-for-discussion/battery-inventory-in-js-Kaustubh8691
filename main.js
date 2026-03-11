const assert = require('assert');


function countBatteriesByHealth(presentCapacities) {

  const ratedCapacity = 120;

  let healthy = 0;
  let exchange = 0;
  let failed = 0;

  presentCapacities.forEach(capacity => {

    const soh = (capacity / ratedCapacity) * 100;

    if (soh > 83 && soh <= 100) {
      healthy++;
    } 
    else if (soh >= 63 && soh <= 83) {
      exchange++;
    } 
    else {
      failed++;
    }

  });

  return {
    healthy: healthy,
    exchange: exchange,
    failed: failed
  };
}


function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  // console.log(counts);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
