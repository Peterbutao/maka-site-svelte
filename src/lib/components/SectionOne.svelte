<script>
    import Links from '$lib/components/SectionOne/Links.svelte';
    import MainText from '$lib/components/SectionOne/MainText.svelte'
</script>


<section class="frst-section">
    <div class="frst-sect">

        <div class="fs-main" >
            <div class="fsm" >

                <div class="fsm-one" >
                    <div class="fsmo">
                        <p>WE ARE ANIMATION</p>
                        
                    </div>
                </div>
                <!--maintext-->
                <MainText />

                <div class="fsm-three" >
                    <div class="fsmth">
                        <div class="ft-mn">
                            <p>STUDIOS</p>
                        </div>
                        <div class="ft-sub">
                            <p>LET CREATIVITY SHINE AND CONQUER</p>
                        </div>
                    </div>
                </div>                                
                
            </div>
            
            <div class="r-glass"></div>
        </div>

        <div class="fs-foot">
            <div class="fsf">
                <!--links-->
                <Links />             


                <div class="fsf-gs">
                    <a href="/contact">Get Started 🍕</a>
                </div>
            
            </div>
        </div>

    </div>
</section>

<style lang="scss">
    @mixin font($cl, $sz, $wt) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: $cl;
        font-size: $sz;
        font-weight: $wt;
    }
    .frst-section{
        min-height:100vh !important;        
        display:flex;
        background-image:url("/src/lib/assets/img/bg.jpg");
        background-size:cover;
        background-repeat:no-repeat;
        background-blend-mode:multiply;
        background-color:rgba(0, 0, 0, 0.664);
        background-position:center;
        
        .frst-sect{
            padding-top: 15vh;
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            max-width:65rem;
            margin:0 auto;
            padding-left:20px;
            padding-right:20px;
            .fs-main{
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            padding: 5px 0px;
            .fsm{
                display:flex;
                align-items:center;
                flex-direction:column;
                .fsm-one{
                    text-align:start;
                    .fsmo{
                        @include font(var(--pc), 0.85rem, 450);                    
                        border-left:var(--lc) solid 1.1px;
                        padding-left:0.625rem;
                        letter-spacing:0.125rem;

                        }
                
                }
                .fsm-three {
                    .fsmth{
                        .ft-mn{
                                                            
                            font-family:Avenir, Helvetica, Arial, sans-serif;
                            -webkit-font-smoothing:antialiased;
                            -moz-osx-font-smoothing:grayscale;
                            color:#ffffff67;
                            font-weight:800;
                            letter-spacing:2.5px;
                            border-bottom:rgba(255,255,255,0.474) solid 1px;
                            border-width:2.5px;

                        }
                        .ft-sub{
                            @include font(#ffffff94, 0.85rem, 400);                           
                            padding-top:0.9375rem;
                            }
                    }

                }

            }
        }

        .fs-foot .fsf{

            display:flex;
            justify-content:space-between;
            align-items:center;
            padding-bottom:15px;
            .fsf-gs{
                margin-left:auto;
                border:white solid 1px;
                padding:5px 15px;
                border-radius:4rem;
                margin-bottom: 20px;
                a{
                    text-decoration:none;
                    @include font(var(--lc), 1rem, 200);

                    
                }
            }
        }

        }
    }


        /*modile*/
    @media screen and (max-width: 768px){
        .frst-section{
            min-height:100vh !important;
        }
        .fsm{
            width:100%}

        .fsm-three .fsmth .ft-mn{font-size:3rem;padding:0}

        
    }
    @media screen and (max-width: 300px){
     

        .fsm-three .fsmth .ft-mn{font-size:2rem;padding:0}

        
    }

        /*desktop*/

    @media screen and (min-width: 768px){
        
        .fsm-three .fsmth .ft-mn{
            font-size:3.5rem;

        }
        
        
       
    }


</style>