import React, { Component } from 'react';
import Author from './Author';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getAuthorList(){
    return [
      {
        "id": "1",
        "name": "Иоганн Вольфганг Гете",
        "biography": "Родился в старом немецком торговом городе Франкфурте-на-Майне в семье зажиточного бюргера Йоганна Каспара Гёте (1710—1782)[2]. Отец его был императорским советником, бывшим адвокатом. Мать, Катарина Элизабет Гёте (урождённая Текстор, нем. Textor, 1731—1808), была дочерью городского старшины.",
        "books": [
          {
            "id": "1",
            "title": "Фауст"
          }
        ]
      },
      {
        "id": "2",
        "name": "Пушкин А. С.",
        "biography": "Происхождение Александра Сергеевича Пушкина идёт от разветвлённого нетитулованного дворянского рода Пушкиных, восходившего по генеалогической легенде к «мужу честну» Ратше[6][K 2]. Пушкин неоднократно писал о своей родословной в стихах и прозе; он видел в своих предках образец древнего рода, истинной «аристократии», честно служившего отечеству, но не снискавшего благосклонности правителей и «гонимого». Не раз он обращался (в том числе в художественной форме) и к образу своего прадеда по матери — африканца Абрама Петровича Ганнибала, ставшего слугой и воспитанником Петра I, а потом военным инженером и генералом",
        "books": [
          {
            "id": "2",
            "title": "Евгений Онегин"
          },
          {
            "id": "6",
            "title": "Сборник стихотворений"
          }
        ]
      },
      {
        "id": "3",
        "name": "Уэсли Дж. Чан",
        "biography": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "books": [
          {
            "id": "3",
            "title": "Python. Создание приложений"
          }
        ]
      },
      {
        "id": "4",
        "name": "Дэвид Флэнаган",
        "biography": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "books": [
          {
            "id": "4",
            "title": "JavaScript. Карманный справочник"
          },
          {
            "id": "9",
            "title": "HTML и CSS. Путь к совершенству"
          }
        ]
      },
      {
        "id": "5",
        "name": "Дорлинг Киндерсли, АСТ, Астрель",
        "biography": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "books": [
          {
            "id": "5",
            "title": "Развитие жизни на Земле"
          }
        ]
      },
      {
        "id": "6",
        "name": "Омар Хайям",
        "biography": "Уроженец города Нишапура в Хорасане (ныне иранская провинция Хорасан-Резави). Омар был сыном палаточника, также у него была младшая сестра Аиша. В 8 лет глубоко занимался математикой, астрономией, философией. В 12 лет Омар стал учеником Нишапурского медресе. Он блестяще закончил курс по мусульманскому праву и медицине, получив квалификацию хакима, то есть врача. Но медицинская практика мало интересовала Омара. Он изучал сочинения известного математика и астронома Сабита ибн Курры, труды греческих математиков.",
        "books": [
          {
            "id": "7",
            "title": "Рубаи"
          },
          {
            "id": "8",
            "title": "Вино и чаша. \"Рубайат\""
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div className="col-md-9">
        <h1>Authors List</h1>
        <Author itemData={this.getAuthorList()}/>
      </div>
    );
  }
}