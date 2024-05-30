import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <>
    
    <div className="project__wrap">
        <div className="container">
        <h1>Наши работы</h1>
        <div className="results__flex">
        <div className="results__block">
        <div className="project__logo">
            <img src="./Alibaba Logo.png" alt="" />
            <p>Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печей каминов текст пример</p>
        </div>
           <div className="results">
           <h3 className='result'>Результат:</h3>
        <div className="project__results">
        <div className="results__rek">
                <h4>+ 85,71%</h4>
                <p> увеличение количества обращений с рекламы</p>
            </div>

            <div className="results__rek">
                <h4>+ 83,51%</h4>
                <p>увеличение <br /> конверсии</p>
            </div>

            <div className="results__rek">
                <h4>- 50,51% </h4>
                <p>снижение стоимости <br /> за обращение</p>
            </div>
        </div>
           </div>
           <div className="system">
            <h3>Системы:</h3>
            <div className="system__img">
            <img src="./logo-google-adwords 1.png" alt="" />
            <img src="./pasted-image-0-12 1.png" alt="" />
            </div>
           </div>
        </div>

        <div className="results__block">
        <div className="project__logo">
            <img src="./Alibaba Logo.png" alt="" />
            <p>Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печей каминов текст пример</p>
        </div>
           <div className="results">
           <h3 className='result'>Результат:</h3>
        <div className="project__results">
        <div className="results__rek">
                <h4>+ 85,71%</h4>
                <p> увеличение количества обращений с рекламы</p>
            </div>

            <div className="results__rek">
                <h4>+ 83,51%</h4>
                <p>увеличение <br /> конверсии</p>
            </div>

            <div className="results__rek">
                <h4>- 50,51% </h4>
                <p>снижение стоимости <br /> за обращение</p>
            </div>
        </div>
           </div>
           <div className="system">
            <h3>Системы:</h3>
            <div className="system__img">
            <img src="./logo-google-adwords 1.png" alt="" />
            <img src="./pasted-image-0-12 1.png" alt="" />
            </div>
           </div>
        </div>
           
        </div>
      
        </div>
    </div>
    
    </>
  )
}

export default Projects