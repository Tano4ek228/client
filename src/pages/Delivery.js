import React from 'react'
import Zayavka from '../components/zayavka/Zayavka'

const Delivery = () => {
    return (
        <div class="container_main">
            <div class="main_text">
                <h1 className="ShiftLeft h1_tovar_name">Доставка</h1>
                <h2 class="delivery">Доставка бетона</h2>
                <ul class="delivery_beton">
                    <li>
                        Доставка бетона может быть осуществлена миксером или
                        бетоновозом. Товарный бетон, доставка которого будет
                        произведена быстро что сэкономит Вам время и исключит
                        простои в работе.
                    </li>
                    <li>
                        Наша компания имеет свой собственный автопарк, в котором
                        есть миксеры, автобетоносмесители, с емкостью бочки от 5
                        М3 до 10 М3 (кубов), также у нас вы сможете взять в
                        аренду <a href="#">автобетононасос</a> и другое
                        дополнительное оборудование для спецтехники.
                    </li>
                    <li>
                        Процесс доставки бетона в Ростове и области
                        контролируется нашими специалистами которые заранее
                        прорабатывают маршрут, а все машины оснащены GPS
                        навигаторами, которые не позволят водителю отклониться
                        от маршрута и доехать вовремя.
                    </li>
                    <li>
                        Для нас важен каждый клиент вне зависимости от объёма
                        заказанной продукции, мы обеспечим доставку товарного
                        бетона объёмом от 1-куба. Также вы можете купить бетон
                        самовывозом с нашего РБУ.
                    </li>
                    <li>
                        Мы производим доставку товарного раствора по всей
                        территории Ростовской области, включая такие города, как
                        Ростов-на-Дону, Батайск, Азов, Аксай, Новочеркасск,
                        Егорлык, Кагальник и прочие.
                    </li>
                </ul>
                <h2 class="delivery">Доставка керамзитобетона</h2>
                <p>
                    Для того чтобы заказать керамзит или керамзитобетон с
                    доставкой, нужно позвонить по нашему телефону:{' '}
                    <i>
                        <b>+7 (928)133-88-77</b>
                    </i>
                    . Диспетчер ясно и понятно проконсультирует Вас по
                    интересующим вопросам и примет заявку.
                </p>
                <p>
                    Выбирая нас вы будете уверяны, что бетон будет доставлен на
                    на ваш строительный объект в точно оговоренное время
                    средствами специальной техники, что предотвращает расслоение
                    смеси.
                </p>
                <h2 class="delivery">Доставка ЖБИ и ФБС</h2>
                <p>
                    <b>Заявки на поставки ЖБИ, ФБС</b> и иных строительных
                    элементов принимаются по тел: +7(928) 270-81-70, а также на
                    сайте через кнопку «Оставить заявку».
                </p>
                <h2 class="delivery">Как заказать автобетононасос!?</h2>
                <p>
                    Если вас интересует такая услуга аренды автобетононасоса в
                    Ростове или по Ростовской области, компания «Бетон 61»
                    готова предоставить её, через наш сайт вы можете заказать
                    услугу по аренде необходимой спецтехники.
                </p>
                <p>
                    Чтобы получить необходимую информацию о нашей технике для
                    подачи товарного бетона вы можете оформить online-заявку на
                    аренду автобетононасоса, либо свяжитесь с нами по телефону:{' '}
                    <b>+7 (928) 270-81-70</b>
                </p>
            </div>
            <Zayavka />
        </div>
    )
}

export default Delivery