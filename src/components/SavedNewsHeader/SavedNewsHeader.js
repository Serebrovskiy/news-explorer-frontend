import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="savedNewsHeader">
     <h3 className="savedNewsHeader__subtitle">Сохранённые статьи</h3>
     <h1 className="savedNewsHeader__title">Грета, у вас 5 сохранённых статей</h1>
     <p className="savedNewsHeader__keywords-text"> По ключевым словам: <span className="savedNewsHeader__keyword">Природа, Тайга</span> и 
     <span className="savedNewsHeader__keyword"> 2-м другим</span></p>
    </section>
  );
}

export default SavedNewsHeader;