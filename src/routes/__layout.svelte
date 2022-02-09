<svelte:head>
    <style lang="scss">        
        body{
            color: blue !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            
        }
        .preloader{
            z-index:999;
            position:fixed;
            top:0;width:100%;
            height:100vh;
            background:seashell;
            display:flex;
            justify-content:center;
            align-items:center;
            transition:opacity 0.5s ease;
            .pr{
                .pr-text{
                    font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;
                    -moz-osx-font-smoothing:grayscale;
                    color:rgba(8,2,2,0.823);
                    font-weight:800;
                    font-size:5rem;
                    background-image:url("/src/lib/assets/gif/prt.gif");
                    background-position:center;
                    background-clip:text;-webkit-background-clip:text;
                    -moz-background-clip:text;
                    -ms-background-clip:text;
                    -o-background-clip:text
                    
                    }
                    .pr-subtext{
                        font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;
                        -moz-osx-font-smoothing:grayscale;
                        color:var(--dc);
                        text-align:end;
                        font-weight:700
                    }
                    .prs-span{
                        font-weight:500
                    }
            } 
        }

            
             
        .remove{
            pointer-events:none;
            opacity:0
        }
    </style>
    
</svelte:head>



<script>
    const name = "MAKA";
    $: open  = false;
    $: topen = () => {open = !open};
    let dark = false;

    
</script>

