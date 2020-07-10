import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Title  from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import deepnude_card from '../img/deepnude_card.png';
import stalker_card from '../img/stalker_card.png';
import art_card from '../img/art_card.png';
import stick_card from '../img/stick_card.png';
import click_button from "../img/обложка-кнопка.png";
import click_button_label from "../img/обложка-кнопка-нажми.svg";
import click from "../img/click.mp3"


import './pulse.css';
import "./scripts.js"

const Home = ({id, balance, earn, go}) => (
	<Panel id={id}>
		<link rel="stylesheet" href="pulse.css"/>
		<PanelHeader>PB</PanelHeader>
		<Group  header={
			<Header 
			aside={<Link style={{"WebkitUserSelect": "none", "MozUserSelect": "none", "msUserSelect": "none"}} onClick={go} data-to="about">Как это работает?</Link>}
			subtitle="Удиви друзей &#128293;"
			>
			Выбери действие!
			</Header>
		}>
			<CardScroll>
				<Card size="s" style={{ width: 224, height: 96, textAlign:"center", overflow: "hidden" }}>
					<img src={deepnude_card}/>
				</Card>
				<Card size="s" style={{ width: 224, height: 96, textAlign:"center", overflow: "hidden" }}>
					<img src={art_card}/>
				</Card>
				<Card size="s" style={{ width: 224, height: 96, textAlign:"center", overflow: "hidden" }}>
					<img src={stalker_card}/>
				</Card>
				<Card size="s" style={{ width: 224, height: 96, textAlign:"center", overflow: "hidden" }}>
					<img src={stick_card}/>
				</Card>
			</CardScroll>
		</Group>
		<Group>
				{/* <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>&#128176; Баланс:</Title> */}
			<Div style={{display: 'flex', marginTop:0, paddingBottom:0}}>
				<Button size="xl" stretched mode="commerce" style={{ marginRight: 8}}>Пополнить</Button>
				<Button size="xl" stretched mode="primary" style={{}}>Бустеры</Button>
			</Div>
			<Div style={{marginTop:0, paddingTop:8}}>
				<Button role="counter" size="xl" stretched mode="secondary" after={<Counter style={{textAlign:"center"}}>{balance}</Counter>}>&#128176; Баланс:</Button>
			</Div>
			{/* <Title style={{"text-align":"center", "font-size":200}}>&#129302;</Title> */}
			<script src="scripts.js"></script>
			<p style={{textAlign:"center"}}  onClick={earn}><img  id="earn_button" className="animate_start" src={click_button_label}/></p>
			<audio id="click_sound" src={click}></audio>
		</Group>
		
	</Panel>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
