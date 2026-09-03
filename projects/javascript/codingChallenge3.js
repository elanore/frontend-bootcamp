{
  // Test data
  const scoreDolphins = (96 + 108 + 89) / 3;
  const scoreKoalas = (88 + 91 + 110) / 3;

  console.log(scoreDolphins); // 97.66666666666667
  console.log(scoreKoalas); // 96.33333333333333

  // Determine the winner
  if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
  } else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
  } else {
    console.log("Both win the trophy");
  }
}
