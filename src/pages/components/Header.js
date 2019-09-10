import React from 'react';
import '../../css/style.css';


function Header (props) {
    return (
        <header>
				<div class='left__text'>
					<span class='big__text_kz'>
							СОТҚА ДЕЙІНГІ ТЕРГЕП-ТЕКСЕРУДІҢ БІРЫҢҒАЙ
								ТІЗІЛІМІНІҢ БҰҚАРАЛЫҚ СЕКТОРЫ
					</span>
					<small class='small__text_kz'>
						ҚАЗАҚСТАН РЕСПУБЛИКАСЫ БАС ПРОКУРАТУРАСЫНЫҢ ҚҰҚЫҚТЫҚ 
					</small>
					<small class="small__text_kz">
						СТАТИСТИКА ЖӘНЕ АРНАЙЫ ЕСЕПКЕ АЛУ ЖӨНІНДЕГІ КОМИТЕТІ
					</small>
				</div>
				<div class="logo ">
					<img src="img/logo.jpg" alt=""/>
				</div>
				<div class="right__text">
					<span class='big__text_ru'>
								ПУБЛИЧНЫЙ СЕКТОР ЕДИНОГО РЕЕСТРА
									ДОСУДЕБНЫХ РАССЛЕДОВАНИЙ
					</span>
					<small class='small__text_ru'>
						КОМИТЕТ ПО ПРАВОВОЙ СТАТИСТИКЕ И СПЕЦИАЛЬНЫМ УЧЕТАМ 
					</small>
					<small class="small__text_ru">
									ГЕНЕРАЛЬНОЙ ПРОКУРАТУРЫ
					</small>
				</div>
			</header>
    );
}

export default Header;