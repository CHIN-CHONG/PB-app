import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group, Div, Button } from '@vkontakte/vkui';
import {Text, Title, Caption} from '@vkontakte/vkui';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import "./About.css"

const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Как это работает?
		</PanelHeader>
		<Div>
			<Title level="1" weight="semibold" className="text_separate" style={{marginBottom: 8}}>Всё просто! <span role="img">&#128578;</span></Title>		
			<Text>Вы накапливаете игровую валюту и тратите ее на какую-то спец-фунцию нашего приложения,
				 будь это рисование арта, раздевание или слежка за пользователем.
				<Caption className="gray_text end_paragraph" level="1" weight="semibold" color="7FFFD4">
					 <br></br>Далее мы более подробно опишем каждый этап
				</Caption>
			</Text>
			<Title level="1" weight="semibold" style={{marginBottom: 8}}>Спец-функции <span role="img">&#129302;</span></Title>		
			<Text className="end_paragraph">
				Спец-функция — особая функция, на которую вы можете потратить игровую валюту. Их вы можете найти в верхней части главного экрана 
			</Text>
			<Title level="1" weight="semibold" style={{marginBottom: 8}}>Игровая валюта <span role="img">&#128176;</span></Title>		
			<Text>
				За игровую валюту вы можете приобрести любую из спец-функций.
			</Text>
			<Text weight="semibold" style={{marginTop:3}}>Есть несколько вариантов заработка:</Text>
			<ul style={{marginTop:5}} className="end_paragraph">
				<li>Просмотр рекламы</li>
				<li>Нажатие на кнопку</li>
				<li>Пополнение баланса</li>
			</ul>
				<Button size="xl" stretched mode="primary" href="https://vk.com/pb_app">
				Написать нам <span role="img">&#128064;</span></Button>
			<Caption className="end_paragraph" level="1" weight="semibold" color="7FFFD4" style={{textAlign:"center", marginTop:20}}>
				С уважением, команда PB!
			</Caption>
		</Div>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
