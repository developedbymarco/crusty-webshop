import Directory from '../../components/directory/directory.component';

function Home() {

    const categories = [
        {
            id: 1,
            title: 'Krabby Patties',
            imageUrl: 'https://i.ibb.co/KNMQ35g/krabby-patty.png'
        },
        {
            id: 2,
            title: 'Vegetarian',
            imageUrl: 'https://i.ibb.co/PNS4Bs0/kelp-salad.png'
        },
        {
            id: 3,
            title: 'Drinks',
            imageUrl: 'https://i.ibb.co/cLpqFjJ/kelp-shake.png'
        },
        {
            id: 4,
            title: 'Snacks',
            imageUrl: 'https://i.ibb.co/pzbjskd/kelp-fries.png'
        },
        {
            id: 5,
            title: 'Combo Meals',
            imageUrl: 'https://i.ibb.co/17QGnxT/combo-meal.png'
        },
        {
            id: 6,
            title: 'Desserts',
            imageUrl: 'https://i.ibb.co/FYh2rsG/seaberry-pie.png'
        },
        {
            id: 7,
            title: 'Seasonal Specials',
            imageUrl: 'https://i.ibb.co/JQRJRY1/seasonal-specials.png'
        },
    ]

    return (
        <Directory categories={categories} />
    );
}

export default Home;