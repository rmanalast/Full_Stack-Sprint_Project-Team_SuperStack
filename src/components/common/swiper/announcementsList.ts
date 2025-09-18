type News = {
    id: number;
    img: string;
    alt: string;
};

const news: News[] = [{
    id: 1,
    img: "https://media.istockphoto.com/id/498301640/vector/big-sale-banner.jpg?s=612x612&w=0&k=20&c=fppPOZ3LZCyvtDUiy6tR52xDWofX52Fdu3a7Ltc_fVY=",
    alt: "Big Sale This Weekend"
},
{
    id: 2,
    img: "https://imgs.search.brave.com/F6bughEZPP1ERi0X3yat7zxQHMWekj455W02ry3bNXg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9kaW5uZXIt/cGFydHktYmFyYmVj/dWUtcm9hc3QtcG9y/ay0yNjBudy00MDQw/NDQ3MTQuanBn",
    alt: "BBQ to celebrate the new website"
}
];

export default news;