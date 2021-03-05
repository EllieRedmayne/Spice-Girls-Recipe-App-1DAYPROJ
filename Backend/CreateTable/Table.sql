CREATE TABLE Recipes(
    Id SERIAL PRIMARY KEY,
    Title TEXT,
    Author TEXT,
    Method TEXT,
    TimeTaken INT

)

INSERT INTO Recipes (
    Title, Author, Method, TimeTaken
)
VALUES ('Egg', 'Stella Taylor', 'Sit on egg for 1.5 hours. When you feel it warm up, take hammer and smash on plate for EGG-celent breakfast', 2);
INSERT INTO Recipes (
    Title, Author, Method, TimeTaken
)
VALUES ('Picnic', 'Rishi Sunak', 'Empty all contents of fridge into bag. Take to the park. Eat food on grass. So you eat out to help out', 1),('Cookies', 'Cookie Monster', 'Make cookies. Eat cookies, make cookies, eat cookies, make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat cookies,make cookies, eat COOKIIIEEESSSSS', 24);