<script>
    let glow = false;
</script>

<p class="maka-txt" class:glow={glow} on:click={() => {glow = !glow}} >
    MAKA
</p>

<style>  

    .maka-txt{
        line-height: 0 !important;
        cursor: pointer;
        font-weight:800;
        letter-spacing:2px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:var(--lc);


    }
    .glow{
        text-shadow:    0 0 10px rgba(255, 245, 238, 0.486),
                        0 0 20px rgba(255, 245, 238, 0.521),   
                        0 0 40px rgba(255, 245, 238, 0.616),   
                        0 0 80px rgba(255, 245, 238, 0.356),   
                        0 0 120px rgba(255, 245, 238, 0.5),   
                        0 0 160px rgba(255, 245, 238, 0.432) ;

    }
   


        /*modile*/
    @media screen and (max-width: 768px){
        
        .maka-txt{
            font-size:5em; 
            }
        
    }
    @media screen and (max-width: 300px){
        
        .maka-txt{
            font-size:4rem;
            }
        
    }

        /*desktop*/

    @media screen and (min-width: 768px){
        .maka-txt{
            font-size:6rem;
            letter-spacing: 2.5px;

            
            ;
        }
        
        
       
    }


</style>