<section class:dark={dark} class="page-layout">
    <!--navigation-->
    
    <nav class:bar-cl={open} class="navbar">
        <div class="nb">
            <div class="brand">
                <a href="/" class="logo" >{name}</a>
            </div>



            
            <ul class:open={open} class="navlist">
                <li on:click={topen()} ><a href="#about">about</a></li>
                <li on:click={topen()} ><a href="#blog">blog</a></li>
                <li on:click={topen()}><a href="#movies">movies</a></li>
                <li on:click={topen()} ><a href="#services">services</a></li>
                <li on:click={topen()} ><a href="#contact">contact</a></li>
                <li class="dark-toggle" on:click={() => {
                    dark = !dark;
                    open = !open
                    }}>
                    {#if dark == true}🌝{/if}
                    {#if dark == false}🌚{/if}
                </li>
                <li class="nl-txt">
                    <a href="/">
                         © MAKA ANIMATIONS STUDIO | 😅   
                    </a>                                        
                </li>
                <li class="nl-txt"><a href="/">___</a></li>
            </ul>

            <div on:click= {() => {open = !open}} class:change={open} class="toggle">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
        </div>
    </nav>

    <slot></slot>
    <footer class="footer">
        <div class="ft">
            <div class="ft-notes">
                <div class="ftn">
                    <div class="title">
                        <p>MAKAANIMATIONSTUDIO.COM</p>
                    </div>
                    <div class="ftn-list">
                        <ul>
                            <li><a href="/">Get Involved</a></li>
                            <li><a href="/">Donate</a></li>
                            <li><a href="/">News</a></li>
                            <li><a href="/">License</a></li>
                            <li><a href="/">Studio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ftl">
                <ul class="ft-links">
                    <li class="fl">
                    <a alt="" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                        <defs>
                            <clipPath id="clip-path">
                            <rect width="16" height="16" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="Instagram" class="svg" clip-path="url(#clip-path)">
                            <path id="Path_3" data-name="Path 3" d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978" fill="#fff" fill-rule="evenodd"/>
                        </g>
                        </svg>
    
                        </a>
                    </li>
    
    
                    <li class="fl">
                        <a alt="" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                            <defs>
                                <clipPath id="clip-path">
                                <rect width="16" height="16" fill="none"/>
                                </clipPath>
                            </defs>
                            <g id="Facebook" clip-path="url(#clip-path)">
                                <rect id="Rectangle_1458" data-name="Rectangle 1458" width="16" height="16" fill="none"/>
                                <path id="Path_1" data-name="Path 1" d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z" transform="translate(-76)" fill="red" fill-rule="evenodd"/>
                            </g>
                            </svg>
    
                            
                        </a>
                    </li>
    
    
                    <li class="fl">
                        <a alt="" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                            <defs>
                                <clipPath id="clip-path">
                                <rect width="16" height="16" fill="none"/>
                                </clipPath>
                            </defs>
                            <g id="Twitter" clip-path="url(#clip-path)">
                                <rect id="Rectangle_1457" data-name="Rectangle 1457" width="16" height="16" fill="none"/>
                                <path id="Path_2" data-name="Path 2" d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6" transform="translate(-38)"  fill="red"
                               
                                 fill-rule="evenodd"/>
                            </g>
                            </svg>
    
                            
                        </a>
                    </li>
    
    
                </ul>
            </div>
            <hr>
            <div class="ftc">
                <div class="copy">
                    <p>
                     © 2021 | <a href="http://peterbutao.netlify.app" alt="" >BUTAO</a> UI / UX DESIGNER | 😅
                    </p>
                    <p class="make">
                        <span>created with</span>
                        <span >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.25 122.88"><defs>
                            <style>
                            .a{fill:#ff3e00;}
                            .b{fill:#fff;}
                            </style>
                        </defs><title>svelte</title><path class="a" d="M95.73,16.26C84.32-.07,61.78-4.91,45.49,5.47L16.87,23.71A32.83,32.83,0,0,0,2,45.69a35.13,35.13,0,0,0-.55,6.14,34.69,34.69,0,0,0,4,16.06A33,33,0,0,0,.54,80.16a35,35,0,0,0,6,26.46c11.41,16.33,34,21.17,50.24,10.79L85.37,99.17a32.76,32.76,0,0,0,14.83-22,34.08,34.08,0,0,0,.55-6.13A34.72,34.72,0,0,0,96.8,55a33,33,0,0,0,4.91-12.26,36,36,0,0,0,.54-6.13,34.93,34.93,0,0,0-6.52-20.33Zm0,0Z"/><path class="b" d="M42.69,108.16a22.94,22.94,0,0,1-5.72.73A22.7,22.7,0,0,1,18.3,99.11a21,21,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,20.52,20.52,0,0,1,.69-2.67l.54-1.64L17.39,80a37.13,37.13,0,0,0,11.2,5.6l1.06.32-.1,1.06c0,.18,0,.37,0,.55a6.36,6.36,0,0,0,1.18,3.7,6.82,6.82,0,0,0,5.62,3,6.65,6.65,0,0,0,1.72-.22,6.28,6.28,0,0,0,1.76-.77L68.42,74.91a6,6,0,0,0,2.79-5.09A6.35,6.35,0,0,0,70,66.13a6.85,6.85,0,0,0-5.63-2.94,6.65,6.65,0,0,0-1.72.22,6,6,0,0,0-1.75.77L50,71.14a21.06,21.06,0,0,1-5.81,2.55,23.06,23.06,0,0,1-5.72.73A22.73,22.73,0,0,1,19.8,64.65a21.05,21.05,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,19.82,19.82,0,0,1,8.92-13.23L53.74,17.28a21,21,0,0,1,5.81-2.56A23,23,0,0,1,65.27,14,22.74,22.74,0,0,1,84,23.76,21.05,21.05,0,0,1,87.87,36a21.72,21.72,0,0,1-.32,3.69,20.52,20.52,0,0,1-.69,2.67L86.32,44l-1.46-1.07a36.9,36.9,0,0,0-11.2-5.6L72.6,37l.1-1.06c0-.18,0-.37,0-.55a6.42,6.42,0,0,0-1.18-3.71,6.85,6.85,0,0,0-5.62-2.94A6.65,6.65,0,0,0,64.2,29a5.89,5.89,0,0,0-1.76.77L33.82,48a6,6,0,0,0-2.69,4A6.92,6.92,0,0,0,31,53.06a6.35,6.35,0,0,0,1.18,3.69,6.84,6.84,0,0,0,5.62,2.94,6.65,6.65,0,0,0,1.72-.22,6,6,0,0,0,1.76-.77l10.92-7a20.93,20.93,0,0,1,5.81-2.55,23,23,0,0,1,5.72-.73,22.74,22.74,0,0,1,18.68,9.77,21.05,21.05,0,0,1,3.92,12.23A20.64,20.64,0,0,1,86,74.14a19.78,19.78,0,0,1-8.92,13.23L48.51,105.6a21,21,0,0,1-5.82,2.56Zm0,0Z"/></svg>
                        </span>
                        <span>by <a href="/">BUTAO</a> </span>
                    </p>
                </div>
    
            </div>
        </div>
    </footer>
    
</section>



<style lang="scss">
    /* 99 => z-index {navbar}*/
    /* 10 => z-index {brand}*/
    :root{
        --bc: seashell;
        --tc: hsl(210, 29%, 24%);
        --pc: hsl(0, 27%, 67%);
        --dc: hsl(210, 29%, 24%);       
        --lc: hsl(25, 100%, 97%);
        --nc: rgba(255, 245, 238, 0.494);
        --sp: 10px;
        --lp: 65rem;

        
    }
    .dark{
        --bc: #2b3d4f !important;
        --tc: seashell !important;
        --nc:  hsl(210, 29%, 24%) !important;
    }
    @mixin font($cl, $sz, $wt) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: $cl;
        font-size: $sz;
        font-weight: $wt;
    }

    .navbar{
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--nc);   
        transition: .3s linear;
        box-shadow: black;
        .nb{
            .brand{
                a{
                    font-family:Avenir, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing:antialiased;
                    -moz-osx-font-smoothing:grayscale;
                    color:var(--tc);
                    font-size:1.2rem;
                    font-weight:800;
                    text-decoration: none;
                }
            }
            .navlist{
                padding: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .dark-toggle{
                    cursor: pointer;
                    border: var(--tc) solid 1px;
                    padding: 5px;
                    margin: 0px;
                    border-radius: 4rem;

                }
                li{
                    margin: 20px ;
                    }
            }
            ul{
                margin: 0px !important;
            }
            ul li{
                list-style: none;
                a{
                    @include font(var(--tc), 1rem, 600);
                    text-decoration: none;
                }
            }



            max-width: 65rem;
            margin: auto;
            padding: 0 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

       
    }
    .footer{
        z-index: 50;
        position: relative;
        padding: 40px 0px;
        background-color: var(--bc);        
        text-align: center;
        #Path_1,
        #Path_2,
        #Path_3{
            fill: var(--tc) !important;
        }
        
        ul li{
         list-style: none;
        }
        a{
            text-decoration: none;
          
        }

        .ft{
            display: flex;
            flex-direction: column;
            .ft-notes{
                padding-bottom: 20px;

                .ftn{
                    .title{
                        p{
                            @include font(var(--tc),0.96rem, 400);
                            letter-spacing: 2px;

                        }
                    }
                    .ftn-list{
                        text-align: center;
                    
                        ul{
                            padding: 0;
                            margin: 0;
                        }
                        ul li{
                            list-style: none;
                            a{
                                text-decoration: none;
                                @include font(var(--tc), 0.85rem, 300);
                                opacity: 65%;
                                transition: .1s linear;
                                
                            }
                            &:hover{
                                a{
                                    opacity: 100%;
                                    border-left: solid var(--pc) 1px;
                                    padding-left: 5px;
                                }
                            }
                        }
                    }
                }
            }
            
        
            
            .ftc{
                .copy{
                    .make{
                        @include font(var(--tc), 0.7rem, 600);
                        span{
                            svg{
                                width:12px;
                            }
                        }
                    }
                    p{
                        @include font(var(--tc), 0.8rem, 600);
                    
                        a{
                            color: var(--pc);
                        }
                    }
                }
            }

            .ftl{
                display: flex;
                justify-content: center;

                .ft-links{
                    display: flex;
                   
                    padding: 0px 10px !important;
                    
                    .fl{
                        margin: 0px 10px !important;
                        }
                
                }
            }
        }
    }

    /* desktop */
    @media screen and (min-width: 980px) {
        .toggle{
            display: none;
        }
        .nl-txt{
            display: none;
            pointer-events: none;
        }

       

    }
    /* modile */

    @media screen and (max-width: 980px) {
        .navbar{
            padding: 10px 0;
        }
        .brand{
            z-index: 10;
            position: relative;
        }
        .toggle{
            display: block ;
            width: 60px ;
            background: none;
            width: 30px;
            border: none;
            cursor: pointer;
            position: relative;
            outline: none;
                
                div{
                    display: block;
                    height: 2.5px;
                    background: var(--tc);
                    margin: 5px 0px;
                    position: relative;
                    transition: .3s linear;
                    border-radius:4rem;
                    -webkit-border-radius:4rem;
                    -moz-border-radius:4rem;
                    -ms-border-radius:4rem;
                    -o-border-radius:4rem;
                }
                .line-1,
                .line-3 {
                    width: 15px;
                }
                .line-2 {
                    width: 25px;
                }

        }
        .change{
            div{
                background: var(--dc);
            }
            .line-1{
                width: 20px;
                -webkit-transform: rotate(-45deg) translate(-5px, 6px) !important ;
                transform: rotate(-45deg) translate(-5px, 5px) !important;
                transition: all 1s ease-in-out;

            }
            .line-2{
                opacity: 0 !important;

            }
            .line-3{
                width: 20px;
                -webkit-transform: rotate(45deg) translate(-5px, -6px) !important;
                transform: rotate(45deg) translate(-5px, -7px) !important ;
                transition: all 1s ease-in-out;
            }
        }
        
      
        .bar-cl{
            background: var(--pc);
            transition:all 1s ease-out;
            a{
                color: var(--dc) !important;
            }
        }
        .navlist{
            pointer-events: none;
            position: fixed;
            top: 15px !important;
            left: 0;
            background: var(--pc);
            width: 100%;
            min-height: 100vh;
            flex-direction: column;
            clip-path:circle(0px at 80%);
            -webkit-clip-path:circle(0px at 80%);
            -moz-clip-path:circle(0px at 80%);
            -o-clip-path:circle(0px at 80%);
            transition:all 1s ease-out;
            padding-top: 40px !important;
            
        }
        .open{
        clip-path:circle(1500px at 80%) !important;
        -webkit-clip-path:circle(1500px at 80%) !important;
        pointer-events: all !important;
        }
        .nl-txt{
            a{
                font-size: 0.7rem !important;
                letter-spacing: 2px;
            }

        }
    }
    
</style>