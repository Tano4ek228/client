import React, { useContext } from "react";
import fbs_img from "./images/fbs/fbs.jpg"
import Zayavka from "../components/zayavka/Zayavka";
import { AllTypeDevices } from "../http/DeviceApi";
import { Context } from "..";
import Tovar from "../components/Tovar";

const FBS = () => {
	const { device } = useContext(Context)
	AllTypeDevices("3").then(data=>device.setTypeDevice(data));
	return (
		<div class="container_main">
			<div class="main_text">
				<h1 className="ShiftLeft h1_tovar_name">Фундаментальные блоки ФБС</h1>
				<p style={{ textAlign: "center" }}>
					<img src={fbs_img}></img>
				</p>
				<p>
					Блок ФБС – это основа любого фундамента его применяют на одном из начальных этапов при строительстве любого здания или сооружения. Благодаря очень большому разнообразию фундаментного блока, он нашёл широкое применение практически на всех этапах строительства. Но основное применение блоков ФБС, при возведении фундамента строений,  а также в качестве опор для будущих стен здания. Для этих целей применяют несколько основных и самых востребованных ФБС:  блок 24, его типоразмеры бывают нескольких типов: ФБС 24-3-3 (6), ФБС 24-4-3 (4), ФБС 24-4-4,5и 6, ФБС 24-5-4, 5 и 3 и самый большой блок ФБС 24.6.6. отличия этого блока заключается только в размерах  и соответственно в весе. Чем выше цифры тем блок больше и тяжелее.
				</p>
				<p>
					Фбс 12 также используют на начальных этапах строительства, но в основном при частной застройке для небольших объектов или при строительстве внутренних перегородок, как при застройке МКД, так как  блок ФБС выдерживает более низкую нагрузку нежели блок ФБС 24.
				</p>
				<p>
					Фбс 6, фбс 4 и фбс 3 нашли своё применение практически на всех этапах застройки ввиду своей компактности и мобильности.
	 			</p>
				<p>
					ФБС с специальными добавками обретают повышенную прочность и могут применятся в любых климатических условиях в любом регионе России и Ростовской области в том числе.
				</p>

				<div class="advantages_bg">
				<h2 class="preimushestva">Преимущества блоков ФБС</h2>
					<ul class="advantages advantages_tovar">
						<li>Низкая цена в сравнении с монолитным бетоном;</li>
						<li>На 1 погонный метр фундамента необходимо на 30% меньше ФБС чем на монолит;</li>
						<li>Типовые ФБС блоки, подходят для практически любого типа грунта, что актуально при ленточном фундаменте;</li>
						<li>Сокращение сроков строительно-монтажных работ, так как не требует застывания;</li>
						<li>Срок эксплуатации блоков достаточно большой и составляет 40-50 лет;</li>
						<li>Блоки пожаробезопасны и не нуждаются в дополнительном обслуживании.</li>
					</ul>
				</div>

				<h2>Производство ФБС в Ростове на Дону</h2>
				<p>
					Весь процесс производства проходит на территории нашего бетонного завода РБУ, все работы выполняются с применением новейших технологий производства и в соответствии с нормативной документацией , а также ГОСТ 13015  ГОСТ13579-78 - Блоки фундаментные (ФБС) бетонные для стен и подвалов. При изготовлении ведётся постоянный контроль качества, каждый блок проходит пропарку во время чего происходит испарение влаги и препятствует разрушению бетона в процессе длительной эксплуатации.
				</p>
				<p>Фундаментные блоки производят из марки бетона B 7,5  М-100, этого хватает чтобы прочность бетона на сжатия была не менее 100 кгс/кв.см, а морозостойкость была не менее 50С т.е. F-50. Данные характеристики бетонных блоков соответствуют по ГОСТу 13579-78 и ГОСТ 13015, по которому блоки в нашей стране, производят вот уже более 30 лет. Арматура в блоке фбс не предусмотрена, в отличии от других производимых
				<b> ЖБИ изделий</b>, таких как плиты перекрытия. Но в блоках присутствуют петли монтажные при помощи которых осуществляется транспортировка и монтаж ФБС, изготовлены петли из арматуры А-I или Аc-II марки ВСт3пс2.
				</p>

				<h2>Купить блок ФБС в Ростове-на-Дону от производителя</h2>
				<p>
					<b>Купить ФБС, цена за шт. от 700 рублей</b> не так велика, с учётом того что мы являемся производителе и Вам не придётся переплачивать в добавок к этому вы заручитесь поддержкой крупного производителя ФБС в Ростове, который отвечает за качество своей продукции.
				</p>
				<p>
					Стоимость ФБС в Ростове относительно низкая, с учётом того что цены на строительные материалы постоянно растут и заливая например, монолитные конструкции вы понесёте значительно большие затраты ( устройство опалубки, покупка и установка арматуры, аренда спецтехники и затраты на рабочую силу), нежели затраты на покупку блоков, тем боле что  цены на фундаментный блок остаются на прежнем уровне что и год назад.
				</p>
				<h1 className="h1Tovarname">Цена блока ФБС за 1 шт в Ростове-на-Дону</h1>
				<div className="beton_info">
				<Tovar/>
				</div>
			</div>

			<Zayavka/>

		</div>
	)
}

export default FBS;