import images from "./assets/svg";
const { pricing1, pricing2, pricing3 } = images;
/* navbar elementlarini arrayga yigib mapda aylanib chiqaramiz */
const navbarElement = ["home", "skills", "about us", "pricing", "contacts"];

/* pricing elemantlarini array ochib ichiga obyekt yozib mapda aylanib chiqarib quyamiz */
const pricingElemant = [
    {
        id: 1,
        img: pricing1,
        title: "Self-study online course",
        description: "Start learning English online in live classes with qualified EC teachers and students from all over the world.",
        price: " £5.99"
    },
    {
        id: 2,
        img: pricing2,
        title: "Live online classes",
        description: "Interactive group classes with expert teachers. Free 7-day trial",
        price: " £12.99"
    },
    {
        id: 3,
        img: pricing3,
        title: "Personal Tuition",
        description: "Online one-to-one English tutoring – enjoy our first session for only $1",
        price: " £20.99"
    }
];


const elements = {
    navbarElement,
    pricingElemant
};
export default elements;
