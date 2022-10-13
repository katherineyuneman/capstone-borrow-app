
import './App.css';
import Home from './Home';
import {Route, Routes, useNavigate} from "react-router-dom"
import { GeneralStyle } from './styled-components/styleIndex';
import Signup from './Signup';

function App() {

  return (
    <GeneralStyle>
        <Home />
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Home handleFoodSubmit={handleFoodSubmit}/>} />
          <Route path="/foods" element={<FoodContainer homeSearchedFoods={homeSearchedFoods}/>} />
          <Route path="foods/:id" element={<FoodDetail />} />
          <Route path="foods/:id/recipes" element={<FoodRecipes />} />
          <Route path="/recipes" element={<RecipeContainer />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/edit/:id" element={<RecipeEditForm />} />
          <Route path="/recipes/:id" element={<Recipe />} /> */}
        </Routes>
    </GeneralStyle>
   
  );
}

export default App;
