import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import video from '../assets/video/burger.mp4';

const Indian = [
    {
        title: "Pav Bhaji",
        description: "Boil & mash vegetables: Boil 2 potatoes, 1 cup cauliflower, 1/2 cup peas, 1 carrot, and 1/2 capsicum. Mash them well.Sauté spices: In a pan, heat butter, add cumin seeds, chopped onions, and green chilies. Cook until onions turn golden.Add tomatoes: Add chopped tomatoes and cook until soft.Spices: Add ginger-garlic paste, pav bhaji masala, red chili powder, and salt. Cook until fragrant.Mix vegetables: Add the mashed vegetables, mix well, and cook for 10-15 minutes. Adjust spices and consistency with water.Serve: Garnish with butter, coriander, and lemon juice. Serve with buttered, toasted pav (bread rolls).",
        imgUrl: "https://st4.depositphotos.com/17366968/40821/i/450/depositphotos_408212918-stock-photo-pav-bhaji-indian-traditional-popular.jpg",
    },
    {
        title: "Vada pav",
        description: "Make potato filling: Mash boiled potatoes. Sauté mustard seeds, curry leaves, green chilies, and ginger-garlic paste. Add turmeric, salt, and mashed potatoes. Mix and cool.Prepare batter: Make a thick batter with gram flour (besan), water, turmeric, salt, and a pinch of baking soda.Form vadas: Shape the potato filling into balls, dip them in the batter, and deep fry until golden.Assemble: Slice pav (bread buns), spread green chutney, tamarind chutney, and garlic chutney. Place the fried vada in between the pav.Serve: Enjoy with fried green chilies on the side!",
        imgUrl: "https://cookingfromheart.com/wp-content/uploads/2020/06/Vada-Pav-2.jpg",
    },
    {
        title: "Puri Bhaji",
        description: "Ingredients:For Puri:2 cups whole wheat flour 1 tsp salt Water (as needed)Oil (for deep frying)For Bhaji3-4 medium potatoes (boiled and mashed) 1 onion (finely chopped)1-2 green chilies (finely chopped) 1 tsp ginger (grated) 1 tsp mustard seeds 1/2 tsp turmeric powder 1 tsp cumin powderSalt (to taste)Fresh coriander (for garnish)Oil (for cooking)Instructions:Puri:In a bowl, mix flour and salt. Gradually add water to form a smooth dough.Cover and let it rest for 20-30 minutes.Divide the dough into small balls and roll them out into small discs.Heat oil in a deep pan and fry the discs until they puff up and turn golden brown. Drain on paper towels.Bhaji:Heat oil in a pan. Add mustard seeds and let them splutter.Add onions, green chilies, and ginger. Sauté until onions are soft.Stir in the mashed potatoes, turmeric powder, cumin powder, and salt. Mix well and cook for a few minutes.Garnish with fresh coriander.Serve:Enjoy the hot puris with the bhaji!",
        imgUrl: "https://images.picxy.com/cache/2020/7/11/6f815303f8e9a4f5a529fe5712829442.jpg",
    },

    {
        title: "Chicken Biryani",
        description: "Ingredients:For Puri:2 cups whole wheat flour 1 tsp salt Water (as needed)Oil (for deep frying)For Bhaji3-4 medium potatoes (boiled and mashed) 1 onion (finely chopped)1-2 green chilies (finely chopped) 1 tsp ginger (grated) 1 tsp mustard seeds 1/2 tsp turmeric powder 1 tsp cumin powderSalt (to taste)Fresh coriander (for garnish)Oil (for cooking)Instructions:Puri:In a bowl, mix flour and salt. Gradually add water to form a smooth dough.Cover and let it rest for 20-30 minutes.Divide the dough into small balls and roll them out into small discs.Heat oil in a deep pan and fry the discs until they puff up and turn golden brown. Drain on paper towels.Bhaji:Heat oil in a pan. Add mustard seeds and let them splutter.Add onions, green chilies, and ginger. Sauté until onions are soft.Stir in the mashed potatoes, turmeric powder, cumin powder, and salt. Mix well and cook for a few minutes.Garnish with fresh coriander.Serve:Enjoy the hot puris with the bhaji!",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqK8o26NMwiM93mw5SmAXs5oRUImx6BIVl0V5w8f8HVnI16FNZ9G--mR2g2sSLW1gfUsw&usqp=CAU",
    },
   
];
const American = [
    {
        title: "Hot Dog",
        description: "Ingredients:Hot dog sausagesHot dog bunsMustard, ketchup, or your choice of condimentsOptional toppings: diced onions, relish, sauerkraut, shredded cheeseInstructions:Cook the Sausages:Grill, boil, or pan-fry the hot dog sausages until heated through (about 5-7 minutes).Warm the Buns:Toast the buns on the grill or in a toaster for a minute if desired.Assemble:Place a sausage in each bun.Add Condiments:Top with mustard, ketchup, and any other toppings you like.Serve:Enjoy your hot dogs with chips or a side salad!",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlAloSKMfNdQXaGxMFCuUgp3Pk-wZHOrxGw&s",
    },
    {
        title: "Apple Pie",
        description: "Ingredients: For the crust: 2 ½ cups all-purpose flour 1 tsp salt 1 tbsp sugar 1 cup unsalted butter (cold, diced) 6-8 tbsp ice water For the filling: 6-8 apples (peeled, cored, and sliced; Granny Smith and Honeycrisp work well) ¾ cup sugar 1 tsp cinnamon 2 tbsp lemon juice 2 tbsp all-purpose flour Instructions: 1. Make the Crust: In a bowl, mix flour, salt, and sugar. Cut in the butter until the mixture resembles coarse crumbs. Gradually add ice water until the dough comes together. Divide into two discs, wrap, and refrigerate for 1 hour. 2. Prepare the Filling: In a large bowl, combine apple slices, sugar, cinnamon, lemon juice, and flour. Toss to coat. 3. Assemble the Pie: Preheat oven to 425°F (220°C). Roll out one dough disc and fit it into a pie pan. Fill with the apple mixture and top with the second rolled-out dough. Seal and cut slits for steam. 4. Bake: Bake for 15 minutes, then reduce the temperature to 350°F (175°C) and bake for an additional 35-40 minutes until the apples are tender and the crust is golden.",
        imgUrl: "https://natashaskitchen.com/wp-content/uploads/2019/10/Apple-pie-served.jpg",
    },
    {
        title: "Tater Tots",
        description: "Ingredients: 2 lbs potatoes (Russet or Yukon Gold) 1/4 cup all-purpose flour 1 egg (lightly beaten) 1 tsp salt 1/2 tsp black pepper Oil (for frying or baking) Instructions: 1. Prepare Potatoes: Boil potatoes in salted water until tender (about 15-20 minutes). Drain and let cool slightly. Peel and grate the potatoes into a bowl. 2. Mix Ingredients: Add flour, egg, salt, and pepper to the grated potatoes. Mix until combined. 3. Shape Tots: Take small portions of the mixture and shape them into small cylindrical tots. 4. Cook Tots: For frying: Heat oil in a deep pan. Fry the tots until golden brown (about 3-4 minutes). Drain on paper towels. For baking: Preheat the oven to 400°F (200°C). Place tots on a baking sheet, brush with oil, and bake for 25-30 minutes, flipping halfway through. Serve: Enjoy your tater tots with ketchup or your favorite dipping sauce!",
        imgUrl: "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2014/11/Cheesy-Tater-Tots-2-1.jpg",
    },
    {
        title: "Puri Bhaji",
        description: "Ingredients:For Puri:2 cups whole wheat flour 1 tsp salt Water (as needed)Oil (for deep frying)For Bhaji3-4 medium potatoes (boiled and mashed) 1 onion (finely chopped)1-2 green chilies (finely chopped) 1 tsp ginger (grated) 1 tsp mustard seeds 1/2 tsp turmeric powder 1 tsp cumin powderSalt (to taste)Fresh coriander (for garnish)Oil (for cooking)Instructions:Puri:In a bowl, mix flour and salt. Gradually add water to form a smooth dough.Cover and let it rest for 20-30 minutes.Divide the dough into small balls and roll them out into small discs.Heat oil in a deep pan and fry the discs until they puff up and turn golden brown. Drain on paper towels.Bhaji:Heat oil in a pan. Add mustard seeds and let them splutter.Add onions, green chilies, and ginger. Sauté until onions are soft.Stir in the mashed potatoes, turmeric powder, cumin powder, and salt. Mix well and cook for a few minutes.Garnish with fresh coriander.Serve:Enjoy the hot puris with the bhaji!",
        imgUrl: "https://images.picxy.com/cache/2020/7/11/6f815303f8e9a4f5a529fe5712829442.jpg",
    },

    
   
];

