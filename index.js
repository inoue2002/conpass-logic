// 現在地の緯度経度と目的地の緯度経度を受け取って,方角と距離を求める
function getDirectionAndDistance(currentLatitude, currentLongitude, destinationLatitude, destinationLongitude) {
  // 現在地と目的地の緯度経度から方角を求める
  const direction = getDirection(currentLatitude, currentLongitude, destinationLatitude, destinationLongitude);
  // 現在地と目的地の緯度経度から距離を求める
  const distance = getDistance(currentLatitude, currentLongitude, destinationLatitude, destinationLongitude);
  return { direction, distance };
}

/**
 * @file index.js
 * @description 現在地と目的地の緯度経度から方角を求める関数
 */

function getDirection(currentLatitude, currentLongitude, destinationLatitude, destinationLongitude) {
  const lat1Rad = currentLatitude * (Math.PI / 180);
  const lon1Rad = currentLongitude * (Math.PI / 180);
  const lat2Rad = destinationLatitude * (Math.PI / 180);
  const lon2Rad = destinationLongitude * (Math.PI / 180);

  const y = Math.sin(lon1Rad - lon2Rad) * Math.cos(lat1Rad);
  const x = Math.cos(lat2Rad) * Math.sin(lat1Rad) - Math.sin(lat2Rad) * Math.cos(lat1Rad) * Math.cos(lon1Rad - lon2Rad);

  let bearing = Math.atan2(y, x);
  bearing = bearing * (180 / Math.PI);
  bearing = (bearing + 360) % 360;

  return bearing;
}

/**
 * @file index.js
 * @description 現在地と目的地の緯度経度から距離を求める関数
 */

// Start of Selection
const R = Math.PI / 180;

function getDistance(currentLatitude, currentLongitude, destinationLatitude, destinationLongitude) {
  currentLatitude *= R;
  currentLongitude *= R;
  destinationLatitude *= R;
  destinationLongitude *= R;
  return (
    6371 *
    Math.acos(
      Math.cos(currentLatitude) * Math.cos(destinationLatitude) * Math.cos(destinationLongitude - currentLongitude) +
        Math.sin(currentLatitude) * Math.sin(destinationLatitude)
    )
  );
}

function main() {
  // 千里山駅
  const currentLatitude = 34.7786477;
  const currentLongitude = 135.5049935;

  // 太陽の塔
  //   const destinationLatitude = 34.8087829;
  //   const destinationLongitude = 135.5292145;

  // 新大阪駅
  //   const destinationLatitude = 34.7334702;
  //   const destinationLongitude = 135.4976744;

  // ユニバーサルシティ
  //   const destinationLatitude = 34.6678092;
  //   const destinationLongitude = 135.4336921;

  // 大津プリンス
  //   const destinationLatitude = 35.0049669;
  //   const destinationLongitude = 135.8865536;

  // 州浜橋
  const destinationLatitude = 34.3488198;
  const destinationLongitude = 134.8933117;

  const { direction, distance } = getDirectionAndDistance(
    currentLatitude,
    currentLongitude,
    destinationLatitude,
    destinationLongitude
  );
  console.log(`方角: ${direction}°`);
  console.log(`距離: ${distance}km`);
}

main();
