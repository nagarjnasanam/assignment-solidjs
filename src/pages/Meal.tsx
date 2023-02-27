import type { Component } from 'solid-js';

import {onMount,createRenderEffect,createSignal,For,createEffect} from 'solid-js'
import axios from 'axios'
import {API_KEY} from '../data/sk'
import Table from '../components/Table';
import TimeTable from '../components/TimeTable';
const [timeFrame, setTimeFrame] = createSignal("day");
const [diet, setDiet] = createSignal("vegetarian");
const [targetCalories, setTargetCalories] = createSignal(2000);
const [exclude, setExclude] = createSignal("pumpkin");
const [meals,setMeals] = createSignal({
})
const [week,setWeek] = createSignal()


const Meal: Component = () => {
    function model(el, value) {
        // console.log(el.value)
        // console.log('el',el)
        // console.log('value',value)
        const [field, setField] = value();
        createRenderEffect(() => (el.value = field()));
        el.addEventListener("input", (e) => setField(e.target.value));
      }
      const geneRateMeal = async()=>{
        console.log("generating meal")
        // https://api.spoonacular.com/mealplanner/generate?apiKey=116f8790f37c49e2944ae148accd5b5c&timeFrame=day&diet=vegetarien
       await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=${timeFrame()}&diet=${diet()}&targetCalories=${targetCalories()}&exclude=${exclude()}`).then((res)=>{
        console.log(res)
        
        setMeals(()=>[{meals:res.data.meals,nutrients:res.data.nutrients}])
        setWeek(res.data)
        console.log(meals()[0].meals)

    })
    createEffect(()=>{
        console.log(meals(),'changed')
        console.log(timeFrame(),'frame changed')
    })
    }
  return (
    <div >
      <div >
      <div class="container">
        <div class=" text-center mt-5 ">

            <h1 >Generate Meal Plan</h1>
                
            
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
                            <label for="form_name"> TimeFrame</label>
                            <input id="form_name" type="text" name="name" use:model={[timeFrame, setTimeFrame, setTimeFrame]} class="form-control" placeholder="Please enter time frame"  data-error="Firstname is required." />
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Diet </label>
                            <input id="form_lastname" type="text" use:model={[diet, setDiet]} name="surname" class="form-control" placeholder="Please enter your Diet"  data-error="Lastname is required." />
                                                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Target Calories</label>
                            <input id="form_email" type="email" name="email" use:model={[targetCalories, setTargetCalories]} class="form-control" placeholder="Please enter your Calories"  data-error="Valid email is required." />
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Exclude Item</label>
                            <input id="form_email" type="text" name="email" use:model={[exclude, setExclude]} class="form-control" placeholder="Please enter  your not included item"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div>
                    {/* <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Alcohol</label>
                            <input id="form_email" type="text" name="email" use:model={[alcohol,setAlcohol]} class="form-control" placeholder="Please enter  minimum alcohol"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div>   <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need"> Iron</label>
                            <input id="form_email" type="text" name="email" use:model={[iron,setIron]} class="form-control" placeholder="Please enter  minimum Iron"  data-error="Valid email is required." />
                            
                            
                      </div>
                    </div> */}
                </div>
                <div class="col-sm-12">
                <button onClick={geneRateMeal} class="btn-success float-sm-right">Search</button>
                   
                </div>
             


        </div>
         {/* </form> */}
        </div>
            </div>


    </div>
    <br />
     
   

    {/* {meals().length>0 && <Show
      when={timeFrame()==='day'}
      fallback={<p>hjvkjv</p>}
    >
      {meals().length>0 && <Table data={meals()}  week={week()} />}
    </Show>}
    */}
    {
        meals().length>0 && <Table data={meals()}  week={week()} day={timeFrame()} />
    }


 
    </div>
  

</div>

</div>

    </div>
    </div>
  );
};

export default Meal;