const Italian = [
    {
        title: "Pizza",
        description: "Dough: Mix 2 ¼ tsp yeast with 1 ½ cups warm water. Add 3 ½ cups flour, 1 tsp salt, 2 tbsp olive oil. Knead until smooth, let rise for 1 hour. Sauce: Mix 1 cup tomato sauce, 1 tsp oregano, 1 tsp garlic powder, and salt to taste. Toppings: Spread sauce over rolled-out dough. Add mozzarella cheese, your favorite toppings (pepperoni, veggies, etc.). Bake: Preheat oven to 475°F (245°C). Bake for 10-15 minutes until crust is golden and cheese is bubbly. Enjoy your homemade pizza!",
        imgUrl: "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg",
    },
    {
        title: "white sauce pasta",
        description: "Ingredients: 2 cups pasta (penne or fettuccine) 2 tbsp butter 2 tbsp all-purpose flour 2 cups milk 1 cup grated cheese (like mozzarella or Parmesan) 1/2 tsp garlic powder (optional) Salt and pepper (to taste) Optional: vegetables (like broccoli, peas, or bell peppers) Instructions: 1. Cook Pasta: Boil pasta in salted water according to package instructions. Drain and set aside. 2. Make White Sauce: In a saucepan, melt butter over medium heat. Add flour and whisk for 1-2 minutes until golden. Gradually add milk, whisking constantly until the sauce thickens. Stir in cheese, garlic powder, salt, and pepper. Mix until the cheese is melted and smooth. 3. Combine: Add the cooked pasta (and any vegetables) to the sauce. Stir well to coat. 4. Serve: Serve hot, garnished with extra cheese or herbs if desired!",
        imgUrl: "https://images.slurrp.com/webstories/wp-content/uploads/2022/09/shutterstock_1674931981.jpg",
    },
    {
        title: "Risotto",
        description: "Ingredients: 1 cup Arborio rice 4 cups chicken or vegetable broth (warmed) 1 small onion (finely chopped) 2 cloves garlic (minced) 1/2 cup white wine (optional) 1/2 cup grated Parmesan cheese 2 tbsp butter Salt and pepper (to taste) Optional: herbs (like parsley or thyme) for garnish Instructions: 1. Sauté Aromatics: In a large pan, melt 1 tablespoon of butter over medium heat. Add onion and garlic, sautéing until soft. 2. Toast Rice: Add Arborio rice, stirring for 1-2 minutes until the rice is slightly translucent. 3. Add Wine: Pour in white wine (if using) and stir until absorbed. 4. Cook Risotto: Gradually add warmed broth, one ladle at a time, stirring frequently. Wait until the liquid is mostly absorbed before adding more. Continue until the rice is creamy and al dente (about 18-20 minutes). 5. Finish: Stir in the remaining butter and Parmesan cheese. Season with salt and pepper. Serve: Garnish with herbs and serve hot!",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iRvc6h7ruGjQQA1QNxG0Onva6K6tbRRm9g&s",
    },
    {
        title: "Puri Bhaji",
        description: "Ingredients:For Puri:2 cups whole wheat flour 1 tsp salt Water (as needed)Oil (for deep frying)For Bhaji3-4 medium potatoes (boiled and mashed) 1 onion (finely chopped)1-2 green chilies (finely chopped) 1 tsp ginger (grated) 1 tsp mustard seeds 1/2 tsp turmeric powder 1 tsp cumin powderSalt (to taste)Fresh coriander (for garnish)Oil (for cooking)Instructions:Puri:In a bowl, mix flour and salt. Gradually add water to form a smooth dough.Cover and let it rest for 20-30 minutes.Divide the dough into small balls and roll them out into small discs.Heat oil in a deep pan and fry the discs until they puff up and turn golden brown. Drain on paper towels.Bhaji:Heat oil in a pan. Add mustard seeds and let them splutter.Add onions, green chilies, and ginger. Sauté until onions are soft.Stir in the mashed potatoes, turmeric powder, cumin powder, and salt. Mix well and cook for a few minutes.Garnish with fresh coriander.Serve:Enjoy the hot puris with the bhaji!",
        imgUrl: "https://images.picxy.com/cache/2020/7/11/6f815303f8e9a4f5a529fe5712829442.jpg",
    },
];

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <video
                src={video}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="flex-grow relative z-10 p-5">
                <div className="flex justify-between mb-5">
                    <div className="logoDiv p-6 py-4 flex">
                        <Icon icon="arcticons:recipe-keeper" color="white" width="40" />
                        <div className="text-4xl text-white font-teko">
                            <Link to="/home">Yum</Link>
                        </div>
                    </div>
                    <div>
                        <Link to="/login" className="text-white px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Login</Link>
                        <Link to="/signup" className="text-white px-4 py-2 bg-green-600 rounded hover:bg-green-500 ml-2">Sign Up</Link>
                    </div>
                </div>
                
                <PlaylistView titleText="Indian" cardsData={Indian} />
                <PlaylistView titleText="American" cardsData={American} />
                <PlaylistView titleText="Italian" cardsData={Italian} />
            </div>
            <Footer />
        </div>
    );
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {cardsData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-80 w-1/3 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt={title} />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-white text-sm">{description}</div>
        </div>
    );
};

export default Home;
