import Card from "../UI/Cards";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "s1",
    name: "Gulab Jamun",
    description: "Deep-fried milk balls soaked in sugar syrup",
    price: 12.99,
  },
  {
    id: "s2",
    name: "Rasgulla",
    description:
      "Spongy white balls made from cottage cheese, soaked in sugar syrup",
    price: 10.99,
  },
  {
    id: "s3",
    name: "Jalebi",
    description: "Deep-fried swirls of batter soaked in sugar syrup",
    price: 8.99,
  },
  {
    id: "s4",
    name: "Ladoo",
    description: "Round balls made from flour, sugar, and ghee",
    price: 9.5,
  },
  {
    id: "s5",
    name: "Kaju Katli",
    description: "Diamond-shaped sweets made from cashews and sugar",
    price: 15.99,
  },
  {
    id: "s6",
    name: "Barfi",
    description:
      "Square or diamond-shaped sweets made from condensed milk and sugar",
    price: 11.5,
  },
  {
    id: "s7",
    name: "Peda",
    description:
      "Soft, semi-circular sweets made from condensed milk and sugar",
    price: 10.5,
  },
  {
    id: "s8",
    name: "Modak",
    description: "Steamed or fried dumplings filled with coconut and jaggery",
    price: 13.99,
  },
  {
    id: "s9",
    name: "Gajar Ka Halwa",
    description:
      "Sweet dessert pudding made from grated carrots, milk, and sugar",
    price: 14.99,
  },
  {
    id: "s10",
    name: "Rasmalai",
    description: "Soft cottage cheese patties soaked in sweetened milk",
    price: 12.5,
  },
  {
    id: "s11",
    name: "Kalakand",
    description: "Soft, grainy milk cake flavored with cardamom",
    price: 11.99,
  },
  {
    id: "s12",
    name: "Mysore Pak",
    description:
      "Rich, crumbly sweet made from chickpea flour, sugar, and ghee",
    price: 9.99,
  },
  {
    id: "s13",
    name: "Sohan Papdi",
    description: "Flaky, brittle sweet made from gram flour and ghee",
    price: 8.5,
  },
  {
    id: "s14",
    name: "Malpua",
    description: "Deep-fried pancakes soaked in sugar syrup",
    price: 7.99,
  },
  {
    id: "s15",
    name: "Shrikhand",
    description: "Hung curd flavored with saffron, cardamom, and nuts",
    price: 10.99,
  },
  {
    id: "s16",
    name: "Petha",
    description: "Soft, translucent candy made from ash gourd and sugar",
    price: 6.99,
  },
  {
    id: "s17",
    name: "Cham Cham",
    description: "Fluffy, oval-shaped sweets soaked in sweetened milk",
    price: 11.5,
  },
  {
    id: "s18",
    name: "Coconut Ladoo",
    description: "Round balls made from coconut and condensed milk",
    price: 9.5,
  },
  {
    id: "s19",
    name: "Anjeer Barfi",
    description: "Square sweets made from dried figs, milk solids, and sugar",
    price: 12.5,
  },
  {
    id: "s20",
    name: "Peda",
    description:
      "Soft, semi-circular sweets made from condensed milk and sugar",
    price: 10.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
