export const state = () => ({
    catalog: [
        {
            image: require('@/assets/images/catalog-all/pokraska-bampera.png'),
            title: 'Покраска бампера',
            price: 'От 5000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/pokraska-kryla.png'),
            title: 'Покраска крыла',
            price: 'От 3000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/pokraska-kapota.png'),
            title: 'Покраска капота',
            price: 'От 8000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/pokraska-kryshi.png'),
            title: 'Покраска крыши',
            price: 'От 10000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/pokraska-porogov.png'),
            title: 'Покраска порогов',
            price: 'От 3000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/zapayka-na-elemente.png'),
            title: 'Заплатка на элементе',
            price: 'От 1000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/zamena-arok.png'),
            title: 'Замена арок',
            price: 'От 1000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/palerovka-korpusa.png'),
            title: 'Полировка кузова',
            price: 'От 5000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/palirovka-far.png'),
            title: 'Полировка фар',
            price: 'От 300 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/zhidkoe-steklo.png'),
            title: 'Нанесение жидкого стекла',
            price: 'От 15000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/nanokeramika.png'),
            title: 'Нанокирамика',
            price: 'От 15000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/ustanovka-obvesov.png'),
            title: 'Установка обвесов',
            price: 'От 1000 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/gradient.png'),
            title: 'Покраска переходом',
            price: 'От 2500 ₽',
        },
        {
            image: require('@/assets/images/catalog-all/zamena-stekla.png'),
            title: 'Замена лобового стекла',
            price: 'От 1500 ₽',
        },
    ]
})

export const getters = {
    getCatalog (store) {
        return store.catalog;
    }
}