import styles from './MealList.module.css'
const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Булка праздничная',
        description:
            "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
        price: 11.29,
    },
    {
        id: "m2",
        name: "Коржик",
        description: "Рис, лосось, соус спайс",
        price: 3.19,
    },
    {
        id: "m3",
        name: "Сластена",
        description: "Угорь копченый, соус унаги, кунжут",
        price: 4.49,
    },
    {
        id: "m4",
        name: 'Багет"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 7.79,
    },
];
const MealList = ()=>{
    const menu = DUMMY_MEALS.map((el)=> <li> {el.name}</li>)

    return(
        <section className={styles.meals}>
            <ul>
                {menu}
            </ul>
        </section>
    )
}
export default MealList