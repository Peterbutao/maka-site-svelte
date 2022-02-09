<script>
    export let data;
</script>

<section id="blog" class="third-section" >
    <div class="third-sect">

        <div class="title">
            <p>Blog</p>
        </div>

        <div class="cards">
            {#each data.post as post}
            <div class="card">
                <div class="card-img">
                    <img src={post.img} width="300px" alt="blog cover">
                </div>
                <div class="card-text">
                    <p class="cdt-date">{post.date}</p>
                    <p class="cdt-title">{post.title}</p>
                    <p class="cdt-text">
                        {post.text.substring(0, 150)}
                    </p>
                </div>
                <div class="card-foot">

                    <a href="/blog/{post.title}">Read More</a>
                    
                </div>

            </div>
            {/each}       

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
    .third-section{
        background: var(--dc);
        margin: 0px;
        overflow: hidden;
        min-height: 100%;
        .third-sect{
            max-width: 65rem;
            margin: 10px auto;
            .title {
                @include font(var(--lc), 1rem, 500);
                text-align: left;
                padding: 0px 10px;

            }
            .cards{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .card{

                    width: calc(33% - 100px);
                    border-radius: 6px;
                    background: var(--bc);
                    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.248);
                    text-align: center;
                    transition: .4s ease;
                    cursor: pointer;

                    &:hover{
                        transform: scale(1.02);
                        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.049);
                    }
                    .card-text{
                        padding: 2px 10px;
                        .cdt-date{
                            @include font(var(--pc), 1rem, 500);
                            }
                        .cdt-title{
                            @include font(var(--tc), 1.1rem, 600);
                            }
                        .cdt-text{
                            @include font(var(--tc), 0.9rem, 500 );
                            opacity: 89%;
                        }

                    }
                    .card-foot{
                        text-align: end;
                        padding: 10px;
                        a{
                            text-decoration: none;
                            @include font(var(--tc), 0.9rem, 500);
                            
                            border-right: 2px solid var(--tc);
                            background: hsla(0, 27%, 67%, 0.411);
                            padding: 5px 8px;
                            
                            

                        }
                    }
                    .card-img{

                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        
        }
    }
  

    
    @media screen and (max-width: 980px) {
        .card{
            width: calc(50% - 20px) !important;
        }
    }
    @media screen and (max-width: 600px) {
        .card{
            width: 100% !important;
            margin: 50px 10px;
        }
    }

</style>