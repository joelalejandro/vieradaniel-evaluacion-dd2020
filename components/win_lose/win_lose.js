const templateWinLose = document.createElement('template');
templateWinLose.innerHTML=`

<style>
.card{
    background: linear-gradient(180deg, #E5E5E5 0%, #FFFFFF 100%);
}
.card{
    padding-top:2rem;
    font-family: acumin-pro-extra-condensed;
    font-weight: 700;
    font-style: italic;
    width:100%;
    height:100vh    
   
    
}
.won-lost-score{
    display:flex;
    justify-content:space-between;
}
.score {
    display:flex;
    margin-bottom:1rem;
    
    
        
}

.score .p1 {
    color :#FFF;
    background: black;
    margin:0;
    padding:0.1rem;
    width:7rem;
    font-size: 1.5rem;
    text-align:center;

   
}
.score .p2{ 
    background:#FFF;
    margin:0;
    padding:0 0.3rem;
    font-size: 1.5rem;
    margin: 0 0.2rem;
    
}
.round-one-container{
    background:#FFF;
    
    display:flex;
    justify-content:center;
    font-size: 2rem;
    margin: 0 5rem;
    margin-bottom: 1rem;
}
h1{
    margin:none;
}
.win-lose{
    margin:0;
    
}
.pokenames{ 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
p{
    margin:0;
}
.pokeName1 ,.pokeName2{
    color:white;
    background:black;
    font-size:1.5rem;
    padding:0.1rem;
}
.pokeName1{
    margin-right:12rem;
}
.pokeName2{
    margin-left:3rem;
}
.vs{
    background:#FFF;
    font-size:1rem;
    padding:0.1rem;
}
#pokePicture{
    width: 20rem;
}
.total{
    margin-top: -1.5rem;
}
.thisRound{
    display:flex;
    align-items:flex-end;
}

</style>

<div class="card">

    
    <div class="pokenames">
        <p class="pokeName1">Pikachu</p>
        <span class="total">0/5</span>
        
        
        
    </div>

    <div class="round-one-container">
        <h1 class="win-lose">WON/LOST </h1> 
        <p class="thisRound">this round</p>      
    </div>
   

    
    
    <div class="won-lost-score">
        <div class="score">
            <p class="p1">WON</p>
            <p class="p2 pokeCounter1">00</p>
            
            
        </div>

        <div class="score">
            <p class="p2 pokeCounter2">00</p>
            <p class="p1">LOST</p>
           
        </div>
    </div>
    <img id="pokePicture" src=""alt="pokemon-picture"> 

    
</div>
`
class WinLose extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateWinLose.content.cloneNode(true));
    }

    get pokemonName(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName;
    }
    get pokemonCounter1(){
        return this.shadowRoot.querySelector('.pokeCounter1').innerHTML;
    }
    set pokemonCounter1(newPokeCounter1){
        if(newPokeCounter1== null){
            newPokeCounter1 = "0";
        }
        this.shadowRoot.querySelector('.pokeCounter1').innerHTML = "0"+ newPokeCounter1;
        this.shadowRoot.querySelector('.win-lose').innerHTML = "WON";
    }

    get pokemonName2(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName2(newPokeName2){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName2;
    }
    get pokemonCounter2(){
        return this.shadowRoot.querySelector('.pokeCounter2').innerHTML;
    }
    set pokemonCounter2(newPokeCounter2){
        if(newPokeCounter2 == null){
            newPokeCounter2 = "0";
        }
        this.shadowRoot.querySelector('.pokeCounter2').innerHTML = "0"+ newPokeCounter2;
        this.shadowRoot.querySelector('.win-lose').innerHTML = "LOST";
    }
    get pokemonName3(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName3(newPokeName3){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName3;
    }
    get pokemonName4(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName4(newPokeName4){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName4;
    }
    get pokemonName5(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName5(newPokeName5){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName5;
    }
    get pokemonName6(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName6(newPokeName6){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName6;
    }
    get pokemonImage(){
        return this.shadowRoot.querySelector('#pokePicture').src;
    }
    set pokemonImage(newPokeImage){
        this.shadowRoot.querySelector('#pokePicture').src = newPokeImage;
    }
    get total(){
        return this.shadowRoot.querySelector('.total').innerHTML;
    }
    set total(newTotal){
        this.shadowRoot.querySelector('.total').innerHTML = (newTotal - 1) + "/5";
       
        
    }

    connectedCallback(){
        this.pokemonName=this.getAttribute("pokemonName");
        this.pokemonCounter1=this.getAttribute("pokeCounter1");
        this.pokemonName2=this.getAttribute("pokemonName2");
        this.pokemonCounter2=this.getAttribute("pokeCounter2");
        this.pokemonName3=this.getAttribute("pokemonName3");
        this.pokemonName4=this.getAttribute("pokemonName4");
        this.pokemonName5=this.getAttribute("pokemonName5");
        this.pokemonName6=this.getAttribute("pokemonName6");
        this.pokemonImage = this.getAttribute("pokemonImage");
        this.total=this.getAttribute("total") ;
        
        
    }
    


}

window.customElements.define('win-lose',WinLose);