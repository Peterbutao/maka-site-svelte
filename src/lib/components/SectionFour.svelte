<script>
    export let data;
</script>


<section id="services" class="frth-section">
    <div class="frth-sect">
        <div class="title">
            <p>Services</p>
        </div>
        <div class="services">

            {#each data.services as service}

            <div class="service">
                <i class="serv-svg">{service.svg}</i>
                <div class="serv-title">
                    <p>{service.title}</p>
                </div>
                <div class="serv-text">
                    <p>{service.text}</p>
                </div>

            </div>
            {/each}

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
    .frth-section{
        background-color: var(--bc);
        
        
        .frth-sect{
            max-width:65rem;
            margin:0 auto;
            padding-left:20px;
            padding-right:20px;

            .title{
                padding: 10px 0px;
                p{
                    @include font(var(--tc), 1rem, 400);
                    margin: 0px;
                }


            }
            .services{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .service{
                    width: calc(30% - 20px);
                    text-align: center;
                    border: 1px solid var(--pc);
                    border-radius: 6px;
                    margin: 20px 0px;
                    padding: 20px 10px;
                    color: var(--dc2);
                    cursor:pointer;
                    transition: .3s linear;
                    .serv-svg{
                        margin-bottom: 20px;
                        transition: .3s linear;
                    }
                    .serv-title{
                        @include font(var(--tc), 1.2rem, 400);
                        margin-bottom: 6px;
                    }
                    .serv-text{
                        @include font(var(--tc), 0.9rem, 400);
                        
                        margin-bottom: 6px;
                    }
                    &:hover{
                        color: var(--lc) !important;
                        background-color: var(--pc);
                    }

                }
            }
        }

    }
    @media screen and (max-width: 980px){
        .frth-sect{
            max-width: 800px;
        }
        .service{
            width: calc(50% - 20px) !important;


        }

    }
    @media screen and (max-width: 600px){
        .frth-sect{
            padding: 0 5px !important;
        }
        .service{
            width: 100% !important;


        }

    }

</style>