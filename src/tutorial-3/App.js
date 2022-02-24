import React, { useState } from 'react';
import './style.css';
import Tab from './Components/Tab';

export const App = () => {
  const [ active, setActive ] = useState(1);

  const tabs = [
    {
      id: 1,
      inputId: 'tab-one',
      title: 'Сколько всего мест в доме?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!',
    },
    {
      id: 2,
      inputId: 'tab-two',
      title: 'Самая дорогая квартира?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.',
    },
    {
      id: 3,
      inputId: 'tab-three',
      title: 'Могу ли я отменить бронирование?',
      description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
    },
    {
      id: 4,
      inputId: 'tab-four',
      title: 'Можно ли купить квартиру?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.',
    },
  ];

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          <div>
            {tabs.map((item) => (
              <div key={item.id} className={active === item.id ? 'tab active' : 'tab'}>
                <label htmlFor={item.inputId} onClick={() => setActive(item.id)}>
                  {item.title}
                </label>
                <div className="tab-content">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
