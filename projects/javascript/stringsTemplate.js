{
  const firstName = "Shiny";
  const job = "Software Engineer";
  const birthYear = 1985;
  const year = 2024;

  //old method
  const shiny =
    " I'm " +
    firstName +
    ", a " +
    (year - birthYear) +
    " year old " +
    job +
    "!";
  //using template literals
  const shinyNew = ` I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
  console.log(shinyNew);
}
