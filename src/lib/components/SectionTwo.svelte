<script>

    import Carousel from "/src/lib/components/svelte-carousel";
    const text = [
    "/slide/img(1).jpg",
    "/slide/img(2).jpg",
    "/slide/img(3).jpg",
  ]
</script>

<section class="snd-section">

    <div class="snd-sect">

        <div class="title">
            <p>Our Work</p>
        </div>
        
        <!--video-->
        <div class="vid-div">
            <div class="video">
                <video class="vid" autoplay muted="false" controls>
                    <source class="source" src="/video/vid(1).mp4" type="video/mp4">                    
                    
                
                </video>
                
            
            </div>

            <div class="vid-para">
                <p>Maka Creative Group, Believes in the power of story telling and the virtuosity of original content. We flunt this art, through <strong>Our Work </strong>. Spanning from advertising to breathing life into <strong>Your</strong> Untold Stories</p>
            </div>
        </div>

        <div class="title">
            <p>What We Do</p>
        </div>

        <!--image slider-->
        <div class="slide-box">
            <div class="vid-para">
                <p>Maka Creative Group, Believes in the power of story telling and the virtuosity of original content. We flunt this art, through <strong>Our Work </strong>. Spanning from advertising to breathing life into <strong>Your</strong> Untold Stories</p>
            </div>
            <div  class="slider" >   
                <div class="slideshow-container">
            
            
                    <div class="myslides">
                        <Carousel
                        autoplay=true
                
                        >
                        {#each text as tx}
                            <img alt="maka artworks" src={tx}>
                        {/each}
                        </Carousel>
            
                    </div>
            
            
            
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

    

        
    .snd-section{
        background: var(--bc);
        .snd-sect{
               
            .title {
                text-align: right;
                @include font(var(--tc), 1rem, 400);
                padding: 0px 10px;

            }
            
            max-width:65rem; 
            margin:auto;
            overflow:hidden;
            .slider{
                background: var(--pc);
            
            .slideshow-container{
                position: relative;
                margin: auto;
            
                .myslides{
            
                img{
                    width: 100%;
                    transition: .5s linear;
        
                }
        
                
                }
        
        
            }
            }

            .video{
                position:relative;
                z-index:50;
                background:var(--lc);
                video{
                    width: 100%;
                    transform: translateX(0);
                    opacity:1.0;
                    transition: all 500ms;
                }
            }
            

            .vid-para{
              padding:15px 10px;
              p{
                @include font(var(--tc), 1.1rem, 500);
                line-height:25px;
                strong{
                    color: var(--pc);
                }
                }
             }
        }
    }
    @media screen and (min-width: 800px) {
        .slide-box{
            display: flex !important;
            .slider{
                max-width: 50%;
            }
                

        }
        
        .vid-div{
            display: flex !important;
            
        }
    }


</style>