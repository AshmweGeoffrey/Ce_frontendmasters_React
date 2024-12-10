const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita Classica",
      description:
        "Traditional Italian pizza with fresh mozzarella, basil, and San Marzano tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Deluxe",

      description:
        "Loaded with spicy pepperoni, melted cheese, and zesty tomato base",
    }),
    React.createElement(Pizza, {
      name: "Quattro Formaggi",

      description:
        "Four-cheese blend featuring mozzarella, gorgonzola, parmesan, and ricotta",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian Paradise",

      description:
        "Fresh seasonal vegetables, herbs, and premium olive oil on crispy thin crust",
    }),
    React.createElement(Pizza, {
      name: "Diavola Picante",

      description: "Spicy salami, hot chili peppers, and smoky marinara sauce",
    }),
    React.createElement(Pizza, {
      name: "Prosciutto e Funghi",

      description:
        "Delicate ham, wild mushrooms, and truffle-infused mozzarella",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
