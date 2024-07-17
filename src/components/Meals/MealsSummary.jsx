import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className={classes.heading}>HANDMADE DESSERTS WITH LOVE</h2>
      <p>
        Discover a world of delightful handmade sweets, crafted with love and
        delivered to your doorstep. Indulge in our exquisite selection of
        traditional and modern desserts, perfect for any occasion.
      </p>
      <p>
        All our sweets are cooked with high quality ingredients, just in time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
