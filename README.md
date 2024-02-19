# Show-Me-The-Code
Namste React Episode 4


#notes
>you should know what you are going to build
>UI Planing and design
>What component can my App have?
>Header
  -Logo
  -Nav Item
>Body
  -Search
  -RestrorentContainer
  -RestaurantsCard
      -Img
	  -Name Of Restaurant
	  -Star Rating
	  -cuisine
	  -time of delivery
	  
	  
>Footer
  -CopyWrite
  -Links
  -Address 
  -Contact Us  
  
 <b>How to give Inline CSS in JSX<b>
>the syntax is different 
>In react inline Css take as JS object using {}
>although it is not preferred way to write the code

const styleCard = {
backgroundColor: "#f0f0f0",
};

here function crated and now we have called it in the below line 

const RestaurantsCard = () => {
  return <div className="res-card" style={styleCard}>
    <h3>Spices</h3>
  </div>;
};

**Or**

const RestaurantsCard = () => {
  return <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    <h3>Spices</h3>
  </div>;
};

> So here the First {Bracket}} is Telling that here is some JS Code{JavaScript}
> And the Second {Bracket} is Telling that here is some JS Object{JavaScript Object}

59:48

<b>Props</b>

Props is short form of properties 
props is something that can be passed to the components
we can pass data dynamically through Props 
<b>Passing a prop to components is just like passing a  argument to a function</b>
Props are just normal argument to a function  

>Passing props to the components below 
 <RestaurantsCard  resName="Spice Kitchen" cuisine ="Biryani, North Indian, Asian"/>
 <RestaurantsCard resName="KFC" cuisine ="Burger, Wings, Fries" />

 >SO here <b>resName</b> and cuisine is the the props so we are passing into the component
 >This is called passing props to a components
 >React will wrap and pass it as an object
 >React will take all these props and wrap it inside an object and pass over (1:04:15)
 >Props is an object here
 
>Now we can use this props a using {props.resName} so it will give the name of restaurant 
<b>When you have to dynamically passing some data into a component you pass in as a PROPS</b>

> Sometimes developer Do Destructing on the fly 

const resCard = ({reName, cusion}}) => {
};

<h3>{reName}</h3>> insted of props.reName

>this is Destructing JS


*** Config Driven UI ****
>UI is driven by config as per the Data and location 
>On different location it will appear as per data the UI is changed 


**Array Join JS properties
**If you have to give comma from API data Then 
>>>do array.join and give comma for the data coming from API like the below

 <h4>{resData.info.cuisines.join(", ")}</h4>
 
 
>>Data Will be array of object so that we can featch the data from array
 
**Opentional Channing 
>>The optional chaining ?. is a safe way to access nested object properties, 
  even if an intermediate property doesn’t exist. 
  
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)


**Can we loop over array and create one Cart to avoid this below 
        <RestaurantsCard resData={resList[0]} />
        <RestaurantsCard resData={resList[1]} />
        <RestaurantsCard resData={resList[2]} />
        <RestaurantsCard resData={resList[3]} />
        <RestaurantsCard resData={resList[4]} />
        <RestaurantsCard resData={resList[5]} />
		
**	Map FIlter Reduce read it again	
>By using array Map method

 {resList.map((restaurant) => (
          <RestaurantsCard resData={restaurant} />
        ))} 


** How to resolve Unique Key Property Error or Each child in a list should have a unique "key" prop.
>Each of this  <RestaurantsCard  resData={restaurant} /> list item uniquely represented
> Each of this item have Key over here <RestaurantsCard key={} resData={restaurant} /> whenever you are looping any list 
>you have to pass unique ID 
>whenever you are doing .Map then you have to always have to give key

 >React itself says that don't use INDEX as key as it is bad practice 
>>If there will be no ID then you can use Index as key but it is not recommended
 
** Why We use the Key 
>React Optimise its render cycle

not using keys(Not acceptable)<<<<Index as a key <<<Unique ID (Best Practice)  
