//uuid

class Uuid {
    static idOne() {
        const valStr = 'abcefghijkklm';
        const num = Math.floor(Math.random() * 13);
        const numSub = num - 1;
        const valSub = valStr.substring(numSub, num);
        const id = Math.floor(Math.random() * 9);
        return `${valSub}${id}`;

    };
    static idTwo() {
        const valStr = 'nopqrstuvwxyz';
        const num = Math.floor(Math.random() * 13);
        const numSub = num -1;
        const valSub = valStr.substring(numSub, num)
        const id = Math.floor(Math.random() *9);
        return `${valSub}${id}`;
    };
    static id() {
        const id = `${Uuid.idOne()}${Uuid.idTwo()} `;
        return id;
    };
};

//date
const dateIn = new Date();

const dateDis = dateIn.toLocaleDateString();

export async function get(req) {
    try{
        const datadb = {
        
            services : [
                {
                    title: "link bulding",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
                {
                    title: "link bulding",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
                {
                    title: "animation videos",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
                {
                    title: "3d asset bulding",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
                {
                    title: "animating",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
                {
                    title: "script and story writing",
                    svg: "🍕",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates"
                },
            ],
            staff: [
                {
                    id: `${Uuid.id()}`,
                    name: "yamikani",
                    surname: "njiragoma",
                    position: "ceo"
                },
                {
                    id: `${Uuid.id()}`,
                    name: "mary",
                    surname: "doe",
                    position: "designer"
                },
                {
                    id: `${Uuid.id()}`,
                    name: "ethan",
                    surname: "doe",
                    position: "developer"
                },
        ],
        about: [
                {
                    id: `${Uuid.id()}`,
                    name: "MAKA ANIMATION STUDIO",
                    phone: "0991894703",
                    email: "makaanimationstudio@gmail.com",
                    location: "Lilongwe / area 22"
                    
    
                }
            ],
            post: [
        
        
                    {
                        id:`${Uuid.id()}`,
                        date:`${dateDis}`,
                        title:"melodys mirror",
                        img: "/slide/img(3).jpg",
                        text:   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates "
                    },
                    {
                        id:`${Uuid.id()}`,
                        date:`${dateDis}`,
                        title:"blender erts",
                        img: "/slide/img(1).jpg",
                        text:   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates  "
                    },
                    {
                        id:`${Uuid.id()}`,
                        date:`${dateDis}`,
                        title:"maka comics",
                        img: "/slide/img(2).jpg",
                        text:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quia architecto culpa incidunt voluptatem voluptates "
                    }
                ]

        }
        return{
            status: 200,
            body: datadb
        }
    }catch(error) {
        return{
            status:500,
            body: {
                err: error
            }
        }
    }
};