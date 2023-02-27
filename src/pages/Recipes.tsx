import type { Component } from 'solid-js';
import axios from 'axios'
import {createSignal,createRenderEffect} from 'solid-js'
import RTable from '../components/ReceipeTable'
import {API_KEY} from '../data/sk.js'
const Recipes: Component = () => {
  console.log('api',API_KEY)
  const [name,setName] = createSignal('pastha')
  const [diet,setDiet] = createSignal('vegetarian')
  const [ingredient,setIngredient] = createSignal('tomato')
  const [protein,setProtein] = createSignal(20)
  const [alcohol,setAlcohol] = createSignal(10)
  const [iron,setIron] = createSignal(30)
  const [res,setRes] =createSignal()
  function model(el, value) {
    // console.log(el.value)
    // console.log('el',el)
    // console.log('value',value)

    const [field, setField] = value();
    createRenderEffect(() => (el.value = field()));
    el.addEventListener("input", (e) => setField(e.target.value));
  }
  const searchRecipes = async()=>{
    console.log("searching")
    // &number=20&includeIngredients=${ingredient()}&minProtein=${protein()}&minAlcohol=${alcohol()}&minIron=${iron()}
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=116f8790f37c49e2944ae148accd5b5c&query=pasta&maxFat=25&number=20
   await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name()}&number=20&includeIngredients=${ingredient()}&minProtein=${protein()}&minAlcohol=${alcohol()}&minIron=${iron()}`).then((response)=>{
    console.log(response)
    setRes(response.data)
    console.log(res())
    })
}
  return (
    <div >
      <div class="container">
        <div class=" text-center mt-5 ">

            <h1 > Search Recipes Form</h1>
                
            
        </div>

    
    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-3 bg-dark">
            <div class="card-body bg-light">
       
            <div class = "container">
                             {/* <form id="contact-form" role="form"> */}

            

            <div class="controls">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name"> Recipe Name</label>
                            <input id="form_name" type="text" name="name" use:model={[name, setName]} class="form-control" placeholder="Please enter your Recipe Name *"  data-error="Firstname is required." />
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Diet </label>
                            <input id="form_lastname" type="text" use:model={[diet,setDiet]} name="surname" class="form-control" placeholder="Please enter your Diet"  data-error="Lastname is required." />
                                                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Include Ingredients</label>
                            <input id="form_email" type="email" name="email" use:model={[ingredient,setIngredient]} class="form-control" placeholder="Please enter your Ingredients"  data-error="Valid email is required." />
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Protein</label>
                            <input id="form_email" type="text" name="email" use:model={[protein,setProtein]} class="form-control" placeholder="Please enter  minimum protein"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Alcohol</label>
                            <input id="form_email" type="text" name="email" use:model={[alcohol,setAlcohol]} class="form-control" placeholder="Please enter  minimum alcohol"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div>   <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Iron</label>
                            <input id="form_email" type="text" name="email" use:model={[iron,setIron]} class="form-control" placeholder="Please enter  minimum Iron"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div>
                </div>
                <div class="col-sm-12">
                <button onClick={searchRecipes} class="btn-success float-sm-right">Search</button>
                   
                </div>
             


        </div>
         {/* </form> */}
        </div>
            </div>


    </div>
     
    </div>
  
   
</div>
{/* <RTable data={res()} /> */}
{res() && <RTable data={res()} /> }


</div>


    </div>
  );
};

export default Recipes;
